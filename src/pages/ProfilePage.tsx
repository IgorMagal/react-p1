import { useEffect, useState } from "react";
import { UserAuth } from "../services/AuthCtxProvider";
import { getUserBio, deleteUserBio, setUserBio } from "../services/UserService";
import BioForm from "../components/BioForm";
import { MdDelete, MdEdit } from "react-icons/md";
import LoadingSpinner from "../components/LoadingSpinner";

const ProfilePage = () => {
  const { user } = UserAuth();
  const [bio, setBio] = useState<string | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (user?.uid) {
      setLoading(true);
      getUserBio(user!.uid).then((data) => setBio(data));
      setLoading(false);
    }
  }, [user]);

  const deleteBioHandler = () => {
    setLoading(true);
    deleteUserBio(user!.uid).finally(() => setBio(null));
    setLoading(false);
  };

  const updateBioHandler = () => {};

  return (
    <div className="fixed top-0 left-0 w-screen h-screen gap-2 flex flex-col justify-center items-center bg-neutral-100 text-neutral-800">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <p className="text-2xl">{`ProfilePage for ${user?.displayName}`}</p>
          <p className="text-md">{user?.email}</p>
          <img
            className="w-40 h-40 rounded-full border-2 border-neutral-50 shadow-lg shadow-neutral-500"
            src={user?.photoURL ? user.photoURL : undefined}
            alt={user?.displayName ? user?.displayName! : undefined}
          />
          {bio === null && user?.uid ? (
            <BioForm
              isLoading={isLoading}
              updateBio={() => {}}
              headerText="Write a little bit about yourself:"
            />
          ) : (
            <div className="flex flex-col my-5 p-1 w-full max-w-[90%] border-2 rounded-lg border-neutral-300 bg-neutral-200  text-neutral-800">
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
                  <button className="" onClick={deleteBioHandler}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ProfilePage;
