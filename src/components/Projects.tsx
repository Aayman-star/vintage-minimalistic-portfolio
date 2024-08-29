import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/data";
import { FaLink } from "react-icons/fa";
import { platypi, zillaSlab } from "@/lib/fonts";
import { IoIosArrowRoundForward } from "react-icons/io";

const Projects = () => {
  return (
    <div
      id="Projects"
      className="w-full bg-neutral-900  pt-[5rem] pb-4 md:pt-10">
      <div className="w-full h-auto  md:max-w-4xl md:mx-auto md:h-[75vh] px-4 py-4 md:p-10 flex flex-col gap-y-10">
        <h3
          className={` ${platypi.className} text-3xl font-semibold text-neutral-300 px-3`}>
          {/* <span className="text-4xl font-bold">P</span>rojects */}
          <span className={`block text-neutral-300 font-light text-xl`}>
            A list of my latest works
          </span>
        </h3>

        <div className={`w-full ${zillaSlab.className}`}>
          {projects.map((project, i) => (
            <div
              key={i}
              className={`w-full py-2 border-[1px] border-neutral-800 rounded-lg flex items-center gap-x-2 md:gap-x-4 mb-4`}>
              <Image
                className="rounded-md mx-1 md:mx-4"
                src={project.img}
                width={100}
                height={200}
                alt="project-image"
              />
              <div>
                <h2
                  className={`text-2xl font-semibold  text-neutral-300 flex items-center gap-x-2`}>
                  {project.name}
                  <Link href={project.link} target="_blank">
                    <FaLink className="text-sm font-light text-neutral-400" />
                  </Link>
                </h2>
                <p className={`  font-light text-neutral-400 `}>
                  {project.description}
                </p>
              </div>

              {/* <ul>
                {project.stack.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul> */}
            </div>
          ))}
        </div>
        <div className="w-full md:max-w-4xl md:mx-auto flex items-center justify-end">
          <Link className="mr-4" href="/Projects">
            <p
              className={`text-neutral-400 ${zillaSlab.className} md:text-lg flex items-center`}>
              All Projects
              <span className="inline-block">
                <IoIosArrowRoundForward className="text-2xl" />
              </span>
            </p>
          </Link>
        </div>
      </div>

      <hr className="w-[80%] mx-auto border-t-[1px] border-neutral-800 mt-4 md:max-w-4xl" />
      {/* <hr className="border-t-[1px] border-neutral-800 max-w-4xl mx-auto" /> */}
    </div>
  );
};

export default Projects;
