import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLink } from "react-icons/fa";
import { platypi, zillaSlab } from "@/lib/fonts";
import { projects } from "@/lib/data";

const Projects = () => {
  return (
    <div id="Projects" className="w-full bg-neutral-900 ">
      <div className="w-full h-auto md:max-w-4xl md:mx-auto md:h-[90vh] p-4 md:p-10 flex flex-col gap-y-10">
        <h3 className={` ${platypi.className} text-3xl font-semibold `}>
          <span className="text-4xl font-bold">P</span>rojects
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
                    <FaLink className="text-sm font-light text-neutral-300" />
                  </Link>
                </h2>
                <p className={` md:text-lg font-light text-neutral-400 `}>
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
      </div>
      <hr className="border-t-[1px] border-neutral-800 max-w-5xl mx-auto" />
    </div>
  );
};

export default Projects;
