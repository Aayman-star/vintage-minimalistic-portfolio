import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { platypi, zillaSlab } from "@/lib/fonts";
import { IoIosArrowRoundForward } from "react-icons/io";

const Blog = () => {
  const posts = getAllPosts();
  const sortedPosts = posts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <div
      id="Blog"
      className={`w-full h-auto px-4 pb-4 md:max-w-4xl md:h-[90vh] md:mx-auto pt-[5.25rem] md:p-10`}>
      <h2
        className={`${platypi.className} text-xl font-light text-neutral-300`}>
        Thoughts and ideas...
      </h2>

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

          <p className={`${zillaSlab.className} text-neutral-400 font-light `}>
            {post.date}
          </p>
        </div>
      ))}
      <div className="w-full md:max-w-4xl md:mx-auto flex items-center justify-end pt-4 md:pt-10">
        <Link className="" href={"/Blog"}>
          <p
            className={`${zillaSlab.className} text-neutral-300 flex items-center md:text-lg`}>
            More Posts
            <span className="inline-block">
              <IoIosArrowRoundForward className="text-2xl" />
            </span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
