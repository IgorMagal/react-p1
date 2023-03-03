import Post from "../components/Post";
import IPost from "../interfaces/PostInterface";

const PostsList: React.FC<{ posts: IPost[] }> = (props) => {
  const { posts } = props;
  return (
    <div className="text-center">
      <ul className="flex flex-wrap mx-2">
        {posts.reverse().map((post) => (
          <li
            key={post.id}
            className="w-full xs:w-1/1 sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/4"
          >
            <Post
              author={post.author}
              comment={post.comment}
              date={new Date().toISOString()}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsList;
