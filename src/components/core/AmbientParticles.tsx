"use client";

interface AmbientParticlesProps {
  colorClassName?: string;
  count?: number;
}

const AmbientParticles = ({
  colorClassName = "bg-yellow-400/30",
  count = 12,
}: AmbientParticlesProps) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <span
          key={index}
          className={`pointer-events-none absolute h-1 w-1 rounded-full ${colorClassName}`}
          style={{
            left: `${8 + ((index * 7) % 84)}%`,
            top: `${12 + ((index * 13) % 72)}%`,
            animation: `ambientFloat ${4 + (index % 4)}s ease-in-out infinite ${index * 0.35}s`,
          }}
        />
      ))}
    </>
  );
};

export default AmbientParticles;
