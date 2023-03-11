import { useNavigate } from "react-router-dom";
import PostForm from "../components/PostForm";
import { UserAuth } from "../services/AuthCtxProvider";

const NewPostPage = () => {
  const { user } = UserAuth();

  const nav = useNavigate();

  const handleCancel = () => {
    nav("/");
  };

  return (
    <>
      <PostForm
        authorId={user!.uid}
        authorName={user!.displayName!}
        onClose={handleCancel}
        onSubmit={() => {}}
        authorPhoto={user!.photoURL!}
        headerText="What's on your mind today?"
      />
    </>
  );
};

export default NewPostPage;
