interface BlogCardProps {
  imagePath: string | undefined;
  date: string;
  title: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ imagePath, date, title }) => {
  return (
    <div className="flex flex-col shadow-lg rounded-sm relative  max-w-sm">
      {/* image */}
      <div>
        <img src={imagePath} alt="bitmap"  className="h-60 w-70"/>
      </div>
      {/* info */}
      <div
        className="flex flex-col gap-3 px-8 py-7 rounded-b-lg h-30"
        style={{
          background: "linear-gradient(265deg ,#4D4F95 0%, #2B2D66 100%)",
        }}
      >
        <div className="flex items-center justify-between">
          <h1 className="font-thin  text-lg text-white leading-[30px] ">
            {title}
          </h1>
        </div>
        <h3 className="font-light  text-xs text-neutral-400 ">{date}</h3>
      </div>
    </div>
  );
};

export default BlogCard;
