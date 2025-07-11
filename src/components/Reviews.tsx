import Polygon from "./ui/polygon";
import PrimaryPolygon from "./ui/PrimaryPolygon";

const Reviews = () => {
  return (
    <>
      <div className="px-4 sm:px-6 md:px-16 mx-auto max-w-7xl mt-36 overflow-x-hidden">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-[120px] items-center">
          {/* intro */}
          <div className="flex flex-col flex-wrap items-start justify-center gap-6">
            <h3 className="font-light text-neutral-500">REVIEWS</h3>
            <h1 className="font-thin text-5xl w-5/6 text-white leading-[65px] ">
              People Reviews Of Our Games
            </h1>
            <h2 className="text-wrap w-10/12 font-thin text-white">
              Game Development is the art of creating games and describes the
              design, development and release.
            </h2>
            <div className="flex items-center justify-center gap-8 mt-8">
                <PrimaryPolygon/>
                <Polygon/>
                <Polygon/>   
            </div>
          </div>
          {/* Reveiws card */}
          <div
            className="flex flex-col items-start relative justify-center gap-6 px-10 py-10 rounded-lg"
            style={{
              background: "linear-gradient(265deg ,#4D4F95 0%, #2B2D66 100%)",
            }}
          >
            <div className="absolute -top-8 right-5">
              <img src="/images/quote.png" alt="quote" />
            </div>
            <div className="flex items-start ">
              <img src="/images/stars.png" alt="stars" />
            </div>
            <h2 className="text-wrap w-10/12 font-thin text-white">
              "Graphics are naturally important because games are, to an extent,
              a work of art. The actual technical quality of graphics is
              important, but even more important is the art design aspect of
              game design. Games should have a consistent look and feel that
              reflects the themes and moods of the game itself."
            </h2>
            <h1 className="font-thin text-2xl text-white ">Meg Rigden</h1>
            <h3 className="font-light text-sm text-neutral-500 text-center">
              Type something
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
