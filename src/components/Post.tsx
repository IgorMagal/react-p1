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
    <div className="m-2 p-1 mx-5 border-2 rounded-lg border-neutral-400 bg-neutral-800 shadow-xl shadow-neutral-900 hover:border-white">
      <div className="flex justify-between">
        <div className="flex py-2 px-4 gap-2 items-start align-middle">
          <div className="border-2 border-neutral-50 rounded-full">
            {image ? image : <MdOutlinePerson size={35} />}
          </div>
          <p className="font-semibold py-2 align-top ">{author}</p>
        </div>
        <p className="italic text-neutral-300 text-xs py-4 px-3">{date}</p>
      </div>
      <p className="italic px-2 text-justify">{comment}</p>
      <div className="text-sm text-start px-4 py-2 from-neutral-100">
        0 Comments
      </div>
    </div>
  );
};

export default Post;
