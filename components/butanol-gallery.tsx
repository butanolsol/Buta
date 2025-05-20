import Image from "next/image"
import { FlaskRoundIcon as Flask, Beaker, Atom, Crown, Zap, Coins } from "lucide-react"

const galleryItems = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-K4bpgIGIFi8Vsy4Va0NIObFG5RmIS3.png",
    alt: "Butanol Frog King",
    icon: <Crown className="w-6 h-6" />,
    title: "The Royal Butan",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ipgcKN6zan47okBXesw4Nfx02ZwKm5.png",
    alt: "Butanol Super Frog",
    icon: <Zap className="w-6 h-6" />,
    title: "Super Butan",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PsU8fXJGlQGuErvjDtnUgftfEIC5wJ.png",
    alt: "Butanol Wealthy Frog",
    icon: <Coins className="w-6 h-6" />,
    title: "Wealthy Butan",
  },
  {
    src: "/placeholder.svg?height=300&width=300",
    alt: "Butanol Molecule",
    icon: <Atom className="w-6 h-6" />,
    title: "Molecular Structure",
  },
  {
    src: "/placeholder.svg?height=300&width=300",
    alt: "Butanol in Lab",
    icon: <Flask className="w-6 h-6" />,
    title: "Lab Synthesis",
  },
  {
    src: "/placeholder.svg?height=300&width=300",
    alt: "Butanol Applications",
    icon: <Beaker className="w-6 h-6" />,
    title: "Chemical Properties",
  },
]

export function ButanolGallery() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {galleryItems.map((item, index) => (
        <div
          key={index}
          className="relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-accent transition-shadow duration-300 group"
        >
          <Image
            src={item.src || "/placeholder.svg"}
            alt={item.alt}
            layout="fill"
            objectFit="cover"
            className="rounded-xl group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-4">
            <div className="bg-white/20 rounded-full p-2 backdrop-blur-sm mb-2">{item.icon}</div>
            <h3 className="text-white font-bold">{item.title}</h3>
          </div>
        </div>
      ))}
    </div>
  )
}
