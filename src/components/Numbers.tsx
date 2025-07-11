import NumbersCard from "./ui/NumbersCard";
import SecondaryNumberCard from "./ui/SecondaryNumberCard";

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
      {/* cards */}
      <div className="flex md:flex-row flex-col items-center justify-center gap-6 mt-12">
        <div>
          <NumbersCard Numbers="7.300+" description="The sky was cloudless" />
        </div>
        <div>
          <NumbersCard Numbers="420<" description="Deep dark blue" />
        </div>
        <div>
          <SecondaryNumberCard Numbers="95%" description="Creating games" />
        </div>
        <div>
          <NumbersCard Numbers="0.002" description="Describes the design" />
        </div>
      </div>
    </div>
  );
};

export default Numbers;
