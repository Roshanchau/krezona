import EventsCard from "./ui/EventsCard";
import { Button } from "@/base/ui/button";
import { useEffect, useState } from "react";
import axios from "axios";

interface Event {
  name: string;
  eventDate: Date;
  image: {
    url: string;
  };
}

const GameEvents = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          "https://krezona-backend.vercel.app/api/event"
        ); // Adjust the endpoint as needed
        console.log("Fetched events:", response);
        if (!response?.data?.data?.events) {
          console.error("No games found in response");
          return;
        }
        // Assuming the response structure is { games: Game[] }
        setEvents(response?.data?.data?.events);
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    };

    fetchEvents();
  }, []);

  const handleEvents = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" px-4 sm:px-6 md:px-16  mx-auto max-w-7xl mt-36">
      {/* intro */}
      <div className="flex flex-col items-center justify-center gap-4">
        <h3 className="font-light text-neutral-500">GAME EVENTS</h3>
        <h1 className="font-thin  text-center text-5xl text-white leading-[65px] ">
          Welcome to Game Events
        </h1>
        <h3 className="font-light text-sm leading-7 text-neutral-500 w-2/5 text-center">
          Video game developers take a designer's concepts and build them into a
          playable game for users.
        </h3>
      </div>
      {/* cards */}
      <div className="grid md:grid-cols-3 grid-cols-1 items-center justify-center gap-6 mt-12">
        {events.map((event, index) => {
          const date = new Date(event.eventDate);
          const formattedDate = date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          });
          if (index <= 2) {
            return (
              <EventsCard
                key={index}
                title={event.name}
                date={formattedDate}
                imagePath={event.image?.url}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      {isOpen && (
        <div className="grid md:grid-cols-3 grid-cols-1 items-center justify-center gap-6 mt-12">
          {events.map((event, index) => { 
            const date = new Date(event.eventDate);
            const formattedDate = date.toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            });
            if(index>2){
              return (
                <EventsCard
                  key={index}
                  title={event.name}
                  date={formattedDate}
                  imagePath={event.image?.url}
                />
              );
            }
          })}
        </div>
      )}
      <div className="flex items-center justify-center mt-16">
        <Button
          onClick={handleEvents}
          className="border-2 border-neutral-700  px-8"
        >
          {isOpen ? "HIDE EVENTS" : "ALL EVENTS"}
        </Button>
      </div>
    </div>
  );
};

export default GameEvents;
