'use client'
import { useEffect, useState } from "react";

const images: string[] = [
  "/img/IMG_1.jpg",
  "/img/IMG_2.jpg",
  "/img/IMG_3.JPG",
  "/img/IMG_4.jpg",
  "/img/IMG_5.jpg",
];

export default function ScrollingImg() {
  const [loaded, setLoaded] = useState(false);

  useEffect (() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    const timer = setTimeout(() => setLoaded(true), 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative overflow-hidden w-full py-6 bg-gray-100">

      {!loaded && (
        <div className="text-center text-gray-500 py-10">
          Loading images...
        </div>
      )}

      <div
        className={`flex gap-6 w-max animate-scroll transition-opacity duration-700 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        {[...images, ...images].map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`img-${i}`}
            className="w-[400px] h-[250px] flex-shrink-0 object-cover rounded-xl shadow-md"
          />
        ))}
      </div>
    </div>
  );
}