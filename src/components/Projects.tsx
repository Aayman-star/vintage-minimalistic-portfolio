import React from "react";
import { platypi } from "@/lib/fonts";

const Projects = () => {
  return (
    <div className="w-full bg-neutral-900">
      <div className="w-full h-auto md:max-w-5xl md:mx-auto md:h-[90vh]">
        <h3 className={` ${platypi.className} text-2xl font-semibold `}>
          Projects
        </h3>
      </div>
      <hr className="border-t-[1px] border-neutral-800 max-w-5xl mx-auto" />
    </div>
  );
};

export default Projects;
