import { Button } from "@/base/ui/button";
import BlogCard from "./ui/BlogCard";

const Blog = () => {
  return (
    <div className=" px-4 sm:px-6 md:px-16  mx-auto max-w-7xl mt-36">
      {/* intro */}
      <div className="flex flex-col items-center justify-center gap-4">
        <h3 className="font-light text-neutral-500">OUR BLOG</h3>
        <h1 className="font-thin  text-center text-5xl text-white leading-[65px] ">
          Latest Game Articles
        </h1>
        <h3 className="font-light text-sm leading-7 text-neutral-500 w-2/5 text-center">
          Video game developers take a designer's concepts and build them into a
          playable game for users developers, also known as games developers.
        </h3>
      </div>
      {/* cards */}
      <div className="flex md:flex-row flex-col items-center justify-center gap-6 mt-12">
        <BlogCard
          imagePath="/images/creation.png"
          date="30 Nov, 2020"
          title="The Complete Guide Average Video Game Designer Salary"
        />
        <BlogCard
          imagePath="/images/space.png"
          date="12 Dec, 2020"
          title="The 5 Decisive Components of Outstanding Learning Games"
        />
        <BlogCard
          imagePath="/images/ship.png"
          date="24 Dec, 2020"
          title="Become a Gaming Programmer: Step-by-Step Career Guide"
        />
      </div>
      <div className="flex items-center justify-center mt-16">
        <Button className="border-2 border-neutral-700  px-8">
          SEE MORE
        </Button>
      </div>
    </div>
  );
};

export default Blog;
