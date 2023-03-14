import React, { useState } from "react";
import { MdCancel, MdSave } from "react-icons/md";
import Ipost from "../models/PostInterface";
import { addPost } from "../services/PostService";

type PostFormProps = {
  onSubmit: (post: Ipost) => void;
  onClose: () => void;
  headerText?: string;
  authorId: string;
  authorName: string;
  authorPhoto?: string;
};

const PostForm: React.FC<PostFormProps> = (props) => {
  const { authorId, authorName, authorPhoto, headerText, onClose } = props;

  const [comment, setComment] = useState("");
  const [isPosting, setIsPosting] = useState(false);

  const handlePost = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsPosting(true);
    try {
      await addPost(
        authorId,
        authorName,
        authorPhoto!,
        comment,
        new Date().toISOString()
      );
    } catch (error) {
      console.error("Error posting:", error);
    } finally {
      setIsPosting(false);
      setComment("");
      onClose();
    }
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center">
      <form
        className="bg-neutral-100 rounded-lg p-4 w-full max-w-[800px] mx-5  animate-[wiggle_0.05s_ease-in-out_2]"
        onSubmit={handlePost}
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
            disabled={isPosting}
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
            disabled={isPosting}
            type="submit"
            className="bg-neutral-700 hover:bg-neutral-800 text-white font-bold py-2 px-4 rounded-lg"
          >
            <div className="flex items-center gap-1">
              <MdSave size={30} />
              {isPosting ? "Posting.." : "Save"}
            </div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostForm;
