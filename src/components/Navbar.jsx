import { useLocation, useNavigate } from "react-router-dom";
import { navbarList } from "../utils/data";
import { LogOut } from "lucide-react";

const Navbar = () => {
  const router = useNavigate();
  const pathname = useLocation();
  const handleLogout = () => {
    sessionStorage.clear();
    router("/");
  };
  return (
    <nav className="sticky grid grid-cols-4 z-50 w-full bg-base-200 navbar">
      {navbarList.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={index + 1}
            className="flex w-full items-center justify-center"
          >
            <button
              className={`flex cursor-pointer flex-col items-center justify-center p-4 transition-all ease-in-out md:p-2.5 rounded-lg md:w-full max-w-xs h-full ${
                pathname.pathname === item.path ? "btn-accent" : ""
              }`}
              onClick={() => router(item.path)}
            >
              <Icon size={24} />
              <p className="hidden text-sm font-semibold md:block">
                {item.title}
              </p>
            </button>
          </div>
        );
      })}
      <button
        className="w-full items-center justify-center text-gray-500 flex cursor-pointer flex-col px-4 transition-all ease-in-out md:p-2.5 "
        onClick={handleLogout}
      >
        <LogOut size={24} />
        <p className="hidden text-sm font-semibold md:block ">Logout</p>
      </button>
    </nav>
  );
};

export default Navbar;
