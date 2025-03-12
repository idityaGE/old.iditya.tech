import Globe from "@/components/magicui/globe";

function GlobeCard() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden pb-60 lg:pb-60 md:pb-80 sm:pb-80 md:shadow-xl">
      <Globe className="top-[-10%]" />
    </div>
  );
}

export default GlobeCard;
