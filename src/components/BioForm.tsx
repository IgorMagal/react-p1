import React, { useState } from "react";
import { MdSave } from "react-icons/md";
import { setUserBio } from "../services/UserService";

type BioFormProps = {
  headerText?: string;
  uid: string;
};

const BioForm: React.FC<BioFormProps> = (props) => {
  const { headerText, uid } = props;

  const [bio, setBio] = useState("");
  const [isPosting, setIsPosting] = useState(false);

  const handlePost = async (event: React.FormEvent<HTMLFormElement>) => {
    //event.preventDefault();

    setIsPosting(true);
    setUserBio(uid, bio);
    setIsPosting(false);
  };

  return (
    <div className="flex justify-center items-center m-2 w-full min-w-[10000px] ">
      <form className="bg-neutral-100 rounded-lg" onSubmit={handlePost}>
        <div className="text-lg mb-4 font-semibold  text-neutral-700">
          <p className=" ">{headerText}</p>
        </div>
        <div className="w-full">
          <textarea
            id="comment"
            className="border rounded py-2 w-full text-black min-h-[200px] min-w-full"
            value={bio}
            onChange={(event) => setBio(event.target.value)}
          />
        </div>
        <div className="flex flex-row justify-center w-full">
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

export default BioForm;
