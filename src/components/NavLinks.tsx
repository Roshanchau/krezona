import { cn } from "../lib/utils";


interface MainNavProps {
  label: string[];
}
 
const NavLinks: React.FC<MainNavProps> = ({ label }) => {
//   const { theme, toggleTheme } = useThemeStore();

  const routes = label.map((route) => ({  
    label: route,
  }));


  return (
    <nav className=" flex flex-row items-center justify-center  md:gap-x-12 gap-x-8">
      {routes.map((route) => (
        <a 
          key={route.label}
          href={`#${route.label}`}
          className={cn(
            "text-sm font-light  transition-colors hover:text-neutral-400 cursor-pointer opacity-85"
          )}
        > 
          {route.label}
        </a>
      ))} 
    </nav>    
  );
};

export default NavLinks;