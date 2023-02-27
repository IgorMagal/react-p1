import { useState } from "react";
import "./App.css";
import NewPostForm from "./components/NewPostForm";
import PostsList from "./components/PostsList";
import { MdPostAdd, MdMessage } from "react-icons/md";

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
      className="bg-neutral-700 hover:bg-neutral-800 text-white font-semibold py-2 my-5 px-4 rounded flex items-center"
    >
      <MdPostAdd size={30} />
      New post
    </button>
  );

  return (
    <div className="text-center">
      <header className="fixed top-0 left-0 right-0 flex justify-between px-14 items-center bg-neutral-800 border-b-neutral-300 border-b-2 z-10">
        <div className="flex align-middle justify-center items-center">
          <MdMessage size={40} />
          <p className=" sm:text-lg align-middle lg:text-4xl font-bold py-5">
            Posts App
          </p>
        </div>
        {newPostBtn}
      </header>
      <main className="mt-24 sticky">
        {modalOpen && <NewPostForm onClose={handleModal} />}
        <PostsList />
      </main>
    </div>
  );
}

export default App;
