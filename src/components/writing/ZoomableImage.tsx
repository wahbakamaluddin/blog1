"use client";

import Image from "next/image";
import { useState } from "react";

interface ZoomableImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export function ZoomableImage({ src, alt, width = 800, height = 600 }: ZoomableImageProps) {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsZoomed(true)}
        className="block w-full my-4 cursor-zoom-in hover:opacity-90 transition-opacity"
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="rounded-lg w-full h-auto object-contain max-h-[500px]"
        />
      </button>

      {/* Lightbox Modal */}
      {isZoomed && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 cursor-zoom-out"
          onClick={() => setIsZoomed(false)}
        >
          <div className="relative max-w-[90vw] max-h-[90vh]">
            <Image
              src={src}
              alt={alt}
              width={1200}
              height={900}
              className="object-contain rounded-lg max-h-[90vh] w-auto"
            />
            <button
              onClick={() => setIsZoomed(false)}
              className="absolute -top-4 -right-4 h-8 w-8 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-700"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
