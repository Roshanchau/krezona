const Awards = () => {
  return (
    <div className=" px-4 sm:px-6 md:px-16  mx-auto max-w-7xl mt-36">
      {/* intro */}
      <div className="flex flex-col items-center justify-center gap-4">
        <h3 className="font-light text-neutral-500">OUR AWARDS</h3>
        <h1 className="font-thin  text-center text-3xl text-white leading-[65px] ">
          Most Famous Awards We Got
        </h1>
      </div>
      {/* images */}
      <div className="flex md:flex-row flex-col items-center justify-center gap-28 mt-12">
        <div className="flex flex-row items-center justify-center md:gap-28 gap-4">
            <img src="/images/awards1.png" alt="awards" />
            <img src="/images/awards2.png" alt="awards" />
        </div>
        <div className="flex flex-row items-center justify-center md:gap-28 gap-4">
            <img src="/images/awards3.png" alt="awards" />
            <img src="/images/awards4.png" alt="awards" />
        </div>
      </div>                
    </div>
  );
};

export default Awards;
