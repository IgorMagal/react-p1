import Post from "../components/Post";
import IPost from "../models/PostInterface";

const PostsList: React.FC<{ posts: IPost[] }> = (props) => {
  const { posts } = props;

  return (
    <div className="text-center mt-24">
      <ul className="flex flex-wrap mx-2 my-2">
        {posts.reverse().map((post) => (
          <li
            key={post.id}
            className="w-full max-w-[50%] xs:max-w-[100%] xs:w-1/1 sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/4 grow"
          >
            <Post
              authorName={post.authorName}
              authorId={post.authorId}
              comment={post.comment}
              date={post.date}
              authorImage={post.authorImage}
              id={post.id}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsList;
