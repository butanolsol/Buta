"use client";

import { useState, useEffect } from "react";
import EventCard from "./event-card"; // ✅ correct for default export

import { Calendar, Filter, ChevronLeft, ChevronRight } from "lucide-react";

// Event types for filtering
const eventTypes = ["All", "AMA", "Launch", "Airdrop", "Community"] as const;
type EventType = (typeof eventTypes)[number];

// Sample events data
const events = [
  {
    id: 1,
    title: "Presale Event",
    date: "June 1–June 10, 2025",
    time: "All Day",
    location: "Official Butanol Website",
    type: "Presale" as const,
    description:
      "Participate in the Butanol presale event from June 1 to June 10. Early supporters can purchase $BUTA tokens before the public launch and enjoy exclusive benefits.",
    link: "#",
    attendees: 0,
  },
  {
    id: 2,
    title: "AMA Session",
    date: "January 20, 2025",
    time: "15:00 UTC – 16:00 UTC",
    location: "Telegram",
    type: "AMA" as const,
    description:
      "Live AMA session to answer questions about Butanol. Come with your questions, and stay for the insights and $BUTA token giveaways.",
    link: "#",
    attendees: 0,
  },
  {
    id: 3,
    title: "Reward for Top 100 Long-Term Holders",
    date: "August 22, 2025",
    time: "All Day",
    location: "Snapshot + Wallet Distribution",
    type: "Airdrop" as const,
    description:
      "Special recognition and rewards for the top 100 long-term holders of $BUTA tokens. Eligibility based on holding duration. Snapshot taken on August 22.",
    link: "#",
    attendees: 0,
  },
  {
    id: 4,
    title: "Team Game Event",
    date: "January 15, 2026",
    time: "15:00 UTC – 16:00 UTC",
    location: "Game Arena",
    type: "Community" as const,
    description:
      "Participate in a fun, team-based game session. Teams will compete, and the winners will receive exciting $BUTA token prizes.",
    link: "#",
    attendees: 0,
  },
];

export function EventsSection() {
  const [selectedType, setSelectedType] = useState<EventType>("All");
  const [visibleEvents, setVisibleEvents] = useState(events);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const eventsPerPage = 3;

  // Filter events based on selected type
  useEffect(() => {
    if (selectedType === "All") {
      setVisibleEvents(events);
    } else {
      setVisibleEvents(events.filter((event) => event.type === selectedType));
    }
    setCurrentPage(1);
  }, [selectedType]);

  // Calculate pagination
  const totalPages = Math.ceil(visibleEvents.length / eventsPerPage);
  const startIndex = (currentPage - 1) * eventsPerPage;
  const endIndex = startIndex + eventsPerPage;
  const currentEvents = visibleEvents.slice(startIndex, endIndex);

  // Handle pagination
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="py-16 relative overflow-hidden bg-dots">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-block glass px-4 py-1 rounded-full text-sm font-bold mb-2 animate-pulse-glow">
            <Calendar className="w-4 h-4 inline-block mr-2 text-neon-green" />
            UPCOMING EVENTS
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold neon-text mb-4">
            Join the Buta Gang Events
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Stay connected with the Butanol community through our exciting
            events, AMAs, airdrops, and more!
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <div className="glass p-1 rounded-full flex items-center">
            <Filter className="w-4 h-4 text-neon-green mx-2" />
            {eventTypes.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  selectedType === type
                    ? "bg-neon-green text-black"
                    : "text-white hover:bg-black/30"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Events grid */}
        <div className="grid gap-6 mb-8">
          {currentEvents.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className={`p-2 rounded-full ${
                currentPage === 1
                  ? "bg-gray-700 cursor-not-allowed"
                  : "bg-neon-green text-black"
              }`}
            >
              <ChevronLeft size={20} />
            </button>
            <span className="text-white">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-full ${
                currentPage === totalPages
                  ? "bg-gray-700 cursor-not-allowed"
                  : "bg-neon-green text-black"
              }`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}

        {/* CTA */}
        <div className="mt-12 text-center">
          <div className="glass p-6 rounded-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold neon-text mb-4">
              Host Your Own Butanol Event
            </h3>
            <p className="text-white/80 mb-6">
              Are you a community member with a great idea for a Butanol event?
              Submit your proposal and we might sponsor it with $BUTA tokens!
            </p>

            <div className="flex justify-center">
              <button
                className="toxic-button flex items-center gap-2"
                onClick={(e) => {
                  e.preventDefault();
                  setShowModal(true);
                }}
              >
                <span>Submit Your Event Proposal</span>
              </button>
            </div>

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
                    Proposals are not accepted now
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

      {/* Floating elements */}
      <div className="absolute top-1/4 right-1/5 animate-float">
        <div className="bg-toxic-pink/30 w-16 h-16 rounded-full flex items-center justify-center">
          <Calendar className="w-8 h-8 text-toxic-pink" />
        </div>
      </div>
      <div
        className="absolute bottom-1/3 left-1/5 animate-float"
        style={{ animationDelay: "1s" }}
      >
        <div className="bg-neon-green/30 w-12 h-12 rounded-full flex items-center justify-center">
          <Calendar className="w-6 h-6 text-neon-green" />
        </div>
      </div>
    </div>
  );
}
