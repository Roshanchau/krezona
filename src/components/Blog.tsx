import { Button } from "@/base/ui/button";
import BlogCard from "./ui/BlogCard";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

interface Blog {
  title: string;
  content: string;
  createdAt: string;
  image: {
    url: string;
  }[];
}

const Blog = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          "https://krezona-backend.vercel.app/api/blog"
        ); // Adjust the endpoint as needed
        console.log("Fetched blogs:", response);
        if (!response?.data?.data?.blogs) {
          console.error("No games found in response");
          return;
        }
        // Assuming the response structure is { games: Game[] }
        setBlogs(response?.data?.data?.blogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  const handleBlogs = () => {
    setIsOpen(!isOpen);
  };

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
 <div className="grid md:grid-cols-3 grid-cols-1 items-center justify-center gap-6 mt-12">
        {blogs.map((blog, index) => {
          const date = new Date(blog.createdAt);
          const formattedDate = date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          });
          if (index <= 2) {
            return (
              <BlogCard
                key={index}
                title={blog.title}
                date={formattedDate}
                imagePath={blog.image[0].url}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      {isOpen && (
        <div className="grid md:grid-cols-3 grid-cols-1 items-center justify-center gap-6 mt-12">
          {blogs.map((blog, index) => { 
            const date = new Date(blog.createdAt);
            const formattedDate = date.toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            });
            if(index>2){
              return (
                <BlogCard
                  key={index}
                  title={blog.title}
                  date={formattedDate}
                  imagePath={blog.image[0].url}
                />
              );
            }
          })}
        </div>
      )}
      <div className="flex items-center justify-center mt-16">
        <Button
          onClick={handleBlogs}
          className="border-2 border-neutral-700  px-8"
        >
          {isOpen ? "HIDE" : "SEE MORE"}
        </Button>
      </div>
    </div>  
  );
};

export default Blog;
