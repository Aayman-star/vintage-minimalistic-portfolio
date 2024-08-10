import React from "react";
import Image from "next/image";
import hero from "/public/hero-image.jpg";
import { dancingScript, montserrat } from "@/lib/fonts";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPenNib } from "react-icons/fa";
const Hero = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-col items-center bg-neutral-900 py-[7.5rem] md:hidden">
        <div className="w-[330px] h-[550px] py-4 bg-white">
          <Image
            className="mx-auto shadow-md"
            src={hero}
            width={300}
            height={350}
            alt="hero-image"
          />
          <h1
            className={` text-neutral-900 text-3xl font-bold text-center py-2 mt-2 ${dancingScript.className}`}>
            Aayman Khalid
          </h1>

          <div className="flex items-center justify-around py-4  w-[70%] mx-auto border-t-[1px] border-neutral-900">
            <FaGithub className="text-xl text-neutral-800" />
            <FaXTwitter className="text-xl text-neutral-800" />
            <FaLinkedinIn className="text-xl text-neutral-800" />
            <FaPenNib className="text-xl text-neutral-800" />
          </div>
        </div>
        <div className="px-10 py-4">
          <h2 className="text-2xl mb-4 text-neutral-300">Software Engineer</h2>
          <p className={`${montserrat.className} font-light text-neutral-300`}>
            Someone who loves to play with code to develop useful and fun
            applications. Currently working with full-stack web development
            using Nextjs,Typescript and tailwindcss. Aspiring to be a cloud
            native applied generative AI engineer capable of developing gen-ai
            apps on the cloud.
          </p>
        </div>
      </div>
      <div className="w-full bg-neutral-900 hidden md:block">
        <div className="w-full md:max-w-5xl md:mx-auto h-auto">
          <div className="w-full h-[90vh] flex items-center justify-between">
            <div className="w-2/3 flex flex-col gap-y-4 p-12 text-neutral-100">
              <h1
                className={`text-5xl  text-neutral-300 font-bold  ${dancingScript.className}`}>
                Aayman Khalid
              </h1>
              <h2>Software Engineer</h2>
              <p className={`${montserrat.className} font-light`}>
                Someone who loves to play with code to develop useful and fun
                applications. Currently working with full-stack web development
                using Nextjs,Typescript and tailwindcss. Aspiring to be a cloud
                native applied generative AI engineer capable of developing
                gen-ai apps on the cloud.
              </p>
              <div className="flex items-center gap-x-10 py-4">
                <FaGithub className="text-xl text-neutral-300" />
                <FaXTwitter className="text-xl text-neutral-300" />
                <FaLinkedinIn className="text-xl text-neutral-300" />
                <FaPenNib className="text-xl text-neutral-300" />
              </div>
            </div>
            <div className="w-1/3">
              <Image
                className="border-8 mx-auto shadow-md"
                src={hero}
                width={250}
                height={300}
                alt="hero-image"
              />
            </div>
          </div>
        </div>
        <hr className="border-t-[1px] border-neutral-800 max-w-5xl mx-auto" />
      </div>
    </>
  );
};

export default Hero;
