"use client";

import Link from "next/link";

export default function GitHubButton({
  href = "#",
  children = "Ver en GitHub",
}: {
  href?: string;
  children?: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-transparent border border-[#2D2D2D] shadow-sm transition-colors duration-300"
      aria-label="Ver en GitHub"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        className="w-5 h-5 transition-colors duration-300 group-hover:text-red-600"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.93 3.19 9.11 7.61 10.59.56.1.76-.24.76-.53 0-.26-.01-1.13-.02-2.05-3.09.67-3.74-1.49-3.74-1.49-.5-1.28-1.22-1.62-1.22-1.62-.99-.68.08-.67.08-.67 1.09.08 1.66 1.12 1.66 1.12.97 1.66 2.55 1.18 3.17.9.1-.7.38-1.18.69-1.45-2.47-.28-5.07-1.24-5.07-5.52 0-1.22.44-2.22 1.16-3-.12-.28-.5-1.41.11-2.94 0 0 .95-.3 3.12 1.15a10.8 10.8 0 0 1 2.84-.38c.96 0 1.93.13 2.84.38 2.17-1.45 3.12-1.15 3.12-1.15.61 1.53.23 2.66.11 2.94.72.79 1.16 1.78 1.16 3 0 4.29-2.61 5.24-5.09 5.52.39.34.73 1.01.73 2.04 0 1.47-.01 2.65-.01 3.01 0 .29.2.64.77.53 4.41-1.49 7.59-5.67 7.59-10.59C23.25 5.48 18.27.5 12 .5z" />
      </svg>

      <span className="flex items-center text-sm">
        {typeof children === "string" ? (
          <>
            <span className="text-current">Ver en </span>
            <span className="ml-1 transition-colors duration-300 group-hover:text-red-600">GitHub</span>
          </>
        ) : (
          children
        )}
      </span>
    </Link>
  );
}
