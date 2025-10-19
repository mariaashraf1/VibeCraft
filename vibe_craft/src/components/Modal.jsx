// src/components/Modal.jsx
export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null; // hide if not open

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      {/* Modal box */}
      <div className="bg-white rounded-2xl shadow-lg p-6 w-[90%] max-w-md relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
        >
        </button>
        {children}
      </div>
    </div>
  );
}
