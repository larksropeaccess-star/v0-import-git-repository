const galleryImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Messenger_creation_1983A15C-16C8-4F58-9AF5-A7C80A6E877E-NqDZe3WfzLLHOxpVxWUF9sJwtEuWxe.jpeg",
    alt: "Rope access technician cleaning high-rise glass facade",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260425-WA0007-QZB5CDQ81gaTnv3Kowki1z7Umjl2NX.jpg",
    alt: "Rope access team working on glass atrium ceiling",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260123-WA0003-55l5hDFOnfehJHU2NprPBu9hvbgfgE.jpg",
    alt: "Window cleaning on tall commercial building",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260123-WA0004-FZSlbROvc2GKxfZTuIKJATVS6hUY5e.jpg",
    alt: "Rope access technician working on spiral glass dome",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260425-WA0011-0GydRZlXEALdlapW5kWa2Y2tXVmegy.jpg",
    alt: "Two technicians cleaning glass ceiling with pendant lights",
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
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
