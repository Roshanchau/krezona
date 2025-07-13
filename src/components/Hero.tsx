
const Hero = () => {
    const handleClick = () => {
    window.location.hash = "#Portfolio";
  }

  return (
    <>
      <div className="px-4 sm:px-6 md:px-16 mt-8 mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 items-center">
          {/* intro */}
          <div className="flex items-start flex-col flex-wrap w-5/6 gap-6">
            <h3 className="font-thin text-sm text-neutral-400">
              Game Development
            </h3>
            <h1 className="font-thin text-6xl text-white">
              The Art Of Creating Games{" "}
            </h1>
            <h2 className="text-wrap w-10/12 font-thin text-neutral-100 ">
              Game Development is the art of creating games and describes the
              design, development and release.
            </h2>
            <div className="flex flex-row items-center justify-center">
              <button onClick={handleClick} className="bg-blue-800 py-3 px-6 rounded-lg mb-10">
                PORTFOLIO
              </button>
              <div className="flex flex-row items-center justify-center">
                <img src="/images/play.png" alt="play"/>
                <h3 className="mb-10 text-sm font-light text-neutral-500">play video</h3>
              </div>
            </div>
          </div>
          {/* hero image */}
          <div>
            <img src="/images/hero.png" alt="hero image" className="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
