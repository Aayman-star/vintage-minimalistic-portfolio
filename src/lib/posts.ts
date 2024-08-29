import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const blogDirectory = path.join(process.cwd(), "/blog");

export const getAllPosts = () => {
  /**Read all the files in the blog direcotry */
  /**This array named files only stores the names of the files,nothing else */
  const files = fs.readdirSync(blogDirectory);
  const postsData = files.map((file, i) => {
    /**Read the file content */
    const fullPath = path.join(blogDirectory, file);
    const fileContent = fs.readFileSync(fullPath, "utf-8");

    /**Use gray matter to parse the front-matter of the content */
    const { data, content } = matter(fileContent);
    const slug = data.slug ? data.slug : file.replace(/\.mdx$/, "");
    /**Function modified to place the recent date if there is no date */
    const date = data.date
      ? new Date(data.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          weekday: "long",
        })
      : new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          weekday: "long",
        });

    /**Return the data,content and slug in an object */
    return {
      file,
      slug,
      title: data.title,
      description: data.description,
      publish: data.publish,
      date: date,
      content,
    };
  });
  return postsData;
};

/**This function takes a slug as an argument and returns the specific post with that slug */
/**The slug is the part of the URL that identifies the post */
export async function getPostBySlug(slug: string) {
  // const realSlug = slug.replace(/\.mdx$/, "");
  const postData = getAllPosts().find((post) => post.slug === slug);
  //console.log("POST CONTENT:", postData);
  const fullPath = path.join(blogDirectory, `${postData?.file}`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  // console.log("FILE CONTENTS:", fileContents);
  const { data: metadata, content } = matter(fileContents);
  /**Function modified to place the recent date if there is no date */
  const date = metadata.date
    ? new Date(metadata.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long",
      })
    : new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long",
      });
  const Content = await remark().use(html).process(content);
  // console.log("CONTENT:", Content);
  const postContent = Content.toString();

  return { slug: slug, metadata, date, content, postContent };
}
