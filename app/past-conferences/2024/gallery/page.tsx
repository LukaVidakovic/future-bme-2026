'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const images = [
  '_IMG_5720.jpg', '_IMG_5722.jpg', '_IMG_5725.jpg', '_IMG_5726.jpg', '_IMG_5730.jpg',
  '_IMG_5734.jpg', '_IMG_5737.jpg', '_IMG_5738.jpg', '_IMG_5741.jpg', '_IMG_5752.jpg',
  '_IMG_5762.jpg', '_IMG_5764.jpg', '_IMG_5766.jpg', '_IMG_5771.jpg', '_IMG_5775.jpg',
  '_IMG_5777.jpg', '_IMG_5779.jpg', '_IMG_5784.jpg', '_IMG_5788.jpg', '_IMG_5793.jpg',
  '_IMG_5801.jpg', '_IMG_5808.jpg', '_IMG_5810.jpg', '_IMG_5816.jpg', '_IMG_5819.jpg',
  '_IMG_5821.jpg', '_IMG_5824.jpg', '_IMG_5827.jpg', '_IMG_5831.jpg', '_IMG_5833.jpg',
  '_IMG_5836.jpg', '_IMG_5837.jpg', '_IMG_5840.jpg', '_IMG_5841.jpg', '_IMG_5848.jpg',
  '_IMG_5849.jpg', '_IMG_5858.jpg', '_IMG_5864.jpg', '_IMG_5870.jpg', '_IMG_5876.jpg',
  '_IMG_5880.jpg', '_IMG_5883.jpg', '_IMG_5884.jpg', '_IMG_5885.jpg', '_IMG_5890.jpg',
  '_IMG_5892.jpg', '_IMG_5895.jpg', '_IMG_5896.jpg', '_IMG_5903.jpg', '_IMG_5904.jpg',
  '_IMG_5905.jpg', '_IMG_5907.jpg', '_IMG_5908.jpg', '_IMG_5910.jpg', '_IMG_5911.jpg',
  '_IMG_5916.jpg', '_IMG_5923.jpg', '_IMG_5926.jpg', '_IMG_5939.jpg', '_IMG_5945.jpg',
  '_IMG_5949.jpg', '_IMG_5954.jpg', '_IMG_5960.jpg', '_IMG_5966.jpg', '_IMG_5969.jpg',
  '_IMG_5970.jpg', '_IMG_5974.jpg', '_IMG_5976.jpg', '_IMG_5979.jpg', '_IMG_5984.jpg',
  '_IMG_5986.jpg', '_IMG_5988.jpg', '_IMG_6001.jpg', '_IMG_6006.jpg', '_IMG_6007.jpg',
  '_IMG_6017.jpg', '_IMG_6020.jpg', '_IMG_6022.jpg', '_IMG_6025.jpg', '_IMG_6027.jpg',
  '_IMG_6032.jpg', '_IMG_6035.jpg', '_IMG_6039.jpg', '_IMG_6043.jpg', '_IMG_6045.jpg',
  '_IMG_6048.jpg', '_IMG_6051.jpg', '_IMG_6064.jpg', '_IMG_6067.jpg', '_IMG_6093.jpg',
  '_IMG_6095.jpg', '_IMG_6096.jpg', '_IMG_6098.jpg', '_IMG_6102.jpg', '_IMG_6105.jpg',
  '_IMG_6108.jpg', '_IMG_6120.jpg', '_IMG_6121.jpg', '_IMG_6122.jpg', '_IMG_6124.jpg',
  '_IMG_6125.jpg', '_IMG_6127.jpg', '_IMG_6128.jpg', '_IMG_6129.jpg', '_IMG_6130.jpg',
  '_IMG_6131.jpg', '_IMG_6133.jpg', '_IMG_6135.jpg', '_IMG_6137.jpg', '_IMG_6139.jpg',
  '_IMG_6140.jpg', '_IMG_6141.jpg', '_IMG_6142.jpg', '_IMG_6143.jpg', '_IMG_6144.jpg',
  '_IMG_6145.jpg', '_IMG_6146.jpg', '_IMG_6147.jpg', '_IMG_6148.jpg', '_IMG_6149.jpg',
  '_IMG_6151.jpg', '_IMG_6152.jpg', '_IMG_6153.jpg', '_IMG_6155.jpg', '_IMG_6156.jpg',
  '_IMG_6157.jpg', '_IMG_6158.jpg', '_IMG_6160.jpg', '_IMG_6164.jpg', '_IMG_6166.jpg',
  '_IMG_6168.jpg', '_IMG_6169.jpg', '_IMG_6172.jpg', '_IMG_6174.jpg', '_IMG_6175.jpg',
  '_IMG_6179.jpg', '_IMG_6180.jpg', '_IMG_6181.jpg', '_IMG_6216.jpg', '_IMG_6217.jpg',
  '_IMG_6223.jpg', '_IMG_6224.jpg', '_IMG_6226.jpg', '_IMG_6229.jpg', '_IMG_6230.jpg',
  '_IMG_6231.jpg', '_IMG_6241.jpg', '_IMG_6245.jpg', '_IMG_6251.jpg', '_IMG_6253.jpg',
  '_IMG_6255.jpg', '_IMG_6257.jpg', '_IMG_6267.jpg', '_IMG_6273.jpg', '_IMG_6274.jpg',
  '_IMG_6275.jpg', '_IMG_6278.jpg', '_IMG_6285.jpg', '_IMG_6290.jpg', '_IMG_6292.jpg',
  '_IMG_6322.jpg', '_IMG_6323.jpg', '_IMG_6368.jpg', '_IMG_6371.jpg', '_IMG_6372.jpg',
  '_IMG_6374.jpg', '_IMG_6385.jpg', '_IMG_6387.jpg', '_IMG_6391.jpg', '_IMG_6392.jpg',
  '_IMG_6396.jpg', '_IMG_6401.jpg', '_IMG_6405.jpg', '_IMG_6412.jpg', '_IMG_6415.jpg',
  '_IMG_6418.jpg', '_IMG_6425.jpg', '_IMG_6430.jpg', '_IMG_6434.jpg', '_IMG_6437.jpg',
  '_IMG_6499.jpg', '_IMG_6500.jpg', '_IMG_6503.jpg', '_IMG_6508.jpg', '_IMG_6509.jpg',
  '_IMG_6510.jpg', '_IMG_6516.jpg', '_IMG_6520.jpg', '_IMG_6525.jpg', '_IMG_6529.jpg',
  '_IMG_6536.jpg', '_IMG_6548.jpg', '_IMG_6559.jpg', '_IMG_6565.jpg', '_IMG_6571.jpg',
  '_IMG_6574.jpg', '_IMG_6579.jpg', '_IMG_6581.jpg', '_IMG_6582.jpg', '_IMG_6587.jpg',
  '_IMG_6590.jpg', '_IMG_6594.jpg', '_IMG_6599.jpg', '_IMG_6601.jpg', '_IMG_6602.jpg',
  '_IMG_6604.jpg', '_IMG_6607.jpg', '_IMG_6608.jpg'
].map(img => `/future-bme-2026/images/${img}`);

export default function GalleryPage() {
  const [mode, setMode] = useState<'carousel' | 'grid'>('carousel');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  // Preload adjacent images
  useEffect(() => {
    const preloadImage = (src: string) => {
      const img = new Image();
      img.src = src;
    };
    preloadImage(images[(currentIndex + 1) % images.length]);
    preloadImage(images[(currentIndex - 1 + images.length) % images.length]);
  }, [currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (mode === 'carousel') {
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'ArrowRight') nextImage();
      }
      if (selectedImage && e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mode, selectedImage]);

  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--purple)]/20 to-[var(--blue)]/20" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Future-BME 2024 Gallery
            </h1>
            <p className="text-xl text-[var(--gray-light)] mb-8">
              {images.length} photos from the conference
            </p>

            {/* Toggle */}
            <div className="inline-flex items-center gap-2 p-2 bg-[var(--navy)]/60 backdrop-blur-xl rounded-full border border-white/10">
              <button
                onClick={() => setMode('carousel')}
                className={`px-6 py-3 rounded-full font-bold transition-all ${
                  mode === 'carousel'
                    ? 'bg-gradient-to-r from-[var(--purple)] to-[var(--blue-light)] text-white'
                    : 'text-[var(--gray-light)] hover:text-white'
                }`}
              >
                Carousel
              </button>
              <button
                onClick={() => setMode('grid')}
                className={`px-6 py-3 rounded-full font-bold transition-all ${
                  mode === 'grid'
                    ? 'bg-gradient-to-r from-[var(--purple)] to-[var(--blue-light)] text-white'
                    : 'text-[var(--gray-light)] hover:text-white'
                }`}
              >
                Grid
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Carousel Mode - Layered 3D */}
      {mode === 'carousel' && (
        <section className="py-16 md:py-24 overflow-hidden">
          <div className="max-w-6xl mx-auto px-4">
            <div className="relative h-[600px] flex items-center justify-center">
              {/* Previous Image - Behind Left */}
              <motion.div
                key={`prev-${currentIndex}`}
                initial={{ opacity: 0, x: -100, scale: 0.85 }}
                animate={{ opacity: 0.6, x: -250, scale: 0.85 }}
                className="absolute left-0 z-0 w-[500px] h-[400px] rounded-2xl overflow-hidden cursor-pointer shadow-xl"
                onClick={prevImage}
              >
                <img
                  src={images[(currentIndex - 1 + images.length) % images.length]}
                  alt="Previous"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
              </motion.div>

              {/* Current Image - Front Center */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = Math.abs(offset.x) * velocity.x;
                    if (swipe < -10000) nextImage();
                    else if (swipe > 10000) prevImage();
                  }}
                  className="relative z-10 w-[800px] h-[600px] rounded-3xl overflow-hidden shadow-2xl cursor-grab active:cursor-grabbing"
                >
                  <img
                    src={images[currentIndex]}
                    alt={`Conference ${currentIndex + 1}`}
                    loading="eager"
                    className="w-full h-full object-cover pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Counter on image */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-8 py-4 bg-gradient-to-r from-[var(--purple)]/90 to-[var(--blue-light)]/90 backdrop-blur-xl rounded-full text-white font-bold text-lg pointer-events-none">
                    {currentIndex + 1} / {images.length}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Next Image - Behind Right */}
              <motion.div
                key={`next-${currentIndex}`}
                initial={{ opacity: 0, x: 100, scale: 0.85 }}
                animate={{ opacity: 0.6, x: 250, scale: 0.85 }}
                className="absolute right-0 z-0 w-[500px] h-[400px] rounded-2xl overflow-hidden cursor-pointer shadow-xl"
                onClick={nextImage}
              >
                <img
                  src={images[(currentIndex + 1) % images.length]}
                  alt="Next"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
              </motion.div>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 z-20 w-16 h-16 rounded-full bg-gradient-to-r from-[var(--purple)] to-[var(--blue-light)] hover:scale-110 active:scale-95 flex items-center justify-center transition-all shadow-lg"
              >
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 z-20 w-16 h-16 rounded-full bg-gradient-to-r from-[var(--purple)] to-[var(--blue-light)] hover:scale-110 active:scale-95 flex items-center justify-center transition-all shadow-lg"
              >
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Keyboard hint */}
            <div className="text-center mt-8 text-[var(--gray-light)] text-sm">
              Use arrow keys ← →, drag/swipe, or click side images to navigate
            </div>
          </div>
        </section>
      )}

      {/* Grid Mode - Masonry Style */}
      {mode === 'grid' && (
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {images.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.02, duration: 0.4 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group bg-[var(--navy)]/40 backdrop-blur-sm border border-white/5"
                  onClick={() => setSelectedImage(img)}
                >
                  <img
                    src={img}
                    alt={`Conference ${i + 1}`}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--purple)]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  
                  {/* Number badge */}
                  <div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-[var(--purple)]/80 backdrop-blur-xl flex items-center justify-center text-white font-bold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300">
                    {i + 1}
                  </div>
                  
                  {/* Expand icon */}
                  <div className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-white/20 backdrop-blur-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                  </div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-6xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-[var(--purple)] hover:bg-[var(--purple)]/80 flex items-center justify-center"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img
                src={selectedImage}
                alt="Conference"
                className="max-w-full max-h-[90vh] rounded-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
