import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import Glass from "./Glass";
import TiltDrawing from "./TiltDrawing";

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
      <TiltDrawing
        imageUrl={imageUrl}
        altContent={altContent}
        setIsOpen={setIsOpen}
      />
    </div>
  );

  return (
    <div className="p-4 drawing-container">
      <div className="drawing relative">
        <div className="drawing-folder"></div>
        <div className="drawing-paper shadow-2xl"></div>
        <img
          src={imageUrl}
          alt={altContent}
          className="bg-white border border-white border-2 shadow-2xl rounded-sm overflow-hidden cursor-pointer"
          onClick={() => setIsOpen(true)}
        />
        <div
          id="zoom"
          className="absolute h-2 w-2 bottom-8 right-8 cursor-pointer p-2"
          onClick={() => setIsOpen(true)}>
          <Glass />
        </div>
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
