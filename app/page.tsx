"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Flame,
  FlaskRoundIcon as Flask,
  Beaker,
  Droplets,
  Atom,
  Zap,
  TrendingUp,
  Users,
  Shield,
  Wallet,
  ArrowRight,
  Twitter,
  Send as Telegram,
  Rocket,
  Lock,
  Sparkles,
  Coins,
  Crown,
  Menu,
  X,
} from "lucide-react";
import { ToxicSlideshow } from "../components/toxic-slideshow";
import { ToxicFrogKing } from "../components/toxic-frog-king";
import { ButanolGallery } from "../components/butanol-gallery";
import { WealthyFrog } from "../components/wealthy-frog";
import { RotatingToken } from "../components/rotating-token";
import { EventsSection } from "../components/events-section";
import { PresaleSection } from "../components/presale-section";
import RoadmapSection from "@/components/roadmap-section";
import ViewChart from "@/components/viewChart";
import Image from "next/image";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [tokenPrice, setTokenPrice] = useState(0.00001);
  const utilityRef = useRef<HTMLDivElement>(null);
  const [showModal, setShowModal] = useState(false);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
    (i) => `/images/buta${i}.jpg`
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    // Random token price fluctuation
    const priceInterval = setInterval(() => {
      setTokenPrice((prev) => {
        const change = (Math.random() - 0.3) * 0.000001;
        return Math.max(0.000001, prev + change);
      });
    }, 2000);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(priceInterval);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen text-white">
      {/* Navigation */}
      <header
        className={`sticky top-0 z-[9999] transition-all duration-300 ${
          scrollPosition > 50
            ? "bg-black/80 backdrop-blur-md border-b-2 border-neon-green"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-neon-green rounded-full p-1.5 animate-pulse-glow">
              <span>
                <img src="/buta-coin.png" className="w-10 rounded-full" />
              </span>
              {/* <Flask className="w-6 h-6 text-black" /> */}
            </div>
            <span className="font-extrabold text-xl hidden sm:inline-block neon-text">
              ButanolCoin
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-bold">
            <Link href="#" className="hover:text-neon-green transition-colors">
              Home
            </Link>
            <Link
              href="#tokenomics"
              className="hover:text-neon-green transition-colors"
            >
              Tokenomics
            </Link>
            <Link
              href="#events"
              className="hover:text-neon-green transition-colors"
            >
              Events
            </Link>
            <Link
              href="#roadmap"
              className="hover:text-neon-green transition-colors"
            >
              Roadmap
            </Link>
            <Link
              href="#community"
              className="hover:text-neon-green transition-colors"
            >
              Community
            </Link>
          </nav>
          <div className="md:hidden">
            <button
              className="text-neon-green focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          <Link
            href="#"
            className="hidden md:inline-block toxic-button"
            onClick={(e) => {
              e.preventDefault(); // prevent navigation
              setMobileMenuOpen(false); // your existing logic
              setShowModal(true); // show modal
            }}
          >
            Buy $BUTA
          </Link>

          {showModal && (
            <div
              className="fixed inset-0 flex items-center justify-center z-50
            bg-black bg-opacity-30 backdrop-blur-sm"
              onClick={() => setShowModal(false)}
              style={{ backgroundColor: "rgba(0, 0, 0, 0.25)" }}
            >
              <div
                className="bg-white rounded-lg p-6 max-w-sm w-full shadow-lg border-2 border-neon-green"
                onClick={(e) => e.stopPropagation()}
              >
                <h2 className="text-2xl font-semibold mb-4 text-neon-green">
                  Notice
                </h2>
                <p className="text-gray-800">
                  Coin will be available after launch
                </p>
                <button
                  onClick={() => setShowModal(false)}
                  className="mt-6 px-4 py-2 bg-neon-green text-black font-semibold rounded hover:bg-green-600 transition"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden glass animate-float">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-neon-green/20 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="#tokenomics"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-neon-green/20 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Tokenomics
              </Link>
              <Link
                href="#events"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-neon-green/20 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Events
              </Link>
              <Link
                href="#roadmap"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-neon-green/20 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Roadmap
              </Link>
              <Link
                href="#community"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-neon-green/20 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Community
              </Link>
              <Link
                href="#"
                className="hidden md:inline-block toxic-button"
                onClick={(e) => {
                  e.preventDefault(); // prevent navigation
                  setMobileMenuOpen(false); // your existing logic
                  setShowModal(true); // show modal
                }}
              >
                Buy $BUTA
              </Link>

              {showModal && (
                <div
                  className="fixed inset-0 flex items-center justify-center z-50
            bg-black bg-opacity-30 backdrop-blur-sm"
                  onClick={() => setShowModal(false)}
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.25)" }}
                >
                  <div
                    className="bg-white rounded-lg p-6 max-w-sm w-full shadow-lg border-2 border-neon-green"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <h2 className="text-2xl font-semibold mb-4 text-neon-green">
                      Notice
                    </h2>
                    <p className="text-gray-800">
                      Coin will be available after launch
                    </p>
                    <button
                      onClick={() => setShowModal(false)}
                      className="mt-6 px-4 py-2 bg-neon-green text-black font-semibold rounded hover:bg-green-600 transition"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-grid">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 z-10 text-center md:text-left">
            <div className="inline-block glass px-4 py-1 rounded-full text-sm font-bold mb-2 animate-pulse-glow">
              🐸 The Toxic Frog King of Crypto 🧪
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
              <span className="text-outline">Butanol</span>
              <br />
              <span className="neon-text">Coin</span>
              <span className="gold-text"> $BUTA</span>
            </h1>

            <p className="text-white/90 max-w-xl text-lg mx-auto md:mx-0">
              Join the Buta Gang! Our toxic frog king is leaping to the moon
              with deflationary tokenomics and community governance on Solana.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto md:mx-0">
              <div className="glass p-4 rounded-xl flex items-start gap-3 tilted-card">
                <div className="bg-neon-green p-2 rounded-full mt-1 shadow-lg">
                  <Flame className="w-4 h-4 text-black" />
                </div>
                <div className="text-sm font-medium text-white/90">
                  100% community-driven with deflationary tokenomics. For the
                  Butans, by the Butans!
                </div>
              </div>
              <div className="glass p-4 rounded-xl flex items-start gap-3 tilted-card">
                <div className="bg-neon-green p-2 rounded-full mt-1 shadow-lg">
                  <Rocket className="w-4 h-4 text-black" />
                </div>
                <div className="text-sm font-medium text-white/90">
                  Built on Solana for lightning-fast transactions and minimal
                  fees!
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-4 pt-4">
              {/* <Link
                href="#"
                className="toxic-button flex items-center justify-center gap-2"
              >
                <Beaker className="w-5 h-5" />
                <span>Read Whitepaper</span>
              </Link> */}
              <Link
                href="#"
                className="gold-button flex items-center justify-center gap-2"
                onClick={(e) => {
                  e.preventDefault(); // prevent navigation
                  setMobileMenuOpen(false); // your existing logic
                  setShowModal(true); // show modal
                }}
              >
                <Crown className="w-5 h-5" />
                <span>Buy $BUTA</span>
              </Link>

              {showModal && (
                <div
                  className="fixed inset-0 flex items-center justify-center z-50
            bg-black bg-opacity-30 backdrop-blur-sm"
                  onClick={() => setShowModal(false)}
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.25)" }}
                >
                  <div
                    className="bg-white rounded-lg p-6 max-w-sm w-full shadow-lg border-2 border-neon-green"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <h2 className="text-2xl font-semibold mb-4 text-neon-green">
                      Notice
                    </h2>
                    <p className="text-gray-800">
                      Coin will be available after launch
                    </p>
                    <button
                      onClick={() => setShowModal(false)}
                      className="mt-6 px-4 py-2 bg-neon-green text-black font-semibold rounded hover:bg-green-600 transition"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Token Stats */}
            <div className="glass-card p-4 rounded-xl shadow-lg mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-xl mx-auto md:mx-0">
              <div className="text-center">
                <div className="neon-text font-bold text-xl">100 Million</div>
                <div className="text-xs text-white/70">Total Supply</div>
              </div>
              <div className="text-center">
                <div className="neon-text font-bold text-xl">Solana</div>
                <div className="text-xs text-white/70">Blockchain</div>
              </div>
              <div className="text-center col-span-2 sm:col-span-1">
                <div className="neon-text font-bold text-xl">Deflationary</div>
                <div className="text-xs text-white/70">Tokenomics</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative z-10 flex justify-center mt-12 md:mt-0">
            <div className="relative max-w-[300px] sm:max-w-[400px] w-full">
              <ToxicFrogKing />
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 right-5 animate-spin">
          <div className="bg-bright-blue/30 w-16 sm:w-20 h-16 sm:h-20 rounded-full flex items-center justify-center">
            <Atom className="w-8 sm:w-10 h-8 sm:h-10 text-bright-blue animate-pulse-glow" />
          </div>
        </div>
        <div className="absolute bottom-1/4 left-5 animate-float">
          <div className="bg-neon-green/30 w-14 sm:w-16 h-14 sm:h-16 rounded-full flex items-center justify-center">
            <Droplets className="w-6 sm:w-8 h-6 sm:h-8 text-neon-green animate-pulse-glow" />
          </div>
        </div>
        <div className="absolute top-1/3 left-6 animate-float">
          <div className="bg-gold/30 w-10 sm:w-12 h-10 sm:h-12 rounded-full flex items-center justify-center">
            <Flask className="w-5 sm:w-6 h-5 sm:h-6 text-gold animate-gold-pulse" />
          </div>
        </div>
        <div className="absolute bottom-1/3 right-6 animate-float">
          <div className="bg-toxic-pink/30 w-14 sm:w-16 h-14 sm:h-16 rounded-full flex items-center justify-center">
            <Beaker className="w-6 sm:w-8 h-6 sm:h-8 text-toxic-pink" />
          </div>
        </div>
      </section>

      {/* Presale Section - NEW */}
      <PresaleSection />

      {/* Rotating Token Section */}
      <section className="py-16 relative overflow-hidden bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="md:w-1/3">
              <RotatingToken />
            </div>
            <div className="md:w-2/3 space-y-6">
              <h2 className="text-4xl md:text-5xl font-extrabold neon-text">
                The Most Toxic Token on Solana
              </h2>
              <p className="text-white/80 text-lg">
                $BUTA is not just another memecoin. It's a chemical reaction
                waiting to happen in your portfolio. With our deflationary
                mechanics and community governance, we're creating a token that
                grows stronger with every transaction.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="glass p-4 rounded-xl flex flex-col items-center text-center">
                  <Flame className="w-10 h-10 text-toxic-pink mb-2" />
                  <h3 className="text-lg font-bold neon-text">Auto-Burn</h3>
                  <p className="text-white/70 text-sm">
                    2% of every transaction is permanently burned
                  </p>
                </div>
                <div className="glass p-4 rounded-xl flex flex-col items-center text-center">
                  <Lock className="w-10 h-10 text-neon-green mb-2" />
                  <h3 className="text-lg font-bold neon-text">
                    Liquidity Lock
                  </h3>
                  <p className="text-white/70 text-sm">
                    Liquidity locked for 2 years for your security
                  </p>
                </div>
                <div className="glass p-4 rounded-xl flex flex-col items-center text-center">
                  <Shield className="w-10 h-10 text-gold mb-2" />
                  <h3 className="text-lg font-bold neon-text">Audited</h3>
                  <p className="text-white/70 text-sm">
                    Contract fully audited by top security firms
                  </p>
                </div>
              </div>
              <div className="flex justify-center md:justify-start">
                <ViewChart />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 relative overflow-hidden bg-dots">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 neon-text">
              About ButanolCoin
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              A digitalized meme aiming to spark fun and gain in the
              ever-evolving world of cryptocurrency
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="glass p-6 rounded-xl shadow-lg tilted-card">
                <h3 className="text-2xl font-bold neon-text mb-4">
                  What is Butanol?
                </h3>
                <p className="text-white/80 mb-4">
                  Butanol is an organic compound known for its spark,
                  volatility, and solvency. These traits perfectly mirror the
                  spirit of BUTA: energetic, fun-driven, and built on
                  sustainable value.
                </p>
                <p className="text-white/80">
                  Just like the chemical compound that serves as a solvent, a
                  fuel, and a medium for various reactions, $BUTA is designed to
                  serve multiple roles in the digital economy.
                </p>
              </div>

              <div className="mt-6 glass p-6 rounded-xl shadow-lg tilted-card">
                <h3 className="text-2xl font-bold neon-text mb-4">
                  The Buta Gang
                </h3>
                <p className="text-white/80 mb-4">
                  At the heart of the Butanol ecosystem is a vibrant, self-aware
                  community known as the Butans, or the Buta Gang. Their
                  collective ethos is rooted in a playful yet purposeful
                  principle: the law of conservation of mass.
                </p>
                <p className="text-white/80">
                  Every Butan has a voice, and decisions are made with
                  transparency, cooperation, and a commitment to the greater
                  good.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="glass p-6 rounded-xl shadow-lg tilted-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-toxic-pink p-2 rounded-full">
                    <Flame className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold neon-text">Our Vision</h3>
                </div>
                <p className="text-white/80">
                  To create a fun, community-governed meme token that fuels
                  decentralized creativity, empowers holders, and builds
                  sustainable value through virality, utility, and community
                  engagement.
                </p>
              </div>

              <div className="glass p-6 rounded-xl shadow-lg tilted-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-bright-blue p-2 rounded-full">
                    <Rocket className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold neon-text">Our Mission</h3>
                </div>
                <p className="text-white/80">
                  Butanol Coin ($BUTA) was created to ignite the memeification
                  and digitization of butanol, a well-known chemical solvent,
                  and to spark an educational initiative that champions science
                  and curiosity.
                </p>
              </div>

              <div className="glass p-6 rounded-xl shadow-lg tilted-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gold p-2 rounded-full">
                    <Sparkles className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold neon-text">
                    Why ButanolCoin?
                  </h3>
                </div>
                <ul className="text-white/80 space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="min-w-[20px] mt-1">🐸</div>
                    <span>
                      Meme Power + Real Strategy: Clear growth plan, robust
                      tokenomics, and scalable infrastructure.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="min-w-[20px] mt-1">🧪</div>
                    <span>
                      Fuel for Community: Enables a reaction among crypto
                      enthusiasts, content creators, and innovators.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="min-w-[20px] mt-1">👑</div>
                    <span>
                      Transparent Launch: No hidden allocations, fair presale,
                      and an open-source ethos.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Utility & Use Cases */}
      <section
        id="utility"
        ref={utilityRef}
        className="py-16 relative overflow-hidden bg-dots"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 neon-text">
              $BUTA Token Utility & Incentives
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              $BUTA is crafted to drive community engagement, early adoption,
              and support a sustainable ecosystem fueled by creativity, gaming,
              and real-world partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🔢",
                title: "Token Overview",
                description:
                  "Total Supply: 100,000,000 $BUTA\nToken Symbol: $BUTA\nBlockchain: Solana",
              },
              {
                icon: "🎁",
                title: "10% Holder Reward Pool",
                description:
                  "10 million $BUTA is reserved for rewarding top holders and active community members.",
              },
              {
                icon: "📆",
                title: "Monthly Holder Rewards",
                description:
                  "Every 22nd of the month in 2025, 10,000 $BUTA will be distributed to the top 100 holders.",
              },
              {
                icon: "🎨",
                title: "Creative Meme Contests",
                description:
                  "Every 7th of the month in 2025, $BUTA will host creative events. Winners receive $BUTA and increased community visibility.",
              },
              {
                icon: "🕹",
                title: "Ecological Environment Expansion",
                description:
                  "Use our $BUTA token in various fields including games.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="glass rounded-xl shadow-lg p-6 tilted-card h-full"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-gold-600 flex items-center justify-center mb-4 shadow-lg">
                  <span className="text-white text-xl">{item.icon}</span>
                </div>
                <h3 className="text-2xl font-bold neon-text mb-2">
                  {item.title}
                </h3>
                <p className="text-white/80 whitespace-pre-line">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section
        id="tokenomics"
        className="py-16 relative overflow-hidden bg-black"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 gold-text">
              Deflationary Tokenomics
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto">
              Our deflationary economic model is designed to create scarcity and
              reward long-term holders
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="glass p-6 text-center transform hover:scale-105 transition-transform hexagon">
              <div className="bg-toxic-pink w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 toxic-shadow">
                <Flame className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-2 neon-text">Token Burns</h3>
              <p className="text-white/90 text-sm">
                Scheduled burns permanently remove tokens from circulation,
                increasing scarcity
              </p>
            </div>

            <div className="glass p-6 text-center transform hover:scale-105 transition-transform hexagon">
              <div className="bg-neon-green w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 frog-shadow">
                <TrendingUp className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-2 neon-text">
                Price Appreciation
              </h3>
              <p className="text-white/90 text-sm">
                Decreasing supply creates potential for price appreciation over
                time
              </p>
            </div>

            <div className="glass p-6 text-center transform hover:scale-105 transition-transform hexagon">
              <div className="bg-bright-blue w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-2 neon-text">
                Holding Incentives
              </h3>
              <p className="text-white/90 text-sm">
                Deflationary model rewards long-term holders as supply decreases
              </p>
            </div>

            <div className="glass p-6 text-center transform hover:scale-105 transition-transform hexagon">
              <div className="bg-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 gold-shadow">
                <Shield className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-2 neon-text">
                Anti-Inflation
              </h3>
              <p className="text-white/90 text-sm">
                Acts as a hedge against inflation in the broader economy
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="inline-block glass px-6 py-2 rounded-full text-lg font-bold mb-6 neon-text neon-box">
              Total Supply: 100,000,000 $BUTA
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="glass p-4 rounded-xl diamond neon-box">
                <div className="neon-text font-bold text-2xl">30%</div>
                <div className="text-sm text-white/90">Public Sale</div>
              </div>
              <div className="glass p-4 rounded-xl diamond neon-box">
                <div className="neon-text font-bold text-2xl">30%</div>
                <div className="text-sm text-white/90">Liquidity</div>
              </div>
              <div className="glass p-4 rounded-xl diamond neon-box">
                <div className="neon-text font-bold text-2xl">40%</div>
                <div className="text-[10px] text-white/90">
                  Marketing & Development
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background pattern - enhanced */}
        <div className="absolute inset-0 opacity-20">
          <div className="lily-pattern absolute inset-0"></div>
        </div>
      </section>

      {/* Butanol Slideshow */}
      <section className="py-16 relative overflow-hidden bg-grid">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center neon-text mb-8">
            Meet the Buta Gang
          </h2>
          <p className="text-center text-white/80 max-w-2xl mx-auto mb-12 text-lg">
            Our lovable frog mascots are here to guide you through the wild
            world of chemical memecoins!
          </p>
          <div className="max-w-2xl mx-auto">
            <ToxicSlideshow />
          </div>
        </div>
      </section>

      {/* Meme-contest gallery */}
      <section className="py-16 relative overflow-hidden bg-grid">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center neon-text mb-8">
            Meme Contest Gallery
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {images.map((src, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(src)}
                className="cursor-pointer group relative overflow-hidden rounded-2xl aspect-square bg-black/20 backdrop-blur-md border border-white/10 shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-500/20 to-green-500/20 blur-xl transform group-hover:scale-110 transition-all duration-500 z-0" />

                <div className="relative z-10 h-full">
                  <Image
                    src={src}
                    alt={`Butasol ${index}`}
                    width={512}
                    height={768}
                    className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div>
                      <div className="text-white font-bold">
                        Butanol Meme Contest #{index + 1}
                      </div>
                      <div className="text-gray-400">Rare Collection</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full max-h-[50vh] overflow-auto">
            <Image
              src={selectedImage}
              alt="Selected Image"
              width={512}
              height={512}
              className="w-full h-auto rounded-xl object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 text-white text-3xl font-bold hover:text-red-400"
            >
              &times;
            </button>
          </div>
        </div>
      )}

      {/* Events Section */}
      <section id="events">
        <EventsSection />
      </section>

      {/* Butanol Roadmap */}
      <section id="roadmap" className="py-16 relative overflow-hidden bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center neon-text mb-8">
            Butanol Roadmap
          </h2>
          <p className="text-center text-white/80 max-w-2xl mx-auto mb-12 text-lg">
            The journey of ButanolCoin from meme spark to meme force.
          </p>
          <RoadmapSection />
        </div>
      </section>

      {/* How To Buy Section */}
      <section className="py-16 relative bg-dots">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center neon-text mb-6">
            How To Buy $BUTA
          </h2>
          <p className="text-center text-white/80 max-w-2xl mx-auto mb-12 text-lg">
            Ready to join the Buta Gang? Follow these simple steps to get your
            $BUTA tokens on Solana! 🐸
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="glass p-6 text-white relative shadow-xl transform hover:scale-105 transition-transform clip-path-slant">
              <div className="absolute -top-6 -left-6 bg-neon-green rounded-full w-16 h-16 flex items-center justify-center text-3xl font-extrabold border-4 border-black shadow-lg animate-pulse-glow">
                01
              </div>
              <h3 className="text-2xl font-bold mb-4 mt-4 neon-text">
                Set Up Solana Wallet
              </h3>
              <p className="text-white/80">
                Download Phantom, Solflare or any Solana-compatible wallet and
                set it up with SOL for transactions.
              </p>
              <div className="mt-4 flex justify-center">
                <Wallet className="w-12 h-12 text-neon-green animate-pulse-glow" />
              </div>
            </div>

            <div className="glass p-6 text-white relative shadow-xl transform hover:scale-105 transition-transform clip-path-slant">
              <div className="absolute -top-6 -left-6 bg-neon-green rounded-full w-16 h-16 flex items-center justify-center text-3xl font-extrabold border-4 border-black shadow-lg animate-pulse-glow">
                02
              </div>
              <h3 className="text-2xl font-bold mb-4 mt-4 neon-text">
                Connect to DEX
              </h3>
              <p className="text-white/80">
                Connect your wallet to a Solana DEX like Raydium or Orca to swap
                SOL for $BUTA tokens.
              </p>
              <div className="mt-4 flex justify-center">
                <TrendingUp className="w-12 h-12 text-neon-green animate-pulse-glow" />
              </div>
            </div>

            <div className="glass p-6 text-white relative shadow-xl transform hover:scale-105 transition-transform clip-path-slant">
              <div className="absolute -top-6 -left-6 bg-neon-green rounded-full w-16 h-16 flex items-center justify-center text-3xl font-extrabold border-4 border-black shadow-lg animate-pulse-glow">
                03
              </div>
              <h3 className="text-2xl font-bold mb-4 mt-4 neon-text">
                HODL & Participate
              </h3>
              <p className="text-white/80">
                Hold your $BUTA tokens and participate in governance to shape
                the future of the Butanol ecosystem!
              </p>
              <div className="mt-4 flex justify-center">
                <Users className="w-12 h-12 text-neon-green animate-pulse-glow" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section
        id="community"
        className="py-16 relative overflow-hidden bg-black"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block glass px-4 py-1 rounded-full text-sm font-bold mb-2 animate-gold-pulse">
                BUTA GANG 🐸
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold">
                Join Our
                <br />
                Community <span className="gold-text">👑</span> Today
              </h2>
              <p className="text-white/80 text-lg">
                The Butanol ecosystem is powered by its vibrant community of
                Butans. Every member has a voice in governance and helps shape
                the future of the project.
              </p>
              <p className="text-white/80 text-lg">
                Join our community of chemical frog enthusiasts as we leap,
                react, and catalyze the next generation of meme finance on
                Solana.
              </p>

              <div className="glass p-4 flex items-center gap-4 shadow-lg">
                <div className="bg-gold p-2 rounded-full">
                  <Shield className="w-6 h-6 text-black" />
                </div>
                <div>
                  <div className="font-bold gold-text">
                    Community Governance
                  </div>
                  <div className="text-sm text-white/80">
                    Every Butan with 100+ $BUTA has a vote in major decisions
                  </div>
                </div>
              </div>

              {/* <div className="pt-6">
                <a href="#" className="gold-button">
                  Join Buta Gang
                </a>
              </div> */}
            </div>
            <div className="flex justify-center mt-8 md:mt-0">
              <div className="animate-float">
                <WealthyFrog />
              </div>
            </div>
          </div>
        </div>

        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="crown-pattern absolute inset-0"></div>
        </div>
      </section>

      {/* Contract & Community */}
      <section className="py-16 relative bg-dots">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contract Address */}
            <div className="space-y-8">
              <h3 className="text-3xl font-extrabold neon-text">
                Contract Address
              </h3>
              <div className="glass p-4 rounded-xl flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="bg-neon-green rounded-full p-2 shadow-md">
                    <Coins className="w-6 h-6 text-black" />
                  </div>
                  <span className="text-sm text-white/80 font-mono break-words">
                    Coming soon...
                  </span>
                </div>
                <div className="bg-neon-green rounded-full p-2 text-xs font-bold shadow-md cursor-pointer hover:bg-opacity-90 transition-colors text-black">
                  COPY
                </div>
              </div>

              {/* <h3 className="text-3xl font-extrabold neon-text">
                Buy $BUTA On
              </h3>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#"
                  className="glass rounded-xl px-6 py-3 flex items-center gap-3 hover:bg-neon-green/20 transition-colors shadow-lg transform hover:scale-105 transition-transform"
                >
                  <Wallet className="w-6 h-6 text-neon-green" />
                  <span className="font-bold">RAYDIUM</span>
                </Link>
                <Link
                  href="#"
                  className="glass rounded-xl px-6 py-3 flex items-center gap-3 hover:bg-neon-green/20 transition-colors shadow-lg transform hover:scale-105 transition-transform"
                >
                  <Wallet className="w-6 h-6 text-neon-green" />
                  <span className="font-bold">ORCA</span>
                </Link>
                <Link
                  href="#"
                  className="glass rounded-xl px-6 py-3 flex items-center gap-3 hover:bg-neon-green/20 transition-colors shadow-lg transform hover:scale-105 transition-transform"
                >
                  <Wallet className="w-6 h-6 text-neon-green" />
                  <span className="font-bold">JUPITER</span>
                </Link>
                <Link
                  href="#"
                  className="glass rounded-xl px-6 py-3 flex items-center gap-3 hover:bg-neon-green/20 transition-colors shadow-lg transform hover:scale-105 transition-transform"
                >
                  <Wallet className="w-6 h-6 text-neon-green" />
                  <span className="font-bold">OPENBOOK</span>
                </Link>
              </div> */}

              <div className="glass p-6 text-white shadow-lg">
                <h4 className="text-xl font-bold mb-4 flex items-center gap-2 neon-text">
                  <Flame className="w-5 h-5 text-toxic-pink" />
                  <span>Token Metrics</span>
                </h4>
                <div className="bg-black/30 rounded-lg p-4 flex justify-between items-center">
                  <div>
                    <div className="text-sm text-white/80">Initial Price</div>
                    <div className="text-2xl font-bold neon-text">
                      Coming Soon
                    </div>
                  </div>
                  <div className="text-white/80">
                    <TrendingUp className="w-8 h-8 text-neon-green" />
                    <div className="text-sm font-bold text-white/80">
                      Deflationary
                    </div>
                  </div>
                </div>
                {/* <div className="mt-4">
                  <Link
                    href="#"
                    className="text-neon-green text-sm font-bold flex items-center gap-1 hover:underline"
                  >
                    <span>View on Solscan</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div> */}
              </div>
            </div>

            {/* Join Community */}
            <div className="space-y-8 mt-8 md:mt-0">
              <h3 className="text-3xl font-extrabold neon-text">
                Join Our Community
              </h3>
              <p className="text-white/80 text-lg">
                Become part of the fastest-growing memecoin community on Solana!
                Join thousands of Butans as we leap from lily pad to lily pad,
                catching gains along the way.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Link
                  href="https://t.me/ButanolOfSols"
                  className="bg-blue-500 text-white p-4 rounded-xl hover:bg-blue-600 transition-colors shadow-lg flex flex-col items-center justify-center gap-2 transform hover:scale-105 transition-transform"
                >
                  <Telegram className="w-8 h-8" />
                  <span className="font-bold">Telegram</span>
                  <span className="text-xs">Join the pond</span>
                </Link>
                <Link
                  href="https://x.com/ButanolCoin"
                  className="bg-black text-white p-4 rounded-xl hover:bg-gray-800 transition-colors shadow-lg flex flex-col items-center justify-center gap-2 transform hover:scale-105 transition-transform border border-neon-green"
                >
                  <Twitter className="w-8 h-8 text-neon-green" />
                  <span className="font-bold">Twitter</span>
                  <span className="text-xs">Follow updates</span>
                </Link>
                {/* <Link
                  href="#"
                  className="gradient-toxic text-black p-4 rounded-xl hover:opacity-90 transition-colors shadow-lg flex flex-col items-center justify-center gap-2 transform hover:scale-105 transition-transform"
                >
                  <Users className="w-8 h-8" />
                  <span className="font-bold">Discord</span>
                  <span className="text-xs">Buta Gang HQ</span>
                </Link> */}
              </div>

              <div className="glass p-6 shadow-lg">
                <h4 className="text-xl font-bold mb-4 neon-text">
                  Community Highlights
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-neon-green/20 rounded-full p-2">
                      <Users className="w-5 h-5 text-neon-green" />
                    </div>
                    <div>
                      <div className="font-bold neon-text">
                        Active Community
                      </div>
                      <div className="text-sm text-white/80">
                        Our community is active 24/7 with members from around
                        the globe
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-neon-green/20 rounded-full p-2">
                      <Zap className="w-5 h-5 text-neon-green" />
                    </div>
                    <div>
                      <div className="font-bold neon-text">
                        Governance Voting
                      </div>
                      <div className="text-sm text-white/80">
                        Participate in key decisions that shape the future of
                        $BUTA
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-neon-green/20 rounded-full p-2">
                      <Beaker className="w-5 h-5 text-neon-green" />
                    </div>
                    <div>
                      <div className="font-bold neon-text">
                        Educational Content
                      </div>
                      <div className="text-sm text-white/80">
                        Learn about chemistry while earning crypto rewards
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center relative overflow-hidden bg-black">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <div className="inline-block glass px-6 py-2 rounded-full text-xl font-bold mb-4 animate-pulse-glow">
              $BUTA TO THE MOON 🐸
            </div>
          </div>

          <div className="text-sm text-white/70 mt-12">
            © 2025 ButanolCoin. All rights reserved.
          </div>

          <div className="mt-4 text-xs text-white/70">
            Not financial advice. DYOR. $BUTA is an experimental meme token with
            no intrinsic value.
          </div>
        </div>

        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="crown-pattern absolute inset-0"></div>
        </div>
      </footer>
    </div>
  );
}
