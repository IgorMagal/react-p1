import { useEffect, useState } from "react";
import PostForm from "./components/PostForm";
import PostsList from "./components/PostsList";
import data from "./Posts.json";
import Ipost from "./interfaces/PostInterface";
import PostHeader from "./components/PostHeader";

function App() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [postsData, setPostsData] = useState<Ipost[]>([]);

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
    <div className="text-center">
      <PostHeader handleModal={handleModal} />
      <main className="mt-24 sticky">
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
    </div>
  );
}

export default App;
