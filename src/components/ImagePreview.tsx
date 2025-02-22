import { useState } from "react";
import { X } from "lucide-react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

interface ImagePreviewProps {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function ImagePreview({
  src = "https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  alt = "Preview image",
  width,
  height,
  className = "",
}: ImagePreviewProps) {
  const [isOpen, setIsOpen] = useState(false);

  const containerStyle = width || height
    ? { width: width ? `${width}px` : 'auto', height: height ? `${height}px` : 'auto' }
    : { width: '100%', height: '100%' };

  return (
    <>
      <div
        className="relative overflow-hidden"
        style={containerStyle}
      >
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`w-full h-full object-contain ${className} cursor-pointer rounded-lg hover:opacity-90 transition-opacity`}
          onClick={() => setIsOpen(true)}
        />
      </div>

      <DialogPrimitive.Root open={isOpen} onOpenChange={setIsOpen}>
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />
          <DialogPrimitive.Content className="fixed inset-4 md:inset-auto md:left-[50%] md:top-[50%] md:translate-x-[-50%] md:translate-y-[-50%] z-50 w-auto h-auto">
            <div className="relative w-full h-full max-w-7xl mx-auto">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute right-2 top-2 z-10 rounded-full bg-black/50 p-2 text-white hover:bg-black/75 focus:outline-none"
              >
                <X className="h-4 w-4 md:h-6 md:w-6" />
                <span className="sr-only">Close</span>
              </button>
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src={src}
                  alt={alt}
                  className="w-full h-full md:h-auto max-h-[90vh] object-contain rounded-lg"
                  style={{
                    maxWidth: width ? `min(${width * 2}px, 100vw - 2rem)` : '100vw - 2rem',
                    maxHeight: height ? `min(${height * 2}px, 90vh)` : '90vh'
                  }}
                />
              </div>
            </div>
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    </>
  );
}