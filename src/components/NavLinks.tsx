import { cn } from "../lib/utils";
import { NavLink } from "react-router";


interface MainNavProps {
  label: string[];
}
 
const NavLinks: React.FC<MainNavProps> = ({ label }) => {
//   const { theme, toggleTheme } = useThemeStore();

  const routes = label.map((route) => ({  
    label: route,
  }));


  return (
    <nav className=" flex items-center justify-center lg:gap-x-8  md:gap-x-5">
      {routes.map((route) => (
        <NavLink 
          key={route.label}
          to={`#${route.label}`}
          className={cn(
            "text-base font-medium  transition-colors hover:text-neutral-400 cursor-pointer"
          )}
        > 
          {route.label}
        </NavLink>
      ))} 
    </nav>  
  );
};

export default NavLinks;