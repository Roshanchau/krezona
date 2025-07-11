const Polygon = () => {
  return (
    <>
      <div
        className="rounded-lg"
        style={{
          width: "100px",
          height: "100px",
           background: "linear-gradient(265deg ,#4D4F95 0%, #2B2D66 100%)",
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

export default Polygon;
