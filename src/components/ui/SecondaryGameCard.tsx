interface SecondaryGameCardProps {
    imagePath: string | undefined;
}  

const SecondaryGamesCard: React.FC<SecondaryGameCardProps> = ({ imagePath }) => {
  return (
    <div className="flex flex-col shadow-lg z-10 rounded-sm">
      {/* image */}
      <div>
        <img src={imagePath} alt="bitmap" />
      </div>
      {/* info */}
      <div className="flex flex-col gap-3 p-4 rounded-b-lg" style={{background: "linear-gradient(265deg , #221C4A 0%, #0A081F 100%)"}}>
        <h3 className="font-light  text-xs text-neutral-500 ">
          Action, RPG
        </h3>
        <div className="flex items-center justify-between">
          <h1 className="font-thin  text-sm text-white leading-[30px] ">
            Funny Video Adventure
          </h1>
          <img src="/images/download.png" alt="download" className="w-5 h-5"/>
        </div>
      </div> 
    </div>
  );
};

export default SecondaryGamesCard;
