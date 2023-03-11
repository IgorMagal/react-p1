import { useEffect, useState } from "react";
import { UserAuth } from "../services/AuthCtxProvider";
import { getUserBio } from "../services/UserService";
import BioForm from "../components/BioForm";
import { MdDelete, MdEdit } from "react-icons/md";

const ProfilePage = () => {
  const { user } = UserAuth();
  const [bio, setBio] = useState<string | null>(null);

  useEffect(() => {
    if (user!.uid !== null) {
      getUserBio(user!.uid).then((data) => setBio(data));
    }
  }, [user]);

  return (
    //m-2 p-1 mx-5 border-2 rounded-lg border-neutral-900 bg-neutral-100 shadow-xl hover:scale-105 shadow-neutral-900 hover:border-white text-neutral-800

    <div className="flex flex-col gap-4 text-neutral-800 py-20 text-center items-center w-full min-h-screen p-4 bg-neutral-100">
      <p className="text-2xl">{`ProfilePage for ${user?.displayName}`}</p>
      <p className="text-md">{user?.email}</p>
      <img
        className="w-40 h-40 rounded-full border-2 border-neutral-50 shadow-lg shadow-neutral-500"
        src={user?.photoURL ? user.photoURL : undefined}
        alt={user?.displayName!}
      />
      {bio === null ? (
        <BioForm
          onSubmit={() => {}}
          uid={user!.uid}
          headerText="Tell us a little bit about yourself."
        />
      ) : (
        <div className="flex flex-col my-5 p-1 max-w-2xl w-full border-2 rounded-lg border-neutral-300 bg-neutral-200  text-neutral-800">
          <h2 className="text-2xl text-left px-4 py-1">About me:</h2>
          <p className="text-justify py-2 px-5">{bio}</p>
          <div className="flex justify-end gap-4 px-4 py-1">
            <div className="flex gap-1 items-center hover:font-semibold">
              <MdEdit size={20} />
              <button className="" onClick={() => setBio(null)}>
                Edit
              </button>
            </div>
            <div className="flex gap-1 items-center hover:font-semibold">
              <MdDelete size={20} />
              <button className="" onClick={() => setBio(null)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
