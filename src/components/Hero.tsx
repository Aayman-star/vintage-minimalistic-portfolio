import { Data } from "@/lib/data";
import Header from "./Header";
import Image from "next/image";
import hero from "/public/hero-image.jpg";
import { FaGithub } from "react-icons/fa";
import { FaPenNib } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { dancingScript, zillaSlab } from "@/lib/fonts";

const Hero = () => {
  return (
    <>
      <Header />
      <div id="About">
        <div className="w-full h-auto flex flex-col items-center bg-neutral-900 pt-[7.5rem] md:hidden">
          <div className="w-[350px] h-[550px] py-4 px-4 bg-white shadow">
            <Image
              className="mx-auto shadow-md"
              src={hero}
              width={320}
              height={300}
              alt="hero-image"
            />
            <h1
              className={` text-neutral-800 text-3xl font-bold text-center py-2 mt-2 ${dancingScript.className}`}>
              {Data.Name}
            </h1>

            <div className="flex items-center justify-around py-4  w-[70%] mx-auto border-t-[1px] border-neutral-900">
              <FaGithub className="text-xl text-neutral-800 shadow-sm" />
              <FaXTwitter className="text-xl text-neutral-800 shadow-sm" />
              <FaLinkedinIn className="text-xl text-neutral-800 shadow-sm" />
              <FaPenNib className="text-xl text-neutral-800 shadow-sm" />
            </div>
          </div>
          <div className="px-7 py-4">
            <h2
              className={`${zillaSlab.className} text-2xl font-semibold mb-4 text-neutral-300 `}>
              {Data.Role}
            </h2>
            <p
              className={`${zillaSlab.className} font-light text-neutral-300 text-balance`}>
              {/* Someone who loves to play with code to develop useful and fun
              applications. Currently working with full-stack web development
              using Nextjs,Typescript and tailwindcss. Aspiring to be a cloud
              native applied generative AI engineer capable of developing gen-ai
              apps on the cloud. */}
              {Data.About}
            </p>
          </div>
          <hr className="w-[80%] mx-auto border-t-[1px] border-neutral-800 mt-4" />
        </div>
        {/* desktop view */}
        <div className="w-full bg-neutral-900 hidden md:block">
          <div className="w-full md:max-w-3xl lg:max-w-4xl mx-auto md:h-[75vh] lg:h-[90vh]">
            <div className="w-full h-[95vh] flex items-center justify-between">
              <div className="w-2/3 flex flex-col gap-y-4 p-12 text-neutral-100">
                <h1
                  className={`text-5xl  text-neutral-300 font-bold  ${dancingScript.className}`}>
                  {Data.Name}
                </h1>
                <h2
                  className={`${zillaSlab.className} text-2xl font-semibold text-neutral-300`}>
                  {Data.Role}
                </h2>
                <p
                  className={`${zillaSlab.className}  text-lg text-neutral-300 text-pretty`}>
                  {Data.About}
                </p>
                <div className="flex items-center gap-x-10 py-4">
                  <FaGithub className="text-xl text-neutral-300 shadow-md" />
                  <FaXTwitter className="text-xl text-neutral-300 shadow-md" />
                  <FaLinkedinIn className="text-xl text-neutral-300 shadow-md" />
                  <FaPenNib className="text-xl text-neutral-300 shadow-md" />
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
          <hr className="border-t-[1px] border-neutral-800 md:max-w-3xl lg:max-w-4xl mx-auto" />
        </div>
      </div>
    </>
  );
};

export default Hero;
