"use client"

import { useState } from "react"
import Image from "next/image"

const galleryImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Messenger_creation_1983A15C-16C8-4F58-9AF5-A7C80A6E877E-omfTo9pqkdyU1Dht7Cxyzr0ca5ZbBB.jpeg",
    alt: "Rope access technician on glass building facade",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260425-WA0011-fpJefDfra5GAR0XsyziXalEUpgUy3u.jpg",
    alt: "Two workers suspended from glass ceiling structure",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260123-WA0004-hB9GcxuzwkAgOYUUqy3Z1DUzN7OFMC.jpg",
    alt: "Spiral architecture with glass dome and worker",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260123-WA0003-i0TeYJqInTe4BR66oPDlJAmvTDVS3E.jpg",
    alt: "Worker on tall glass building facade",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260425-WA0007-XMxkgtPx1bjzbcD4erE4tCLIA8F0C5.jpg",
    alt: "Workers on glass ceiling performing maintenance",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260122_181209_580-K1AeY9VAAh9WJqpch77Hl0QZyGMPTx.webp",
    alt: "Dramatic dusk shot of rope access work on high-rise",
  },
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 border border-lime-500 rounded-full text-lime-400 text-sm tracking-widest uppercase mb-6">
            Our Work
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Project <span className="text-lime-400">Gallery</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Take a look at some of our recent rope access and window cleaning projects across Bristol and the South West.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className="group relative aspect-square overflow-hidden rounded-2xl border border-white/10 hover:border-lime-500/50 transition-all duration-300"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-lime-500 text-black p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 3h6v6" />
                    <path d="M10 14 21 3" />
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-lime-400 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>

          <button
            className="absolute left-4 md:left-8 text-white hover:text-lime-400 transition-colors p-2"
            onClick={(e) => {
              e.stopPropagation()
              setSelectedImage(
                selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1
              )
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <div className="relative w-full max-w-5xl aspect-[4/3]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          <button
            className="absolute right-4 md:right-8 text-white hover:text-lime-400 transition-colors p-2"
            onClick={(e) => {
              e.stopPropagation()
              setSelectedImage(
                selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1
              )
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      )}
    </section>
  )
}
