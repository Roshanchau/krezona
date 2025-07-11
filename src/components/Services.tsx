
const Services = () => {
  return (
    <>
      <div className="px-4 sm:px-6 md:px-16 mx-auto max-w-7xl mt-36 ">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-[120px] items-center">
          {/* hero image */}
          <div>
            <img src="/images/service.png" alt="hero image" className="" />
          </div>
          {/* intro */}
          <div className="flex flex-col flex-wrap items-start justify-center gap-6">
            <h3 className="font-light text-neutral-500">OUR SERVICE</h3>
            <h1 className="font-thin text-5xl text-white leading-[65px] ">
              The Most Important Factors When Applying
            </h1>
            <h2 className="text-wrap w-10/12 font-thin text-white">
              Video game developers take a designer's concepts and build them
              into a playable game for users.
            </h2>
            <div className=" flex flex-row items-center justify-center gap-6">
              {/* polygon */}
              <div
                className="rounded-lg"
                style={{
                  width: "100px",
                  height: "100px",
                  background:
                    "linear-gradient(265deg , #221C4A 0%, #0A081F 100%)",
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
                      background:
                        "linear-gradient(265deg , #221C4A 0%, #0A081F 100%)",
                      clipPath:
                        "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {/* Content here */}
                    <img
                      src="/images/service2.png"
                      alt="shape"
                      className="object-contain w-10 h-10"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-center gap-1">
                <h2 className="text-wrap  font-thin text-white">Video game</h2>
                <h3 className="font-light text-sm leading-7 text-neutral-500 text-center">
                  Designer's concepts
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
