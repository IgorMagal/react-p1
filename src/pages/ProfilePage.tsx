import { UserAuth } from "../services/AuthCtxProvider";

const ProfilePage = () => {
  const { user } = UserAuth();

  return (
    <div className=" flex flex-col gap-2 py-20 text-center items-center w-full p-4">
      <p className="text-2xl">{`ProfilePage for ${user?.displayName}`}</p>
      <p className="text-md">{user?.email}</p>
      <img
        className="w-40 h-40 rounded-full border-2 border-neutral-50 shadow-lg shadow-black"
        src={user?.photoURL ? user.photoURL : undefined}
        alt={user?.displayName!}
      />
    </div>
  );
};

export default ProfilePage;
