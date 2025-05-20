"use client";

import { useState } from "react";
import { TrendingUp } from "lucide-react";

export default function ViewChart() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="toxic-button flex items-center gap-2"
        onClick={(e) => {
          e.preventDefault(); // prevent navigation
          setShowModal(true); // show modal
        }}
      >
        <TrendingUp className="w-5 h-5" />
        <span>View Chart</span>
      </button>

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
            <p className="text-gray-800">Would be available on the launch</p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-6 px-4 py-2 bg-neon-green text-black font-semibold rounded hover:bg-green-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
