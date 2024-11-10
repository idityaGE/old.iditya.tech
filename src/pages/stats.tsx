import { GithubGraph } from '@/components/ui/github'
import { Discord } from '@/components/ui/discord'

const StatsPage = () => {
  return (
    <div className='flex flex-col'>
      <GithubGraph
        username="idityaGE"
        blockMargin={2}
        colorPallete={["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"]}
      />
      <Discord
        userId="768679363767697430"
        userName="idityage"
        activityDetailClass="dark:text-cyan-300"
        activityDescriptionClass="dark:text-[#ffbe6f]"
        progressBarClassName="dark:bg-[#ffbe6f]"
        localTimeClass="dark:text-green-500"
      />
    </div>
  )
}

export default StatsPage