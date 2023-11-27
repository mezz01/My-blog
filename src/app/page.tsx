import Image from 'next/image'
import fs from "fs"
import Link from 'next/link';


const getBlogPost = () => {
  const folder = "blogposts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  const titles = markdownPosts.map((file) => file.replace(".md", ""));
  return titles;
}

export default function Home() {
  const metaData = getBlogPost();
  const postPreviews = metaData.map((title) => (
    <div>
      <Link href={`/blogPosts/${title}`}>
      <h2>{title}</h2>
      </Link>
    </div>
  ));
  return (
    <main>
      {postPreviews}
    </main>
  )
}
