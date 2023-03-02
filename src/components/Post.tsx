type PostType = {
  author: string;
  comment: string;
};

const Post: React.FC<PostType> = (props) => {
  return (
    <div className="m-2 p-1 mx-5 border-2 rounded-lg border-neutral-400 bg-neutral-800 shadow-xl shadow-neutral-900 hover:border-white">
      <p className="font-semibold">{props.author}</p>
      <p className="italic">{props.comment}</p>
      <div className="text-sm text-start px-4 pt-2 pb-1 from-neutral-100 italic">
        0 Comments
      </div>
    </div>
  );
};

export default Post;
