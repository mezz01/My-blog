import fs from "fs";



const getPostContent = (posts: string) => {
    const folder = "blogposts/";
    const file = `${folder}${posts}.md`;
    const content = fs.readFileSync(file, "utf8");
    return content;
};

export default function PostApp(props: any){
    const posts = props.params.posts;
    const content = getPostContent(posts);
    
    return(
        <main>
            <h1>This is a post: {posts}</h1>
            <p></p>
        </main>

    )
}

/**
 * The app directory routing :
 * 
 * While starting this blog creation I wanted to try the new nextjs app router instead of
 * the old pages directory, there is nothing wrong with pages tho I used it in my personal blog
 * (See why link to other blog), A blog need to rednder some markdown files so using routes
 * made it easier for me to identify and work with each link on the url, by only using
 * the app router that is a file routing system . 
 * 
 * The most app router utility I used was dynamic routes with the [] file and layout.tsx 
 * also was useful to create reusable components that appears in every page (Header and footer).
 * => (screenshot of the file structure and the layout.tsx code)
 * 
 * To explain more how things work, here is a picture illustrating how the nextjs
 * routing system works :
 * 
 * (A tldraw picture showing how it works)
 * 
 * Keep in mind that while files always define routes, only content returned by the 
 * "page.tsx" or "route.tsx" can be publicly adressable.
 * 
 * So to end up things this can be a minimal intro to nextjs routing, there is much more
 * to that that I ll try to explain as I go on my projects.
 */