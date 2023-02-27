type PostType = {
  author: string;
  comment: string;
};

const Post: React.FC<PostType> = (props) => {
  return (
    <div className="my-3 mx-5 border-2 rounded-lg border-neutral-400 bg-neutral-800 shadow-2xl">
      <div className="m-3">
        <p className="font-semibold">{props.author}</p>
        <p className="italic">{props.comment}</p>
      </div>
    </div>
  );
};

export default Post;
