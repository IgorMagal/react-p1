import Post from "../components/Post";
import IPost from "../interfaces/PostInterface";

const PostsList: React.FC<{ posts: IPost[] }> = (props) => {
  const { posts } = props;
  return (
    <div className="text-center">
      <ul className="flex flex-wrap mx-10">
        {posts.map((post) => (
          <li key={post.id} className="w-full md:w-1/2 lg:w-1/3">
            <Post author={post.author} comment={post.comment} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsList;
