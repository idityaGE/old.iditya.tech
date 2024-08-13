import Globe from "@/components/magicui/globe";

export function GlobeCard() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden md:pb-60 md:shadow-xl">
      <Globe className="top-0" />
    </div>
  );
}