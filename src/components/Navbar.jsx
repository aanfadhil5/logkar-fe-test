import { useNavigate, useLocation } from "react-router-dom";
import { navbarList } from "../utils/data";

const Navbar = () => {
  const router = useNavigate();
  const pathname = useLocation();
  return (
    <nav className="bg-gray-50 md:border-r md:border-r-gray-300 ">
      <div className="fixed bottom-0 z-50 grid w-full grid-cols-3 grid-rows-1 gap-4 border-t border-t-gray-300 bg-gray-10 p-2 text-white md:sticky md:top-0 md:left-0 md:flex md:max-h-screen md:min-h-screen md:max-w-[80px] md:flex-col md:items-center md:justify-center md:gap-10 md:border-t-0 md:px-7">
        {navbarList.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index + 1}
              className="flex w-full items-center justify-center"
            >
              <a href={item.href}>
                <button
                  className={`flex cursor-pointer flex-col items-center justify-center px-4 transition-all ease-in-out md:p-2.5 ${
                    pathname === item.path ? "text-gray-600" : "text-gray-500"
                  }`}
                >
                  <Icon size={24} />
                  <p className="hidden text-sm font-semibold md:block">
                    {item.title}
                  </p>
                </button>
              </a>
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
