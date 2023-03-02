import React, { useState } from "react";
import { MdCancel, MdSave } from "react-icons/md";
import Ipost from "../interfaces/PostInterface";

type PostFormProps = {
  onSubmit: (post: Ipost) => void;
  onClose: () => void;
  headerText?: string;
  authorName: string;
  authorPhoto?: string;
};

const PostForm: React.FC<PostFormProps> = (props) => {
  const { authorName, authorPhoto, headerText, onClose, onSubmit } = props;
  // const [author, setAuthor] = useState(authorName);
  const [comment, setComment] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit({
      id: new Date().toISOString() + authorName,
      author: authorName,
      comment: comment,
    });
    onClose();
    // setAuthor("");
    setComment("");
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 ">
      <div className="fixed left-0 top-0 bottom-0 right-0 flex justify-center items-center ">
        <form
          className="bg-neutral-100 rounded-lg p-8 w-full max-w-lg mx-5  animate-[wiggle_0.05s_ease-in-out_2]"
          onSubmit={handleSubmit}
        >
          <div className="text-xl mb-4 font-semibold  text-neutral-700">
            <p>{`Hey ${authorName},`}</p>
            <p className=" ">{headerText}</p>
          </div>
          <div className="mb-4">
            <textarea
              id="comment"
              className="border rounded px-3 py-2 w-full text-black"
              value={comment}
              onChange={(event) => setComment(event.target.value)}
            />
          </div>
          <div className="flex justify-center gap-10 w-full">
            <button
              onClick={onClose}
              type="button"
              className="bg-white hover:bg-neutral-700 hover:text-white text-neutral-700 border-2 font-bold py-2 px-4 rounded-lg"
            >
              <div className="flex items-center gap-1">
                <MdCancel size={30} />
                Cancel
              </div>
            </button>
            <button
              type="submit"
              className="bg-neutral-700 hover:bg-neutral-800 text-white font-bold py-2 px-4 rounded-lg"
            >
              <div className="flex items-center gap-1">
                <MdSave size={30} />
                Save
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostForm;
