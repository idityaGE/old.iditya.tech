import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { ConnectCard } from "./cards/connect";
import { GlobeCard } from "./cards/globe";
import { SkillCard } from "./cards/skillcard";

import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  InputIcon,
} from "@radix-ui/react-icons";

const features = [
  {
    Icon: InputIcon,
    name: "Full text search",
    background: <SkillCard />,
    className: "lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-4",
  },
  {
    Icon: FileTextIcon,
    name: "Save your files",
    background: <GlobeCard />,
    className: "lg:row-start-1 lg:row-end-3 lg:col-start-3 lg:col-end-5",
  },
  {
    Icon: CalendarIcon,
    name: "Calendar",
    background: <ConnectCard />,
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: BellIcon,
    name: "Notifications",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-4 lg:col-end-5 lg:row-start-3 lg:row-end-4",
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