import { useState } from "react";
import "./App.css";
import NewPostForm from "./components/NewPostForm";
import PostsList from "./components/PostsList";

function App() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleModal = () => {
    setModalOpen(!modalOpen);
  };

  const submitPostHandler = () => {};

  const newPostBtn = (
    <button
      onClick={handleModal}
      type="button"
      className="bg-neutral-700 hover:bg-neutral-800 text-white font-semibold py-2 my-5 px-4 rounded"
    >
      Add new post
    </button>
  );

  return (
    <div className="text-center">
      <div className="fixed top-0 left-0 right-0 flex justify-between px-14 items-center bg-neutral-800">
        <p className=" sm:text-lg align-middle lg:text-4xl font-bold py-5">
          Posts App
        </p>
        {newPostBtn}
      </div>
      <div className="mt-24 sticky">
        {modalOpen && <NewPostForm onClose={handleModal} />}
      </div>
      <PostsList />
    </div>
  );
}

export default App;
