const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=600&q=80",
    alt: "High-rise window cleaning",
  },
  {
    src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&q=80",
    alt: "Commercial building facade",
  },
  {
    src: "https://images.unsplash.com/photo-1464938050520-ef2571f6c8db?w=600&q=80",
    alt: "Modern glass building",
  },
  {
    src: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=600&q=80",
    alt: "Office building exterior",
  },
]

export function GallerySection() {
  return (
    <section id="gallery" className="bg-background py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-2">
            RECENT WORK
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-wide">
            SEE THE DIFFERENCE
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] overflow-hidden group"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
