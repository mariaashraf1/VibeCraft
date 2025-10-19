import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
export default function PostComposer() {
  const [isOpen, setIsOpen] = useState(false);
  const [post, setPost] = useState("");

  return (
    <div className="flex flex-col items-center justify-center w-full">
      
      <input
            onClick={() => setIsOpen(true)}
            type="text"
            name="diary"
            placeholder="What's on your mind, Maria?"
            className="bg-[#1E1E2E] w-full p-3 ml-2 mt-2 rounded-4xl shadow-md focus:shadow-lg focus:shadow-[#8FB3C0]/50 outline-none transition text-[#FDF8F3] cursor-pointer"
            readOnly
          />

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 overflow-y-auto">
          <div className="bg-[#1E1E2F] w-[700px] rounded-2xl p-5 shadow-lg">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-xl font-semibold text-white">Write your thoughts</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-200 bg-transparent"

              >
                ✕
              </button>
            </div>

            {/* Text area */}
            <TextareaAutosize
              value={post}
              onChange={(e) => setPost(e.target.value)}
              placeholder="What's on your mind, Maria?"
              className="w-full bg-transparent text-gray-200 placeholder-gray-400 border-none resize-none focus:outline-none text-xl"
            />

            {/* Action buttons */}
            <div className="flex justify-end mt-4">
              <button
                onClick={() => {
                  console.log("Post:", post);
                  setPost("");
                  setIsOpen(false);
                }}
                className="bg-indigo-500 text-white px-5 py-2 rounded-full hover:bg-indigo-600 transition"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
