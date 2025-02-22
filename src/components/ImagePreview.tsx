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
          <DialogPrimitive.Content className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-50 w-auto h-auto p-4">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 z-10 rounded-full bg-black/50 p-2 text-white hover:bg-black/75 focus:outline-none"
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </button>
            <div className="w-full max-h-[90vh] flex items-center justify-center">
              <img
                src={src}
                alt={alt}
                width={width ? width * 1.5 : undefined}
                height={height ? height * 1.5 : undefined}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    </>
  );
}