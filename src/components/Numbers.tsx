const Numbers = () => {
  return (
    <div className=" px-4 sm:px-6 md:px-16  mx-auto max-w-7xl mt-36">
      {/* intro */}
      <div className="flex flex-col items-center justify-center gap-4">
        <h3 className="font-light text-neutral-500">SOME NUMBERS</h3>
        <h1 className="font-thin  text-center text-4xl text-white leading-[65px] ">
          Games Have a Consistent Look
        </h1>
        <h3 className="font-light text-sm leading-7 text-neutral-500 w-3/5 text-center">
          Video game developers take a designer's concepts and build them into a
          playable game for users developers, also known as games developers.
        </h3>
      </div>
      {/* images */}
      <div className="relative flex items-center justify-center">
        <div className="flex items-center justify-center md:w-auto w-full mt-16 z-10">
          <img
            src="/images/creation.png"
            alt="creation"
            className="rounded-b-lg"
          />
        </div>
        <div className="absolute md:right-36 -right-16 top-5">
          <img src="/images/pattern.png" alt="pattern" />
        </div>
        <div className="bg-white absolute md:left-36 top-40 z-20 md:w-1/5 w-4/5 p-3 flex flex-col gap-6 rounded-lg md:p-6">
          <h3 className="font-light text-neutral-500">01</h3>
          <h1 className="font-extralight flex-wrap text-3xl text-neutral-700 leading-[40px] ">
            Market Research
          </h1>
          <h3 className="font-light  text-sm leading-7 text-neutral-500 text-start">
            Game Development is the art of creating games and describes the
            design.
          </h3>
        </div>
      </div>
      <div className="flex items-center justify-center mt-10">
        <img src="/images/pins.png" alt="pins" />
      </div>
    </div>
  );
};

export default Numbers;
