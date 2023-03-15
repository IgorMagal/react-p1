import { useNavigate } from "react-router-dom";
import PostForm from "../components/PostForm";
import { UserAuth } from "../services/AuthCtxProvider";

const NewPostPage = () => {
  const { user } = UserAuth();
  const nav = useNavigate();
  return (
    <PostForm
      authorId={user!.uid}
      authorName={user!.displayName!}
      onClose={() => nav("/posts")}
      onSubmit={() => {}}
      authorPhoto={user!.photoURL!}
      headerText="What's on your mind today?"
    />
  );
};

export default NewPostPage;
