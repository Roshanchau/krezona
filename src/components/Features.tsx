import FeaturesCard from "./ui/FeaturesCard";

const Features = () => {
  return (
    <>
      <div className="px-4 sm:px-6 md:px-16 mx-auto max-w-7xl mt-36">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-[120px] items-center">
          {/* intro */}
          <div className="flex flex-col flex-wrap items-start justify-center gap-6">
            <h3 className="font-light text-neutral-500">FEATURES</h3>
            <h1 className="font-thin text-5xl text-white leading-[65px] ">
              Most Rewarding Games on Market
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
          </div>
          {/* features card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-6 mt-14">
                <FeaturesCard title="Quality" description="The sky was cloudless and of a deep dark blue spectacle." imagePath="/images/Shape1.png"/>
                <FeaturesCard title="Easy" description="Deep dark blue spectacle before us was indeed sublime." imagePath="/images/shape2.png"/>
            </div>
            <div className="flex flex-col gap-6">
                <FeaturesCard title="Fast" description="Cloudless and of a deep dark blue spectacle before us was." imagePath="/images/shape3.png"/>
                <FeaturesCard title="Reliably" description="Blue spectacle before us was indeed sublime." imagePath="/images/shape4.png"/>
            </div>
        </div>  
        </div>
      </div>
    </>
  );
};

export default Features;
