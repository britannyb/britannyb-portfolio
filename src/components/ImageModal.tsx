import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import TiltImage from "./TiltImage";

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
      onClick={() => setIsOpen(false)}>
      <TiltImage
        imageUrl={imageUrl}
        altContent={altContent}
        setIsOpen={setIsOpen}
      />
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
