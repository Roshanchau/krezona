interface NumbersCardProps {
    Numbers: string;
    description: string;
}


const NumbersCard:React.FC<NumbersCardProps> = ({Numbers , description}) => {
  return (
    <>
      <div
        className="flex flex-col items-start justify-center px-6 py-5 rounded-lg"
        style={{
          background: "linear-gradient(265deg ,#4D4F95 0%, #2B2D66 100%)",
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

export default NumbersCard;
