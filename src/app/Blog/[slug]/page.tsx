import Link from "next/link";
import { Metadata } from "next";
import { platypi, zillaSlab } from "@/lib/fonts";
import { IoIosArrowRoundBack } from "react-icons/io";
import { getPostBySlug, getAllPosts } from "@/lib/posts";

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> => {
  const post = await getPostBySlug(params.slug);
  return {
    title: post.metadata.title,
    description: post.metadata.description,
  };
};

const BlogPost = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const post = await getPostBySlug(slug);

  return (
    <div
      className={`w-full h-auto md:min-h-screen bg-neutral-900 text-neutral-100 p-10`}>
      <div className="w-full h-full px-2 py-20 md:max-w-4xl md:mx-auto  md:p-20 flex flex-col gap-y-4">
        <Link className="flex items-center" href={"/Blog"}>
          <IoIosArrowRoundBack className="text-2xl" />
          <p className={`${zillaSlab.className} text-lg`}>Back</p>
        </Link>
        <h1 className={`${platypi.className} text-2xl md:text-3xl`}>
          {post.metadata.title}
        </h1>
        <p className={`${zillaSlab.className} md:text-lg font-light `}>
          {post.metadata.description}
        </p>
        <article
          className={`${platypi.variable} ${zillaSlab.variable} prose prose-neutral prose-invert prose-h1:text-lg prose-headings:font-platypi prose-p:font-light prose-p:font-zillaSlab md:prose-p:text-lg prose-li:font-zillaSlab prose-li:md:text-lg prose-pre:text-green-400`}>
          <div dangerouslySetInnerHTML={{ __html: post.postContent }} />
        </article>
      </div>
    </div>
  );
};

export default BlogPost;
export const generateStaticParams = () => {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
};
