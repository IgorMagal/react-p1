import Post from "../components/Post";
import data from "../Posts.json";

const PostsList:React.FC = () => {
  return (
    <div className="text-center">
      <ul className="flex flex-wrap mx-10">
        {data.posts.map((post) => (
          <li key={post.id} className="w-full md:w-1/2 lg:w-1/3">
            <Post author={post.author} comment={post.comment} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsList;
