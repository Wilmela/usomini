import { cn } from "@/lib/utils";
import MaxWidthWrapper from "./max-width-wrapper";
import SectionTitle from "./section-title";
import Count from "./count";

type StatsType = {
  value: number;
  description: string;
  className?: string;
};

const stat = {
  population: 10,
  projects: 10,
  leaders: 10,
  years: 10,
};
const FeaturedStats = () => {
  return (
    <MaxWidthWrapper>
      <SectionTitle
        descColor="text-gray-700"
        titleColor="text-black"
        title="Featured Stats"
        descritpion="Projects so far"
      />
      {/* MOBILE */}
      <div className="grid grid-cols-2 gap-4 md:hidden" id={"feature"}>
        <Stat
          value={stat.population}
          description="population"
          className="rounded-tl-xl "
        />
        <Stat
          value={stat.projects}
          description="projects"
          className="rounded-tr-xl "
        />
        <Stat
          value={stat.leaders}
          description="leaders"
          className="rounded-bl-xl "
        />
        <Stat
          value={stat.years}
          description="years"
          className="rounded-br-xl "
        />
      </div>

      {/* DESKTOP */}
      <div className="w-full hidden md:flex justify-center items-center relative h-44 bg-linear-to-tr from-green-800 to-green-950 ">
        <div className="flex justify-between w-4xl ">
          <DesktopStat
            value={stat.population}
            description="population"
            className="rounded-l-full"
          />
          <DesktopStat value={stat.projects} description="projects" />
          <DesktopStat value={stat.leaders} description="leaders" />
          <DesktopStat
            value={stat.years}
            description="years"
            className="rounded-r-full"
          />
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default FeaturedStats;

function Stat({ value, description, className }: StatsType) {
  return (
    <div
      className={cn(
        "space-y-4 border flex flex-col items-center justify-between py-8 bg-green-50 backdrop-blur-2xl group group-hover:shadow-xl group-hover:scale-105 transition-all duration-300 hover:rotate-z-5 cursor-pointer ",
        className
      )}
    >
      <Count
        end={value}
        suffix="k+"
        className="text-4xl group-hover:text-5xl font-bold"
      />
      <h3 className="text-xl group-hover:text-2xl capitalize font-light">
        {description}
      </h3>
    </div>
  );
}
function DesktopStat({ value, description, className }: StatsType) {
  return (
    <div
      className={cn(
        "space-y-4 border flex flex-col items-center justify-between py-8 bg-green-50 backdrop-blur-2xl group group-hover:shadow-xl group-hover:scale-105 transition-all duration-300 hover:rotate-z-5 cursor-pointer  flex-1 h-36",
        className
      )}
    >
      <Count
        end={value}
        suffix="k+"
        className="text-4xl group-hover:text-5xl font-bold"
      />
      <h3 className="text-xl group-hover:text-2xl capitalize font-light">
        {description}
      </h3>
    </div>
  );
}
