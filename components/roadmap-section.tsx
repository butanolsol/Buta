"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function RoadmapSection() {
  const [activePhase, setActivePhase] = useState<number | null>(null);

  const phases = [
    {
      number: 1,
      title: "Stage 1: Community Kickstart & Awareness",
      date: "May 2025",
      items: [
        "2 Meme Contest and 1 Shilling contest Series: Launch a tiered meme contest with themes evolving each week. Community votes and engagement metrics will determine winners. Rewards will be in $BUTA and NFTs.",
        "Website Launch: A sleek, user-friendly official website will go live, outlining token details, roadmap, and community resources.",
        "10% will be built separately for token holders. On the 22nd of every month throughout the entire period: Award 10,000 $BUTA to the top 100 token holders.On the 7th of every month throughout the entire period of 2025: Hold events such as meme contests and award prizes",
      ],
    },
    {
      number: 2,
      title: "Stage 2: Fundraising & Token Sale",
      date: "June 2025",
      items: [
        "Pre-sale Launch: Offer early supporters a chance to acquire $BUTA at a discounted rate. Multiple tiers with varying vesting schedules may be introduced to prevent dumps.",
        "ICO (Initial Coin Offering): Public ICO where participants can purchase $BUTA with stablecoins or other supported tokens. Smart contracts will ensure transparency and fairness.",
      ],
    },
    {
      number: 3,
      title: "Stage 3: Market Expansion & Visibility",
      date: "Q3 2025",
      items: [
        "Exchange Listings: Apply for listing on CoinMarketCap (CMC) for broader visibility and market tracking.",
        "Initiate listing on Tier 2 exchange: MEXC, giving global access to liquidity and trading.",
      ],
    },
    {
      number: 4,
      title: "Stage 4: Deepen Market Access",
      date: "Q4 2025",
      items: [
        "MEXC Listing Confirmation & Marketing Push: Launch a full-scale marketing campaign around the MEXC listing, including influencer partnerships, trading competitions, and community AMAs.",
      ],
    },
    {
      number: 5,
      title: "Stage 5: Gamify the Ecosystem",
      date: "Early 2026",
      items: [
        "Launch of Gaming Site: Release a cool and immersive gaming platform powered by $BUTA. Features may include: P2E games with $BUTA integration, leaderboards with monthly $BUTA rewards, NFT skins and collectibles tied to gameplay.",
      ],
    },
    {
      number: 6,
      title: "Stage 6: Real-World Use Case Expansion",
      date: "Late 2026",
      items: [
        "Strategic Partnership with Mobile Phone Brand: Partner with a hardware/mobile company to: Accept $BUTA as a payment method, launch co-branded products or special editions, and bundle phones with pre-installed wallets and apps supporting $BUTA.",
      ],
    },
    {
      number: 7,
      title: "Stage 7: Ecosystem Scaling & Future Planning",
      date: "2027 and Beyond",
      items: [
        "Roadmap Review: Based on adoption metrics, community feedback, and market trends, conduct a comprehensive evaluation of the current roadmap and deliverables.",
        "Next-Phase Objectives: Define a fresh set of goals—this may include: DAO governance launch, expansion to Layer 2 networks, NFT marketplace, further CEX listings, and real-world merchant adoption.",
      ],
    },
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Vertical line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-bright-blue to-toxic-pink md:left-1/2 md:-ml-0.5 z-0"></div>

        <div className="space-y-12 relative z-10">
          {phases.map((phase, index) => (
            <div
              key={phase.number}
              className="relative"
              onMouseEnter={() => setActivePhase(phase.number)}
              onMouseLeave={() => setActivePhase(null)}
            >
              <div className="flex items-center md:justify-center">
                <motion.div
                  className={`z-10 flex h-10 w-10 items-center justify-center rounded-full text-black font-bold transition-colors duration-300 ${
                    activePhase === phase.number
                      ? "bg-toxic-pink"
                      : "bg-bright-blue"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {phase.number}
                </motion.div>

                <motion.div
                  className={`absolute left-12 glass shadow-lg rounded-xl p-4 md:left-auto md:right-[calc(50%+20px)] md:w-[calc(50%-40px)] transition-colors duration-300 ${
                    activePhase === phase.number
                      ? "bg-purple-900/40"
                      : "bg-purple-900/20"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <h3 className="text-xl font-bold neon-text">{phase.title}</h3>
                  <p className="text-white/80 text-sm">{phase.date}</p>
                </motion.div>
              </div>

              <div className="mt-4 ml-12 space-y-3 md:ml-[calc(50%+20px)] md:w-[calc(50%-40px)]">
                {phase.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    className={`glass p-3 rounded-xl shadow-lg transition-colors duration-300 ${
                      activePhase === phase.number
                        ? "bg-purple-900/40"
                        : "bg-purple-900/20"
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: itemIndex * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <p className="text-white/80 text-sm">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
