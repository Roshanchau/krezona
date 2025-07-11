interface SecondaryNumberCardProps {
    Numbers: string;
    description: string;
}


const SecondaryNumberCard:React.FC<SecondaryNumberCardProps> = ({Numbers , description}) => {
  return (
    <>
      <div
        className="flex flex-col items-start justify-center px-10 py-6 rounded-lg scale-110"
        style={{
          background: "linear-gradient(265deg ,#6357F6 0%, #E6606C 100%)",
        }}
      >
        <h1 className="font-extralight flex-wrap text-3xl text-white leading-[40px] ">
          {Numbers}
        </h1>
        <h3 className="font-light  text-sm leading-7 text-neutral-400 text-start">
          {description}
        </h3>
      </div>
    </>
  );
};

export default SecondaryNumberCard;
