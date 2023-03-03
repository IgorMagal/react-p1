import React from "react";
import {
  MdMessage,
  MdPostAdd,
  MdLogin,
  MdLogout,
  MdOutlinePerson,
} from "react-icons/md";
import { UserAuth } from "../services/AuthCtxProvider";

const PostHeader: React.FC<{ handleModal: () => void }> = (props) => {
  const { user, googleSignIn, logout } = UserAuth();

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

  const loginBtn = (
    <button
      onClick={() => googleSignIn()}
      type="button"
      className="bg-neutral-700 shadow-2xl hover:bg-neutral-500 text-white font-semibold py-2 px-4 rounded flex items-center"
    >
      <MdLogin size={30} />
      Login
    </button>
  );

  const logoutBtn = (
    <button
      onClick={() => logout()}
      type="button"
      className="bg-neutral-700 shadow-2xl hover:bg-neutral-500 text-white font-semibold py-2 px-4 rounded flex items-center"
    >
      <MdLogout size={30} />
      Logout
    </button>
  );
  return (
    <header className="fixed py-2 pb-2 top-0 left-0 right-0 flex justify-between px-14 items-center bg-neutral-800 border-b-neutral-300 border-b-2 z-10">
      <div className="flex align-middle justify-center items-center">
        <MdMessage size={40} />
        <p className="  align-bottom sm:text-xl md:text-2xl lg:text-3xl font-bold">
          osts App
        </p>
      </div>
      <div className="flex gap-2 text-center align-middle justify-center items-center">
        {user?.photoURL ? (
          <img
            sizes="40"
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
