interface FeaturesCardProps {
    title: string;
    description: string;
    imagePath: string;
}

const FeaturesCard:React.FC<FeaturesCardProps> = ({title, description , imagePath}) => {
  return (
    <div className="relative mt-16">
      <div
        className="rounded-lg absolute md:right-[75px] right-[90px] bottom-40"
        style={{
          width: "100px",
          height: "100px",
          background: "linear-gradient(265deg , #221C4A 0%, #0A081F 100%)",
          clipPath:
            "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)", // Hexagon shape
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Content for the hexagon can go here */}
        <div
          style={{
            width: "80px", // slightly larger than inner
            height: "80px",
            background: "#6357F6", // border color
            clipPath:
              "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "78px",
              height: "78px",
              background: "linear-gradient(265deg , #221C4A 0%, #0A081F 100%)",
              clipPath:
                "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Content here */}
            <img src={imagePath} alt="shape" className="object-contain w-10 h-10"/>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col p-8 rounded-lg text-center"
                style={{
          background: "linear-gradient(265deg ,#4D4F95 0%, #2B2D66 100%)",
        }}
      >
        <h1 className="font-extralight text-2xl text-white mt-10 ">{title}</h1>
        <h3 className="font-light text-sm mt-2 text-neutral-400">
          {description}
        </h3>
      </div>
    </div>
  );
};

export default FeaturesCard;
