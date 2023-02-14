import { useLocation, useNavigate } from "react-router-dom";
import { navbarList } from "../utils/data";
import { LogOut } from "lucide-react";

const Navbar = () => {
  const router = useNavigate();
  const pathname = useLocation();
  return (
    <nav className="sticky grid grid-cols-4 top-0 z-50 w-full bg-gray-100 p-2 justify-center">
      {navbarList.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={index + 1}
            className="flex w-full items-center justify-center"
          >
            <button
              className={`flex cursor-pointer flex-col items-center justify-center px-4 transition-all ease-in-out md:p-2.5 ${
                pathname === item.path ? "text-gray-600" : "text-gray-500"
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
      <div className="flex w-full items-center justify-center text-gray-500">
        <LogOut size={24} />
        <p className="hidden text-sm font-semibold md:block ">Logout</p>
      </div>
    </nav>
  );
};

export default Navbar;
