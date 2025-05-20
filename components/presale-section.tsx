"use client";

import { useState, useEffect } from "react";
import {
  Flame,
  Clock,
  TrendingUp,
  AlertCircle,
  ChevronUp,
  ChevronDown,
  DollarSign,
  Coins,
} from "lucide-react";
import Link from "next/link";

export function PresaleSection() {
  const [expanded, setExpanded] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [currentStage, setCurrentStage] = useState(1);
  const [soldAmount, setSoldAmount] = useState(0); // Example amount for demonstration

  const [showModal, setShowModal] = useState(false);

  // Presale dates
  const presaleStart = new Date("June 1, 2025");
  const presaleEnd = new Date("June 10, 2025");

  // Calculate time left until presale starts or ends
  useEffect(() => {
    const now = new Date();
    const targetDate =
      now < presaleStart ? presaleStart : now < presaleEnd ? presaleEnd : null;

    if (!targetDate) {
      // Presale has ended
      return;
    }

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(timer);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Simulate token sales increasing over time
  useEffect(() => {
    setSoldAmount(0);
    setCurrentStage(0);
  }, []);

  // Calculate progress percentage for each stage
  const getStageProgress = () => {
    if (soldAmount <= 100000) {
      return (soldAmount / 100000) * 100;
    } else if (soldAmount <= 200000) {
      return ((soldAmount - 100000) / 100000) * 100;
    } else if (soldAmount <= 500000) {
      return ((soldAmount - 200000) / 300000) * 100;
    } else {
      return ((soldAmount - 500000) / 500000) * 100;
    }
  };

  // Get current price based on stage
  const getCurrentPrice = () => 0;

  // Get total sold percentage
  const getTotalProgress = () => {
    return (soldAmount / 1000000) * 100;
  };

  // Get status text
  const getStatusText = () => {
    const now = new Date();
    if (now < presaleStart) {
      return "STARTING SOON";
    } else if (now < presaleEnd) {
      return "LIVE NOW";
    } else {
      return "ENDED";
    }
  };

  // Get countdown label
  const getCountdownLabel = () => {
    const now = new Date();
    if (now < presaleStart) {
      return "PRESALE STARTS IN:";
    } else if (now < presaleEnd) {
      return "PRESALE ENDS IN:";
    } else {
      return "PRESALE ENDED:";
    }
  };

  return (
    <section className="py-16 relative overflow-hidden bg-grid">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-block glass px-4 py-1 rounded-full text-sm font-bold mb-2 animate-pulse-glow">
            <Flame className="w-4 h-4 inline-block mr-2 text-toxic-pink" />
            {getStatusText()}
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold gold-text mb-4">
            Butanol Coin Presale
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Join the exclusive presale of $BUTA tokens and be among the first to
            own the Toxic Frog King of Crypto!
          </p>
        </div>

        {/* Presale Card */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-xl overflow-hidden border border-neon-green/30 shadow-xl">
            {/* Header */}
            <div className="bg-gradient-to-r from-deep-green to-swamp-green p-6 border-b border-neon-green/30">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div>
                  <h3 className="text-2xl font-bold neon-text">
                    $BUTA Token Presale
                  </h3>
                  <p className="text-white/80">June 1 - June 10, 2025</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <div className="bg-black/50 rounded-lg p-3 text-center">
                    <div className="text-xs text-white/70">
                      {getCountdownLabel()}
                    </div>
                    <div className="flex gap-2 mt-1">
                      <div className="bg-black/70 px-2 py-1 rounded">
                        <span className="text-xl font-bold neon-text">
                          {timeLeft.days}
                        </span>
                        <span className="text-xs block">Days</span>
                      </div>
                      <div className="bg-black/70 px-2 py-1 rounded">
                        <span className="text-xl font-bold neon-text">
                          {timeLeft.hours}
                        </span>
                        <span className="text-xs block">Hours</span>
                      </div>
                      <div className="bg-black/70 px-2 py-1 rounded">
                        <span className="text-xl font-bold neon-text">
                          {timeLeft.minutes}
                        </span>
                        <span className="text-xs block">Mins</span>
                      </div>
                      <div className="bg-black/70 px-2 py-1 rounded">
                        <span className="text-xl font-bold neon-text">
                          {timeLeft.seconds}
                        </span>
                        <span className="text-xs block">Secs</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Current Stage */}
            <div className="p-6 border-b border-neon-green/30">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div>
                  <div className="text-sm text-white/70">CURRENT PRICE:</div>
                  <div className="text-3xl font-bold gold-text flex items-center">
                    <DollarSign className="w-6 h-6" />
                    {getCurrentPrice().toFixed(2)}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-white/70">STAGE:</div>
                  <div className="text-3xl font-bold neon-text">
                    {currentStage} / 4
                  </div>
                </div>
                <div>
                  <div className="text-sm text-white/70">TOKENS SOLD:</div>
                  <div className="text-3xl font-bold neon-text flex items-center">
                    <Coins className="w-6 h-6 mr-1" />
                    {soldAmount.toLocaleString()}
                  </div>
                </div>
                <div>
                  <Link
                    href="#"
                    className="toxic-button"
                    onClick={(e) => {
                      e.preventDefault(); // prevent navigation
                      setShowModal(true); // show modal
                    }}
                  >
                    Buy Presale Now
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
                          You will be able to purchase on the day of presale
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
            </div>

            {/* Progress Bars */}
            <div className="p-6">
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-white/70">Total Progress</span>
                  <span className="text-neon-green">
                    {getTotalProgress().toFixed(1)}%
                  </span>
                </div>
                <div className="h-4 bg-black/50 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-neon-green to-toxic-green animate-pulse-glow"
                    style={{ width: `${getTotalProgress()}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs mt-1">
                  <span className="text-white/70">0 BUTA</span>
                  <span className="text-white/70">1,000,000 BUTA</span>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-white/70">Current Stage Progress</span>
                  <span className="text-neon-green">
                    {getStageProgress().toFixed(1)}%
                  </span>
                </div>
                <div className="h-3 bg-black/50 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-toxic-pink to-neon-green"
                    style={{ width: `${getStageProgress()}%` }}
                  ></div>
                </div>
              </div>

              <button
                onClick={() => setExpanded(!expanded)}
                className="flex items-center gap-2 text-neon-green text-sm font-medium hover:underline mx-auto"
              >
                {expanded ? "Hide Details" : "Show Details"}
                {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>

              {/* Expanded Details */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expanded
                    ? "max-h-[500px] opacity-100 mt-4"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="glass p-4 rounded-lg">
                    <h4 className="text-lg font-bold neon-text mb-3">
                      Presale Stages
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <div
                          className={`w-3 h-3 rounded-full ${
                            currentStage === 1
                              ? "bg-toxic-pink animate-pulse"
                              : "bg-white/50"
                          }`}
                        ></div>
                        <span
                          className={
                            currentStage === 1 ? "text-white" : "text-white/70"
                          }
                        >
                          Stage 1: 1 BUTA = $0.01 (0-100,000 BUTA)
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div
                          className={`w-3 h-3 rounded-full ${
                            currentStage === 2
                              ? "bg-toxic-pink animate-pulse"
                              : "bg-white/50"
                          }`}
                        ></div>
                        <span
                          className={
                            currentStage === 2 ? "text-white" : "text-white/70"
                          }
                        >
                          Stage 2: 1 BUTA = $0.02 (100,001-200,000 BUTA)
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div
                          className={`w-3 h-3 rounded-full ${
                            currentStage === 3
                              ? "bg-toxic-pink animate-pulse"
                              : "bg-white/50"
                          }`}
                        ></div>
                        <span
                          className={
                            currentStage === 3 ? "text-white" : "text-white/70"
                          }
                        >
                          Stage 3: 1 BUTA = $0.05 (200,001-500,000 BUTA)
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div
                          className={`w-3 h-3 rounded-full ${
                            currentStage === 4
                              ? "bg-toxic-pink animate-pulse"
                              : "bg-white/50"
                          }`}
                        ></div>
                        <span
                          className={
                            currentStage === 4 ? "text-white" : "text-white/70"
                          }
                        >
                          Stage 4: 1 BUTA = $0.10 (500,001-1,000,000 BUTA)
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="glass p-4 rounded-lg">
                    <h4 className="text-lg font-bold neon-text mb-3">
                      How to Participate
                    </h4>
                    <ol className="space-y-3 list-decimal list-inside text-white/80">
                      <li>
                        Connect your Solana wallet (Phantom, Solflare, etc.)
                      </li>
                      <li>
                        Enter the amount of $BUTA tokens you want to purchase
                      </li>
                      <li>Send SOL to the presale contract address</li>
                      <li>Receive your $BUTA tokens immediately</li>
                      <li>Tokens will be tradable after the presale ends</li>
                    </ol>
                    <div className="mt-4 flex items-center gap-2 text-toxic-pink">
                      <AlertCircle size={16} />
                      <span className="text-sm">
                        Price increases as tokens are sold!
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="glass p-5 rounded-xl text-center transform hover:scale-105 transition-transform">
            <div className="bg-toxic-pink w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-7 h-7 text-black" />
            </div>
            <h3 className="text-xl font-bold mb-2 neon-text">Early Access</h3>
            <p className="text-white/80 text-sm">
              Be among the first to own $BUTA tokens before they hit exchanges
              at higher prices
            </p>
          </div>

          <div className="glass p-5 rounded-xl text-center transform hover:scale-105 transition-transform">
            <div className="bg-neon-green w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
              <Coins className="w-7 h-7 text-black" />
            </div>
            <h3 className="text-xl font-bold mb-2 neon-text">Bonus Rewards</h3>
            <p className="text-white/80 text-sm">
              Presale participants receive early governance rights
            </p>
          </div>

          <div className="glass p-5 rounded-xl text-center transform hover:scale-105 transition-transform">
            <div className="bg-gold w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-7 h-7 text-black" />
            </div>
            <h3 className="text-xl font-bold mb-2 neon-text">Limited Time</h3>
            <p className="text-white/80 text-sm">
              Only 10 days to participate in this exclusive opportunity before
              public launch
            </p>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 right-1/5 animate-float">
        <div className="bg-gold/30 w-16 h-16 rounded-full flex items-center justify-center">
          <Coins className="w-8 h-8 text-gold" />
        </div>
      </div>
      <div
        className="absolute bottom-1/3 left-1/5 animate-float"
        style={{ animationDelay: "1s" }}
      >
        <div className="bg-toxic-pink/30 w-12 h-12 rounded-full flex items-center justify-center">
          <Flame className="w-6 h-6 text-toxic-pink" />
        </div>
      </div>
    </section>
  );
}
