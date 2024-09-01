import React from "react";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { platypi, zillaSlab } from "@/lib/fonts";
import { IoIosArrowRoundBack } from "react-icons/io";
const page = () => {
  const posts = getAllPosts().filter((post, i) => post.publish);
  const sortedPosts = posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  return (
    <>
      <div className="w-full h-auto md:min-h-screen px-10 py-8 bg-neutral-900">
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
        <div className="w-full h-full md:max-w-4xl md:mx-auto py-5">
          {sortedPosts?.map((post) => (
            <div
              className="text-neutral-200 py-6 px-4 border-[1px] border-neutral-800 rounded-md mt-4 flex items-center justify-between transition-all duration-300 ease-in-out transform hover:border-neutral-700 hover:-translate-y-1 hover:shadow-lg"
              key={post.slug}>
              <div>
                <p className={`${platypi.className}  text-neutral-200 text-lg`}>
                  <Link href={`/Blog/${post.slug}`}> {post.title}</Link>
                </p>
                <span className={`${zillaSlab.className} text-neutral-400`}>
                  {post.description}
                </span>
              </div>

              <p
                className={`${zillaSlab.className} text-neutral-400 font-light `}>
                {post.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
