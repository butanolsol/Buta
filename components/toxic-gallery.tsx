import Image from "next/image"
import { Crown, Zap, Coins, Atom, FlaskRoundIcon as Flask, Beaker } from "lucide-react"

const galleryItems = [
  {
    src: "/butanol.jpg",
    alt: "Butanol Frog King",
    icon: <Crown className="w-6 h-6 text-gold" />,
    title: "The Royal Butan",
    bgClass: "bg-deep-green",
  },
  {
    src: "/butanol.jpg",
    alt: "Butanol Super Frog",
    icon: <Zap className="w-6 h-6 text-neon-green" />,
    title: "Super Butan",
    bgClass: "bg-swamp-green",
  },
  {
    src: "/butanol.jpg",
    alt: "Butanol Wealthy Frog",
    icon: <Coins className="w-6 h-6 text-gold" />,
    title: "Wealthy Butan",
    bgClass: "bg-deep-green",
  },
  {
    src: "/buta-crown.jpg?height=300&width=300",
    alt: "Butanol Molecule",
    icon: <Atom className="w-6 h-6 text-bright-blue" />,
    title: "Molecular Structure",
    bgClass: "bg-swamp-green",
  },
  {
    src: "/buta-crown.jpg?height=300&width=300",
    alt: "Butanol in Lab",
    icon: <Flask className="w-6 h-6 text-toxic-pink" />,
    title: "Lab Synthesis",
    bgClass: "bg-deep-green",
  },
  {
    src: "/buta-crown.jpg?height=300&width=300",
    alt: "Butanol Applications",
    icon: <Beaker className="w-6 h-6 text-toxic-green" />,
    title: "Chemical Properties",
    bgClass: "bg-swamp-green",
  },
]

export function ToxicGallery() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {galleryItems.map((item, index) => (
        <div
          key={index}
          className="flip-card relative aspect-square rounded-xl overflow-hidden shadow-lg neon-box group"
        >
          <div className="flip-card-inner w-full h-full">
            <div className="flip-card-front absolute w-full h-full">
              <div className={`absolute inset-0 ${item.bgClass} opacity-90`}></div>
              <Image
                src={item.src || "/placeholder.svg"}
                alt={item.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-xl group-hover:scale-110 transition-transform duration-300 mix-blend-luminosity opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-4 left-0 right-0 text-center">
                <div className="bg-black/70 rounded-full p-2 w-12 h-12 mx-auto flex items-center justify-center mb-2 neon-box">
                  {item.icon}
                </div>
                <h3 className="text-white font-bold neon-text">{item.title}</h3>
              </div>
            </div>
            <div className="flip-card-back absolute w-full h-full glass">
              <div className="flex flex-col items-center justify-center h-full p-4 text-center">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2 neon-text">{item.title}</h3>
                <p className="text-white/90 text-sm">
                  Discover the power of {item.title} in the Butanol ecosystem. Click to learn more about this amazing
                  aspect of $BUTA.
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
