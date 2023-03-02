import { MdOutlinePerson } from "react-icons/md";

type PostType = {
  author: string;
  comment: string;
  date: string;
  image?: string;
};

const Post: React.FC<PostType> = (props) => {
  const { author, comment, date, image } = props;

  return (
    <div className="m-2 p-1 mx-5 border-2 rounded-lg border-neutral-900 bg-neutral-100 shadow-md hover:shadow-2xl shadow-neutral-900 hover:border-white text-neutral-800">
      <div className="flex justify-between">
        <div className="flex py-2 px-4 gap-2 items-start align-middle">
          <div className="border-2 border-neutral-800 rounded-full">
            {image ? image : <MdOutlinePerson size={35} />}
          </div>
          <p className="font-semibold py-2 align-top italic ">{author}</p>
        </div>
        <p className="italic text-xs py-4 px-3">{date.substring(0, 10)}</p>
      </div>
      <p className="text-neutral-900 p-2 text-justify border-2 border-neutral-300 rounded-md">
        {comment}
      </p>
      <div className="text-sm text-start px-4 py-2">0 Comments</div>
    </div>
  );
};

export default Post;
