"use client";

import React, { useState, useRef, useEffect } from "react";

const ExperienceDescription: React.FC<{
  paragraphs: string[];
  bullets: string[];
}> = ({ paragraphs, bullets }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const MIN_HEIGHT = 100; // Reducido para que se note más el efecto

  useEffect(() => {
    if (contentRef.current) {
      setShowButton(contentRef.current.scrollHeight > MIN_HEIGHT);
    }
  }, []);

  return (
    <div className="relative">
      <div
        ref={contentRef}
        className={`overflow-hidden transition-all duration-300 ease-in-out relative ${
          isExpanded ? "" : "max-h-[100px]"
        }`}
      >
        {paragraphs.map((paragraph, index) => (
          <p className="mb-4 text-gray-300" key={index}>
            {paragraph}
          </p>
        ))}
        <ul className="list-disc pl-6 mt-4 text-gray-300">
          {bullets.map((bullet, index) => (
            <li className="mb-2" key={index}>
              {bullet}
            </li>
          ))}
        </ul>
        {!isExpanded && showButton && (
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#020817] to-transparent" />
        )}
      </div>

      {showButton && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-500 hover:text-blue-400 mt-2 text-sm font-medium flex items-center gap-1 transition-colors duration-200"
        >
          {isExpanded ? (
            <>
              Ver menos
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </>
          ) : (
            <>
              Ver más
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </>
          )}
        </button>
      )}
    </div>
  );
};

export default ExperienceDescription;
