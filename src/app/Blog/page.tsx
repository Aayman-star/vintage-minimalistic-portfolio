import React from "react";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { platypi, zillaSlab } from "@/lib/fonts";
const page = () => {
  const posts = getAllPosts();
  const sortedPosts = posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  return (
    <div className="w-full h-auto md:min-h-screen p-10 bg-neutral-900">
      <div className="w-full h-full md:max-w-4xl md:mx-auto py-12">
        {sortedPosts?.map((post) => (
          <div
            className="text-neutral-200 py-6 px-4 border-[1px] border-neutral-800 rounded-md mt-4 flex items-center justify-between"
            key={post.slug}>
            <div>
              <p className={`${platypi.className}  text-neutral-300 text-lg`}>
                <Link href={`/Blog/${post.slug}`}> {post.title}</Link>
              </p>
              <span className={`${zillaSlab.className} text-neutral-300`}>
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
  );
};

export default page;
