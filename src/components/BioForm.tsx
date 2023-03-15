import React, { useState } from "react";
import { MdSave } from "react-icons/md";

type BioFormProps = {
  headerText?: string;

  isLoading: boolean;
  updateBio: (bio: string) => void;
};

const BioForm: React.FC<BioFormProps> = (props) => {
  const { headerText, isLoading, updateBio } = props;

  const [bio, setBio] = useState("");

  const handlePost = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateBio(bio);
  };

  return (
    <div className="flex justify-center items-center m-2 w-full min-w-[10000px] ">
      <form className="bg-neutral-100 rounded-lg" onSubmit={handlePost}>
        <div className="text-lg mb-4 font-semibold  text-neutral-700">
          <p className=" ">{headerText}</p>
        </div>
        <div className="w-full">
          <textarea
            disabled={isLoading}
            id="comment"
            className="border-2 border-neutral-300 rounded py-2 w-full text-black min-h-[200px] min-w-full"
            value={bio}
            onChange={(event) => setBio(event.target.value)}
          />
        </div>
        <div className="flex flex-row justify-center w-full">
          <button
            disabled={isLoading}
            type="submit"
            className="bg-neutral-700 hover:bg-neutral-800 text-white font-bold py-2 px-4 rounded-lg"
          >
            <div className="flex items-center gap-1">
              <MdSave size={30} />
              {isLoading ? "Saving.." : "Save"}
            </div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default BioForm;
