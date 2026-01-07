export const GridBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -1 }}>
      {/* 1. Base Solid Color Background */}
      <div className="absolute inset-0 bg-[#fafaf9]" />

      {/* 2. The SVG Grid */}
      <svg
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid-pattern"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
            x="50%"
            y="-1"
          >
            {/* The Grid Lines - Hardcoded color for debugging visibility */}
            <path
              d="M.5 40V.5H40"
              fill="none"
              stroke="#4f46e5"
              strokeOpacity="0.1"
              strokeWidth="1"
            />
            {/* The Dotted Intersection */}
            <circle cx="0.5" cy="0.5" r="1" fill="#4f46e5" fillOpacity="0.2" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
      </svg>

      {/* 3. The Vignette (Mask) - Fades the grid out toward the edges */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 0%, #fafaf9 90%)",
        }}
      />
    </div>
  );
};
