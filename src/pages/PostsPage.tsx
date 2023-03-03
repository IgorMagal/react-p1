import { useEffect, useState } from "react";
import PostsList from "../components/PostsList";
import PostForm from "../components/PostForm";
import data from "../Posts.json";
import Ipost from "../interfaces/PostInterface";

const PostsPage = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [postsData, setPostsData] = useState<Ipost[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);

  const handleModal = () => {
    setModalOpen(!modalOpen);
  };

  useEffect(() => {
    setPostsData(data.posts);
  }, []);

  const submitPostHandler = (newPost: Ipost) => {
    setPostsData((posts) => [newPost, ...posts]);
  };

  return (
    <main className="mt-24 sticky text">
      {modalOpen && (
        <PostForm
          authorName="IgorMagal"
          authorPhoto="link"
          headerText="What's on your mind?"
          onClose={handleModal}
          onSubmit={submitPostHandler}
        />
      )}
      <PostsList posts={postsData} />
    </main>
  );
};

export default PostsPage;
