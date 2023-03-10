import { MdOutlinePerson, MdTextSnippet } from "react-icons/md";
import { Link } from "react-router-dom";
import Ipost from "../models/PostInterface";

const Post: React.FC<Ipost> = (props) => {
  const { authorImage, authorName, comment, date, id } = props;

  return (
    <div className="m-2 p-1 mx-5 border-2 rounded-lg border-neutral-900 bg-neutral-100 shadow-xl hover:scale-105 shadow-neutral-900 hover:border-white text-neutral-800">
      <div className="flex justify-between">
        <div className="flex py-2 px-4 gap-2 items-start align-middle">
          <div className="border-2 border-neutral-800 rounded-full">
            {authorImage ? (
              <img
                className="w-12 h-12 rounded-full border-1 border-black  cursor-pointer"
                src={authorImage}
                alt={authorName}
              />
            ) : (
              <MdOutlinePerson size={35} />
            )}
          </div>
          <p className="font-semibold py-2 align-top italic ">{authorName}</p>
        </div>
        <p className="italic text-xs py-4 px-3">{date.substring(0, 10)}</p>
      </div>
      <p className="text-neutral-900 p-2 text-justify border-2 border-neutral-300 rounded-md">
        {comment}
      </p>
      <div className="flex justify-between px-4 py-2">
        <p>0 Comments</p>
        <div className="flex items-center gap-1 hover:font-semibold hover:text-neutral-800">
          <MdTextSnippet size={20} />
          <Link to={id}>Details</Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
