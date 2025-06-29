import ReactDOM from "react-dom";
import { useState, useEffect } from "react";

interface ImageModal {
  imageUrl: string;
  altContent: string;
}

const ImageModal = ({ imageUrl, altContent }: ImageModal) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const modal = (
    <div
      className="modal fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center"
      onClick={() => setIsOpen(false)}
    >
      <div className="relative m-2 md:m-0">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-2 text-white m-2 hover:scale-125"
          aria-label="Close image"
        >
          ✕
        </button>

        <img
          src={imageUrl}
          alt={altContent}
          className="bg-white p-2 md:p-3 pb-14 md:pb-20 object-contain"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );

  return (
    <div className="p-4 image-container">
      <div>
        <img
          src={imageUrl}
          alt={altContent}
          className="bg-white p-3 pb-14 shadow-xl rounded-sm overflow-hidden cursor-pointer"
          onClick={() => setIsOpen(true)}
        />
      </div>

      {isOpen && (
        <div className="p-4">
          {isOpen && ReactDOM.createPortal(modal, document.body)}
        </div>
      )}
    </div>
  );
};

export default ImageModal;
