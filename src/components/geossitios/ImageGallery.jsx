import React, { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ImageGallery({ images }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  if (!images || images.length === 0) return null;

  const navigate = (dir) => {
    setSelectedIndex((prev) => {
      const next = prev + dir;
      if (next < 0) return images.length - 1;
      if (next >= images.length) return 0;
      return next;
    });
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setSelectedIndex(i)}
            className="relative aspect-square rounded-xl overflow-hidden group"
          >
            <img src={img} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedIndex(null)}
          >
            <button onClick={() => setSelectedIndex(null)} className="absolute top-4 right-4 text-white/70 hover:text-white">
              <X className="w-8 h-8" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigate(-1); }}
              className="absolute left-4 text-white/70 hover:text-white"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
            <img
              src={images[selectedIndex]}
              alt=""
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={(e) => { e.stopPropagation(); navigate(1); }}
              className="absolute right-4 text-white/70 hover:text-white"
            >
              <ChevronRight className="w-10 h-10" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}