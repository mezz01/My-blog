import Image from 'next/image'
import fs from "fs"
import Link from 'next/link';
import matter from 'gray-matter'
import { title } from 'process';
import { PostMetadata } from '../../components/PostMetadata';

const getBlogPost = (): PostMetadata[] => {
  const folder = "blogposts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // Gray matter parsing content 
  const posts = markdownPosts.map((filename) => {
    const filecontent = fs.readFileSync(`blogposts/${filename}`, "utf-8");
    const matterresult = matter(filecontent);
    return {
      title: matterresult.data.title,
      date: matterresult.data.date,
      subtitle: matterresult.data.subtitle,
      slug: filename.replace(".md", ""),
    };
  });

  return posts;
}

export default function Home() {
  const metaData = getBlogPost();
  const postPreviews = metaData.map((post) => (
    <div>
      <Link href={`/${post.slug}`}>
      <h1>{post.title}</h1>
      </Link>
      <p>{post.subtitle}</p>
      <p>{post.date}</p>
    </div>
  ));
  return (
    <main>
      {postPreviews}
    </main>
  )
}
