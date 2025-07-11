interface EventsCardProps {
  imagePath: string | undefined;
  date: string;
  title: string;
}

const EventsCard: React.FC<EventsCardProps> = ({ imagePath, date, title }) => {
  return (
    <div className="flex flex-col shadow-lg rounded-sm relative  max-w-sm">
      {/* time card */}
      <div
        className="flex flex-row items-center gap-2 w-3/6 absolute  top-5 left-5 rounded-lg py-2 justify-center"
        style={{
          background: "linear-gradient(265deg ,#6357F6 0%, #E6606C 100%)",
        }}
      >
        <img src="/images/time.png" alt="time" />
        <h1 className="font-extralight flex-wrap text-sm text-white ">
          3d 12h:35m:42s
        </h1>
      </div>
      {/* image */}
      <div>
        <img src={imagePath} alt="bitmap"  className="h-60 w-70"/>
      </div>
      {/* info */}
      <div
        className="flex flex-col gap-3 px-8 py-7 rounded-b-lg h-30"
        style={{
          background: "linear-gradient(265deg ,#4D4F95 0%, #2B2D66 100%)",
        }}
      >
        <h3 className="font-light  text-xs text-neutral-400 ">{date}</h3>
        <div className="flex items-center justify-between">
          <h1 className="font-thin  text-lg text-white leading-[30px] ">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default EventsCard;
