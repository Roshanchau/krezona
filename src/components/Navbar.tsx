
import NavLinks from "./NavLinks";

export const revalidate=0;

const Navbar = () => {
  const handleClick = () => {
    window.location.hash = "#Contact";
  }

  return (
    <nav>
        <div className=" px-4 hidden sm:px-6 lg:px-8 md:flex flex-row h-16 items-center justify-around text-neutral-50 ">
          {/* logo */}
          <div>
            <img src="/logo/GAM.png" alt="logo" className=""/>
          </div>
          <NavLinks label={ ['About' , 'Games' ,'Services' , 'Events'  ,'Blog' ]} />
          <button onClick={handleClick} className="flex items-center justify-center border-2 text-sm border-neutral-400 border-opacity-60 px-4 py-2 rounded-lg">CONTACT US</button>
        </div>
    </nav>  
  );  
};

export default Navbar;
