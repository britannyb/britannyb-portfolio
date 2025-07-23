import React, { useRef } from "react";

interface TiltDrawingProps {
  imageUrl: string;
  altContent: string;
  setIsOpen: (open: boolean) => void;
}

const TiltDrawing: React.FC<TiltDrawingProps> = ({
  imageUrl,
  altContent,
  setIsOpen,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = containerRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    const el = containerRef.current;
    if (el) {
      el.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="transition-transform duration-300 ease-out inline-block m-2">
      <div className="relative">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-2 text-white m-1 md:m-2 hover:scale-125"
          aria-label="Close image">
          ✕
        </button>
        <img
          src={imageUrl}
          alt={altContent}
          className="border-white border-2 md:border-4 object-contain md:m-2"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
};

export default TiltDrawing;
