import React, { useState } from "react";
import { MdSave } from "react-icons/md";

type BioFormProps = {
  onSubmit: () => void;
  headerText?: string;
  uid: string;
};

const BioForm: React.FC<BioFormProps> = (props) => {
  const { headerText, onSubmit } = props;

  const [bio, setBio] = useState("");
  const [isPosting, setIsPosting] = useState(false);

  const handlePost = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsPosting(true);
    try {
      await onSubmit();
    } catch (error) {
      console.error("Error posting:", error);
    } finally {
      setIsPosting(false);
      setBio("");
    }
  };

  return (
    <div className="flex justify-center items-center">
      <form
        className="bg-neutral-100 rounded-lg p-4 w-full max-w-[800px]"
        onSubmit={handlePost}
      >
        <div className="text-lg mb-4 font-semibold  text-neutral-700">
          <p className=" ">{headerText}</p>
        </div>
        <div className="mb-4">
          <textarea
            id="comment"
            className="border rounded px-3 py-2 w-full text-black min-h-[200px]"
            value={bio}
            onChange={(event) => setBio(event.target.value)}
          />
        </div>
        <div className="flex justify-center gap-10 w-full">
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
