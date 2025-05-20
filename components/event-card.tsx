import { ExternalLink } from "lucide-react";
import { useState } from "react";

const typeStyles = {
  Launch: {
    borderColor: "border-green-500",
    textColor: "text-green-500",
  },
  AMA: {
    borderColor: "border-yellow-500",
    textColor: "text-yellow-500",
  },
  Airdrop: {
    borderColor: "border-purple-500",
    textColor: "text-purple-500",
  },
  Community: {
    borderColor: "border-blue-500",
    textColor: "text-blue-500",
  },
  Presale: {
    borderColor: "border-pink-500",
    textColor: "text-pink-500",
  },
};

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  type: keyof typeof typeStyles;
  description: string;
  link?: string;
  attendees?: number;
}

export default function EventCard({
  title,
  date,
  time,
  location,
  type,
  description,
  link,
  attendees,
}: EventCardProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="border border-neutral-800 p-6 rounded-lg bg-neutral-950 space-y-4 relative">
      <span
        className={`absolute top-3 right-3 text-xs px-2 py-1 rounded-full border ${typeStyles[type].borderColor} ${typeStyles[type].textColor}`}
      >
        {type}
      </span>

      <h3 className="text-lg font-bold text-white">{title}</h3>

      <div className="text-sm text-neutral-400 space-y-1">
        <p><strong>Date:</strong> {date}</p>
        <p><strong>Time:</strong> {time}</p>
        <p><strong>Location:</strong> {location}</p>
        {attendees !== undefined && <p><strong>Attendees:</strong> {attendees}</p>}
      </div>

      <p className="text-sm text-neutral-300">{description}</p>

      {link && (
        <button
          onClick={() => setShowModal(true)}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${typeStyles[type].borderColor} border text-sm font-medium ${typeStyles[type].textColor} hover:bg-black/30 transition-colors`}
        >
          <span>Register Now</span>
          <ExternalLink size={14} />
        </button>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white text-black rounded-lg p-6 shadow-xl text-center max-w-sm w-full">
            <p className="text-lg font-semibold">You can't register now</p>
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
  );
}
