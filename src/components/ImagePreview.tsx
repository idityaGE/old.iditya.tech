import { useState } from "react";
import { X } from "lucide-react";

interface ImagePreviewProps {
  src?: string;
  alt?: string;
  className?: string;
}

export default function ImagePreview({
  src = "https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  alt = "Preview image",
  className = "",
}: ImagePreviewProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="relative w-full h-full overflow-hidden">
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-contain ${className} cursor-pointer rounded-lg hover:opacity-90 transition-opacity`}
          onClick={() => setIsOpen(true)}
        />
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="relative w-full h-full max-w-5xl flex items-center justify-center">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 z-10 rounded-full bg-black/50 p-2 text-white hover:bg-black/75 focus:outline-none"
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </button>
            <div className="w-full h-full max-h-[85vh] flex items-center justify-center">
              <img
                src={src}
                alt={alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}