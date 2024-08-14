import React from "react";
import Image from "next/image";
import hero from "/public/hero-image.jpg";
import { dancingScript, montserrat, zillaSlab } from "@/lib/fonts";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPenNib } from "react-icons/fa";
const Hero = () => {
  return (
    <div id="About">
      <div className="w-full h-auto flex flex-col items-center bg-neutral-900 py-[7.5rem] md:hidden">
        <div className="w-[310px] h-[500px] py-4 bg-white">
          <Image
            className="mx-auto shadow-md"
            src={hero}
            width={280}
            height={300}
            alt="hero-image"
          />
          <h1
            className={` text-neutral-700 text-3xl font-bold text-center py-2 mt-2 ${dancingScript.className}`}>
            Aayman Khalid
          </h1>

          <div className="flex items-center justify-around py-4  w-[70%] mx-auto border-t-[1px] border-neutral-900">
            <FaGithub className="text-xl text-neutral-700" />
            <FaXTwitter className="text-xl text-neutral-700" />
            <FaLinkedinIn className="text-xl text-neutral-700" />
            <FaPenNib className="text-xl text-neutral-700" />
          </div>
        </div>
        <div className="px-6 py-4">
          <h2
            className={`${zillaSlab.className} text-2xl font-semibold mb-4 text-neutral-300 `}>
            Software Engineer
          </h2>
          <p className={`${zillaSlab.className} font-light text-neutral-300 `}>
            Someone who loves to play with code to develop useful and fun
            applications. Currently working with full-stack web development
            using Nextjs,Typescript and tailwindcss. Aspiring to be a cloud
            native applied generative AI engineer capable of developing gen-ai
            apps on the cloud.
          </p>
        </div>
        <hr className="w-[80%] mx-auto border-t-[1px] border-neutral-800 mt-4" />
      </div>
      {/* desktop view */}
      <div className="w-full bg-neutral-900 hidden md:block">
        <div className="w-full md:max-w-4xl md:mx-auto h-auto">
          <div className="w-full h-[95vh] flex items-center justify-between">
            <div className="w-2/3 flex flex-col gap-y-4 p-12 text-neutral-100">
              <h1
                className={`text-5xl  text-neutral-300 font-bold  ${dancingScript.className}`}>
                Aayman Khalid
              </h1>
              <h2
                className={`${zillaSlab.className} text-2xl font-semibold text-neutral-300`}>
                Software Engineer
              </h2>
              <p className={`${zillaSlab.className}  text-lg text-neutral-300`}>
                I am a software engineer specialising in fullstack web
                applications,primarily with Javasscript/Typescript.
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
                className="border-[10px] mx-auto shadow-md"
                src={hero}
                width={250}
                height={300}
                alt="hero-image"
              />
            </div>
          </div>
        </div>
        <hr className="border-t-[1px] border-neutral-800 max-w-4xl mx-auto" />
      </div>
    </div>
  );
};

export default Hero;
