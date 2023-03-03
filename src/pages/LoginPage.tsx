import React from "react";
import { UserAuth } from "../services/AuthCtxProvider";
import { MdArrowForward } from "react-icons/md";
const LoginPage = () => {
  const { googleSignIn } = UserAuth();
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2 className="text-white text-center py-8">LoginPage</h2>
      <div className="mx-auto max-w-[240px] py-4">
        <button
          onClick={handleGoogleSignIn}
          className="bg-neutral-800 hover:bg-neutral-600 font-semibold py-2 px-4"
        >
          Signin with Google
        </button>
      </div>
    </>
  );
};

export default LoginPage;
