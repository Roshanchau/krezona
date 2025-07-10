import { Button } from "@/base/ui/button";

const About = () => {
  return (
    <>
      <div className="px-4 sm:px-6 md:px-16 mx-auto max-w-7xl mt-36 ">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-[120px] items-center">
          {/* hero image */}
          <div>
            <img src="/images/about.png" alt="hero image" className="" />
          </div>
          {/* intro */}
          <div className="flex flex-col flex-wrap items-start justify-center gap-6">
            <h3 className="font-light text-neutral-500">ABOUT US</h3>
            <h1 className="font-thin text-5xl text-white leading-[65px] ">
              Design, Development and Release of a Game
            </h1>
            <h2 className="text-wrap w-10/12 font-thin text-white">
              Video game developers take a designer's concepts and build them
              into a playable game for users.
            </h2>
            <h3 className="font-light text-sm leading-7 text-neutral-500">
              Also known as games developers or video game programmers, write
              code for games for a variety of formats, such as PCs, consoles,
              web browsers and mobile phones.
            </h3>
            <Button className="border-2 border-opacity-30 border-neutral-600">Our Principles</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
