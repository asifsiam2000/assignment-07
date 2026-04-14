"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ErrorPage() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen bg-base-300 flex items-center justify-center overflow-hidden px-6">

      {/* Grid Background */}
      <div className="absolute inset-0 -z-10 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#a78bfa" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="flex flex-col items-center justify-center text-center max-w-2xl w-full py-16">

        {/* Floating Icon */}
        <div className="animate-bounce mb-4">
          <svg
            width="100"
            height="100"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="60"
              cy="60"
              r="56"
              stroke="#818cf8"
              strokeWidth="2"
              strokeDasharray="8 4"
            />
            <text
              x="60"
              y="72"
              textAnchor="middle"
              fontSize="52"
              fontFamily="inherit"
              fill="#818cf8"
              fontWeight="800"
            >
              ?
            </text>
          </svg>
        </div>

        {/* 404 Glitch Heading */}
        <h1 className="text-[8rem] font-extrabold leading-none text-primary glitch-text">
          404
        </h1>

        {/* Badge */}
        <div className="badge badge-outline badge-warning mt-2 mb-4 text-xs tracking-widest uppercase">
          Page Not Found
        </div>

        {/* Messages */}
        <p className="text-base-content/70 text-lg mb-2">
          Oops! The page you are looking for does not exist.
        </p>
        <p className="text-base-content/40 text-sm mb-10">
          It may have been moved, deleted, or you might have mistyped the URL.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/" className="btn btn-primary rounded-full px-8 gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7m-9 5v6m4-6v6m5-10V19a2 2 0 01-2 2H7a2 2 0 01-2-2V9"
              />
            </svg>
            Go Back Home
          </Link>

          <button
            onClick={() => router.back()}
            className="btn btn-ghost rounded-full px-8 border border-base-content/20 gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Go Back
          </button>
        </div>

        {/* Footer note */}
        <p className="mt-14 text-base-content/25 text-xs tracking-widest">
          ERROR CODE · 404 · NOT FOUND
        </p>
      </div>

      {/* Glitch CSS */}
      <style jsx>{`
        .glitch-text {
          animation: glitch 2.5s infinite;
        }
        @keyframes glitch {
          0%, 90%, 100% {
            text-shadow: none;
            transform: translate(0);
          }
          92% {
            text-shadow: -3px 0 #f43f5e, 3px 0 #38bdf8;
            transform: translate(-2px, 0);
          }
          94% {
            text-shadow: 3px 0 #f43f5e, -3px 0 #38bdf8;
            transform: translate(2px, 0);
          }
          96% {
            text-shadow: none;
            transform: translate(0);
          }
        }
      `}</style>
    </div>
  );
}