import IconCloud from "@/components/magicui/icon-cloud";
import Data from "@/config/Data.json";

const slugs = [...Data.skills];

export function SkillCard() {
  return (
    <div className="pb-6 w-96 mx-auto">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
