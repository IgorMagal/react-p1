import React from "react";
import { MdMessage, MdPostAdd } from "react-icons/md";

const PostHeader: React.FC<{ handleModal: () => void }> = (props) => {
  const newPostBtn = (
    <button
      onClick={props.handleModal}
      type="button"
      className="bg-neutral-700 shadow-2xl hover:bg-neutral-500 text-white font-semibold py-2 px-4 rounded flex items-center"
    >
      <MdPostAdd size={30} />
      New post
    </button>
  );
  return (
    <header className="fixed py-2 pb-2 top-0 left-0 right-0 flex justify-between px-14 items-center bg-neutral-800 border-b-neutral-300 border-b-2 z-10">
      <div className="flex align-middle justify-center items-center">
        <MdMessage size={40} />
        <p className=" sm:text-xl align-bottom lg:text-3xl font-bold">
          osts App
        </p>
      </div>
      {newPostBtn}
    </header>
  );
};

export default PostHeader;
