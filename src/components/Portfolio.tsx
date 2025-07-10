import GamesCard from "./ui/GamesCard";
import SecondaryGamesCard from "./ui/SecondaryGameCard";
import { Button } from "@/base/ui/button";

const Portfolio = () => {
  return (
    <div className=" px-4 sm:px-6 md:px-16  mx-auto max-w-7xl mt-36">
      {/* intro */}
      <div className="flex flex-col items-center justify-center gap-4">
        <h3 className="font-light text-neutral-500">Game Portfolio</h3>
        <h1 className="font-thin text-5xl text-white leading-[65px] ">
          Explore Our Games
        </h1>
        <h3 className="font-light text-sm leading-7 text-neutral-500 w-2/5 text-center">
          Game Development is the art of creating games and describes the
          design, development and release.
        </h3>
      </div>
      {/* games */}
      <div className="grid md:grid-cols-[7fr_3fr] grid-cols-1 gap-8 mt-16">
        <div>
            <GamesCard />
        </div>
        <div className=" flex gap-6 flex-col ">
            <SecondaryGamesCard imagePath="/images/cosmo.png"/>  
            <SecondaryGamesCard imagePath="/images/ship.png"/>
        </div>
      </div>
      <div className="flex items-center justify-center mt-16">
      <Button className="border-2 border-neutral-700  px-8">Watch All</Button>
      </div>
    </div>
  );
};

export default Portfolio;
