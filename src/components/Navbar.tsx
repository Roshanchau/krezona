
import NavLinks from "./NavLinks";

export const revalidate=0;

const Navbar = () => {
  return (
    <div>
        <div className=" px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between text-neutral-100 ">
          <NavLinks label={ ['About' , 'Projects' ,'Blogs' ]} />
        </div>
    </div>  
  );
};

export default Navbar;
