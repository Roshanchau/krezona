const PrimaryPolygon = () => {
  return (
    <>
      <div
        className="rounded-lg scale-125"
        style={{
          width: "100px",
          height: "100px",
           background: "linear-gradient(265deg ,#6357F6 0%, #E6606C 100%)",
          clipPath:
            "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)", // Hexagon shape
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
      </div>    
    </>
  );
};

export default PrimaryPolygon;
