import { LucideProps } from "lucide-react";

export const HeartBeat = ({ className = "", ...props }: LucideProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline w-5 h-5 align-text-bottom animate-heartbeat ${className}`}
    {...props}
  >
    <path
      d="M12 21s-6.5-4.35-9-7.5C1.5 10.5 2.5 7 6 7c2 0 3.5 1.5 3.5 1.5S11.5 7 13.5 7c3.5 0 4.5 3.5 3 6.5-2.5 3.15-9 7.5-9 7.5z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);
