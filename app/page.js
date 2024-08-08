import PostCard from "@/components/PostCard";
import getPostMetadata from "@/utils/getPostMetadata";

export default function Home() {

  const postMetadata = getPostMetadata('recipes')
  console.log(postMetadata)

  return (
    <main>
      aaaaaaaaaaaaa
      <div className="postsContainer">
        {postMetadata.map((post, postIndex) => {
          return (
            <PostCard key={postIndex} post={post} />
          )
        })}
      </div>
    </main>
  );
}
