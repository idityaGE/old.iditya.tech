import { memo, useMemo, lazy, Suspense } from 'react';
import { Layers, MapPin, Link, Atom } from 'lucide-react';
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { PersonalData } from "@/config/personal.config";

// Lazy load card components
const ConnectCard = lazy(() => import("./cards/connect"));
const GlobeCard = lazy(() => import("./cards/globe"));
const SkillCard = lazy(() => import("./cards/skillcard"));
const Projects = lazy(() => import("./cards/projects"));

// Loading fallback for lazy-loaded components
const CardLoader = () => (
  <div className="w-full h-full flex items-center justify-center bg-background/50">
    <div className="animate-pulse h-5 w-20 bg-muted rounded-md"></div>
  </div>
);

const Bento = () => {
  // Memoize feature definitions to prevent unnecessary re-renders
  const features = useMemo(() => [
    {
      Icon: Atom,
      name: "Project",
      isIconHidden: true,
      background: (
        <Suspense fallback={<CardLoader />}>
          <Projects />
        </Suspense>
      ),
      className: "lg:col-start-1 lg:col-end-5 lg:row-start-4 lg:row-end-5",
    },
    {
      Icon: MapPin,
      name: `${PersonalData.address.city}, ${PersonalData.address.country}`,
      background: (
        <Suspense fallback={<CardLoader />}>
          <GlobeCard />
        </Suspense>
      ),
      className: "lg:row-start-1 lg:row-end-3 lg:col-start-3 lg:col-end-5",
    },
    {
      Icon: Layers,
      name: "Tech Stack",
      background: (
        <Suspense fallback={<CardLoader />}>
          <SkillCard />
        </Suspense>
      ),
      className: "lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-4",
    },
    {
      Icon: Link,
      name: "Connect",
      background: (
        <Suspense fallback={<CardLoader />}>
          <ConnectCard />
        </Suspense>
      ),
      className: "lg:col-start-3 lg:col-end-5 lg:row-start-3 lg:row-end-4",
    },
  ], []);

  return (
    <BentoGrid className='lg:grid-cols-4 lg:gap-4'>
      {features.map((feature) => (
        <BentoCard
          key={feature.name}
          name={feature.name}
          background={feature.background}
          Icon={feature.Icon}
          className={feature.className}
          isIconHidden={feature.isIconHidden}
        />
      ))}
    </BentoGrid>
  );
};

// Memoize the entire component to prevent unnecessary re-renders
export default memo(Bento);
