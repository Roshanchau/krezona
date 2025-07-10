const GamesCard = () => {
  return (
    <div className="flex flex-col shadow-lg z-10 rounded-sm max-w-2xl" >
      {/* image */}
      <div>
        <img src="/images/Bitmap.png" alt="bitmap"/>
      </div>
      {/* info */}
      <div className="flex flex-col rounded-b-lg gap-3 p-6" style={{background: "linear-gradient(265deg , #221C4A 0%, #0A081F 100%)"}}>
        <h3 className="font-light  text-sm leading-7 text-neutral-400 ">
          Action, RPG
        </h3>
        <div className="flex items-center justify-between">
          <h1 className="font-thin sm:text-lg text-sm md:text-3xl text-neutral-50 leading-[65px] ">
            Funny Video Adventure
          </h1>
          <img src="/images/download.png" alt="download" className="w-10 h-10"/>
        </div>
      </div> 
    </div>
  );
};

export default GamesCard;
