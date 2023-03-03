import React from "react";
import {
  MdMessage,
  MdPostAdd,
  MdLogin,
  MdLogout,
  MdOutlinePerson,
} from "react-icons/md";
import { FaGoogle } from "react-icons/fa";
import { UserAuth } from "../services/AuthCtxProvider";

const PostHeader: React.FC<{ handleModal: () => void }> = (props) => {
  const { user, googleSignIn, logout } = UserAuth();

  const newPostBtn = (
    <button
      onClick={props.handleModal}
      type="button"
      className="bg-neutral-700 shadow-2xl hover:bg-neutral-500 text-white font-semibold py-2 px-4 min-h-[50px] rounded flex items-center"
    >
      <MdPostAdd size={30} />
      <p className="xs:hidden">New post</p>
    </button>
  );

  const loginBtn = (
    <button
      onClick={() => googleSignIn()}
      type="button"
      className="bg-neutral-700 shadow-2xl hover:bg-neutral-500 text-white font-semibold py-2 px-4 min-h-[50px] rounded flex items-center"
    >
      <FaGoogle size={25} />
      <p className="xs:hidden px-1">Signin</p>
    </button>
  );

  const logoutBtn = (
    <button
      onClick={() => logout()}
      type="button"
      className="bg-neutral-700 shadow-2xl hover:bg-neutral-500 text-white font-semibold py-2 px-4 sm:px-2 rounded flex items-center"
    >
      <MdLogout size={30} />
      <p className="xs:hidden">Logout</p>
    </button>
  );
  return (
    <header className="fixed py-2 pb-2 top-0 left-0 right-0 flex justify-between px-10 xs:px-4 items-center bg-neutral-800 border-b-neutral-300 border-b-2 z-10">
      <div className="flex align-middle justify-center items-center min-h-[50px]">
        <MdMessage size={40} />
        <p className="xs:text-lg sm:text-lg md:text-2xl text-3xl font-bold">
          osts App
        </p>
      </div>
      <div className="flex gap-2 items-center">
        {user?.photoURL ? (
          <img
            className="w-10 h-10 rounded-full border-2 border-neutral-50"
            src={user.photoURL}
            alt={user.displayName!}
          />
        ) : (
          <MdOutlinePerson size={35} />
        )}
        {user?.displayName ? logoutBtn : loginBtn}
        {newPostBtn}
      </div>
    </header>
  );
};

export default PostHeader;
