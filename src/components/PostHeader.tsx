import {
  MdMessage,
  MdPostAdd,
  MdLogout,
  MdOutlinePerson,
} from "react-icons/md";
import { FaGoogle } from "react-icons/fa";
import { UserAuth } from "../services/AuthCtxProvider";
import { Link } from "react-router-dom";
import { useState } from "react";

const PostHeader: React.FC<{ handleModal: () => void }> = (props) => {
  const { user, googleSignIn, logout } = UserAuth();
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

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
      type="button"
      className="bg-neutral-700 shadow-2xl hover:bg-neutral-500 text-white font-semibold py-2 px-4 min-h-[50px] rounded flex items-center"
    >
      <FaGoogle size={25} />
      <p className="px-1">Signin</p>
    </button>
  );

  const logoutBtn = (
    <button
      onClick={() => logout()}
      type="button"
      className="bg-neutral-700 shadow-2xl w-full hover:bg-neutral-500 justify-around text-white font-semibold py-2 px-4 sm:px-2 mr-4 rounded flex items-center"
    >
      <MdLogout size={30} />
      <p>Logout</p>
    </button>
  );

  const profileLink = (
    <Link
      to={"/"} //`/profile/${user?.uid}`
      className="bg-neutral-700 shadow-2xl w-full justify-around hover:bg-neutral-500 text-white font-semibold py-2 px-4 sm:px-2 mr-4 rounded flex items-center"
    >
      <MdOutlinePerson size={30} />
      Profile
    </Link>
  );

  return (
    <header className="fixed py-2 pb-2 top-0 left-0 right-0 flex justify-between px-10 xs:px-4 items-center bg-neutral-800 border-b-neutral-300 border-b-2 z-10">
      <div className="flex align-middle justify-center items-center min-h-[50px]">
        <MdMessage size={40} />
        <p className="xs:text-lg sm:text-lg md:text-2xl text-3xl font-bold">
          Posts App
        </p>
      </div>
      <div className="flex gap-4 items-center relative">
        {newPostBtn}
        <>
          {user?.photoURL ? (
            <img
              onMouseEnter={handleMenuToggle}
              className="w-12 h-12 rounded-full border-2 border-neutral-50 shadow-lg shadow-black cursor-pointer"
              src={user.photoURL}
              alt={user.displayName!}
            />
          ) : (
            <MdOutlinePerson
              onClick={() => googleSignIn()}
              size={40}
              className="cursor-pointer border-2 border-neutral-50 text-white hover:bg-neutral-600 rounded-full"
            />
          )}
        </>
        {showMenu && (
          <div
            onMouseLeave={handleMenuToggle}
            className="absolute right-0 top-10 z-50 bg-neutral-100 shadow-lg px-2 py-2 rounded-md min-w-[150px]"
          >
            {user ? (
              <div className="flex flex-col items-center gap-2 w-full m-2 justify-around">
                {profileLink}
                {logoutBtn}
              </div>
            ) : (
              loginBtn
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default PostHeader;
