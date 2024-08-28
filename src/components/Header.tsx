import { platypi } from "@/lib/fonts";
import { FaHome } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { FaBlog } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <header className="md:hidden w-full fixed h-[5rem] bg-neutral-900">
        <ul className="w-[80%] mx-auto h-full border-b-[1px] border-neutral-800 flex items-center justify-between text-neutral-300">
          <a href="/">
            <li>
              <FaHome className="text-2xl" />
            </li>
          </a>
          <a href="#Projects">
            <li>
              <GrProjects className="text-2xl" />
            </li>
          </a>
          <a href="#Blog">
            <li>
              <FaBlog className="text-2xl" />
            </li>
          </a>
        </ul>
      </header>
      {/* Desktop Header */}
      <header className="w-full fixed h-16 hidden backdrop-blur md:block">
        <div className="w-full md:max-w-4xl md:mx-auto md:h-full border-b-[1px] border-neutral-800">
          <ul
            className={`${platypi.className} w-[90%] mx-auto h-full flex items-center justify-between  font-bold text-[1.35rem] text-neutral-300`}>
            <a href="/">
              <li>About</li>
            </a>
            <a href="#Projects">
              <li>Projects</li>
            </a>
            <a href="#Blog">
              <li>Blog</li>
            </a>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
