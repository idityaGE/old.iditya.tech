import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { ConnectCard } from "./cards/connect";
import { GlobeCard } from "./cards/globe";
import { SkillCard } from "./cards/skillcard";
import { Projects } from "./cards/projects";
import { Layers, MapPin, Link, Atom } from 'lucide-react';
import { PersonalData } from "@/config/personal.config";




const features = [
  {
    Icon: MapPin,
    name: `${PersonalData.address.city}, ${PersonalData.address.country}`,
    background: <GlobeCard />,
    className: "lg:row-start-1 lg:row-end-3 lg:col-start-3 lg:col-end-5",
  },
  {
    Icon: Layers,
    name: "Tech Stack",
    background: <SkillCard />,
    className: "lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-4",
  },
  {
    Icon: Link,
    name: "Connect",
    background: <ConnectCard />,
    className: "lg:col-start-3 lg:col-end-5 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: Atom,
    name: "Notifications",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-4 lg:col-end-5 lg:row-start-3 lg:row-end-4 lg:opacity-0 lg:flex hidden -z-10",
  },
  {
    Icon: Atom,
    name: "Project",
    isIconHidden: true,
    background: <Projects />,
    className: "lg:col-start-1 lg:col-end-5 lg:row-start-4 lg:row-end-5",
  },
];

function Bento() {
  return (
    <BentoGrid className="lg:grid-rows-3">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}

export default Bento;