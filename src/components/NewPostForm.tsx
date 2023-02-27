import React, { useState } from "react";

const NewPostForm: React.FC<{
  onClose: () => void;
}> = (props) => {
  const [author, setAuthor] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //props.onSubmit(author, comment);
    setAuthor("");
    setComment("");
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 ">
      <div className="fixed left-0 top-0 bottom-0 right-0 flex justify-center items-center ">
        <form
          className="bg-neutral-100 rounded-lg p-8 w-full max-w-lg mx-5  animate-wiggle"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl  font-bold mb-4 text-black">Add a Comment</h2>
          <div className="mb-4">
            <label
              htmlFor="author"
              className="block text-gray-700 font-bold mb-2"
            >
              Author
            </label>
            <input
              type="text"
              id="author"
              className="border rounded px-3 py-2 w-full text-black"
              value={author}
              onChange={(event) => setAuthor(event.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="comment"
              className="block text-gray-700 font-bold mb-2"
            >
              Comment
            </label>
            <textarea
              id="comment"
              className="border rounded px-3 py-2 w-full text-black"
              value={comment}
              onChange={(event) => setComment(event.target.value)}
            />
          </div>
          <div className="flex justify-center gap-10 w-full">
            <button
              onClick={props.onClose}
              type="button"
              className="bg-white hover:bg-neutral-700 hover:text-white text-neutral-700 border-2 font-bold py-2 px-4 rounded-lg"
            >
              Close
            </button>
            <button
              type="submit"
              className="bg-neutral-700 hover:bg-neutral-800 text-white font-bold py-2 px-4 rounded-lg"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewPostForm;
