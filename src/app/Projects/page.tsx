import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data";
import { FaLink } from "react-icons/fa";
import { platypi, zillaSlab } from "@/lib/fonts";
import { IoIosArrowRoundBack } from "react-icons/io";

const page = () => {
  return (
    <div className="w-full bg-neutral-900 text-neutral-300 pt-24 md:p-20">
      <div className="w-full h-screen md:max-w-4xl md:mx-auto md:min-h-screen px-4">
        {/* <p>This is the Projects Page</p> */}
        <div className="w-full md:max-w-4xl md:mx-auto flex items-center text-neutral-400">
          <Link className="group" href="/">
            <p
              className={`${zillaSlab.className} flex items-center md:text-lg`}>
              <span className="inline-block">
                <IoIosArrowRoundBack className="text-2xl transition-transform duration-200 ease-in-out transform group-hover:-translate-x-1" />
              </span>
              Back
            </p>
          </Link>
        </div>

        <div className={`w-full h-auto pt-10  ${zillaSlab.className}`}>
          {projects.map((project, i) => (
            <div
              key={i}
              className={`w-full py-2 border-[1px] border-neutral-800 rounded-lg flex items-center gap-x-2 md:gap-x-4 mb-4 transition-all duration-300 ease-in-out transform hover:border-neutral-700 hover:-translate-y-1 hover:shadow-lg`}>
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
    </div>
  );
};

export default page;
