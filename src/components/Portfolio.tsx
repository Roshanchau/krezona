import GamesCard from "./ui/GamesCard";
import SecondaryGamesCard from "./ui/SecondaryGameCard";
import { Button } from "@/base/ui/button";
import axios from "axios";
import { useEffect, useState } from "react";

interface Game {
  title: string;
  description: string;
  image: {
    url: string;
  }[];
}

const Portfolio = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get(
          "https://krezona-backend.vercel.app/api/game"
        ); // Adjust the endpoint as needed
        console.log("Fetched games:", response);
        if (!response?.data?.data?.games) {
          console.error("No games found in response");
          return;
        }
        // Assuming the response structure is { games: Game[] }
        setGames(response?.data?.data?.games);
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    };

    fetchGames();
  }, []);

  const handleWatch = () => {
    setIsOpen(!isOpen);
  };

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
          {games.map((game, index) => {
            if (index <= 1) {
              return (
                <SecondaryGamesCard
                  key={index}
                  title={game.title}
                  description={game.description}
                  imagePath={game?.image[0].url}
                />
              );
            }
            if (index > 1) {
              return null;
            }
          })}
        </div>
      </div>
      {isOpen && (
        <div className="grid md:grid-cols-3 grid-cols-1 items-center justify-center gap-6 mt-12">
          {games.map((game, index) => {
            if (index > 1) {
              return (
                <SecondaryGamesCard
                  key={index}
                  title={game.title}
                  description={game.description}
                  imagePath={game.image[0].url}
                />
              );
            }
            return null;
          })}
        </div>
      )}

      <div className="flex items-center justify-center mt-16">
        <Button
          onClick={handleWatch}
          className="border-2 border-neutral-700  px-8"
        >
          {isOpen? "HIDE GAMES" : "WATCH ALL"}
        </Button>
      </div>
    </div>
  );
};

export default Portfolio;
