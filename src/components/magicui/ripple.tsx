import React, { useMemo } from "react";

interface RippleProps {
  mainCircleSize?: number;
  mainCircleOpacity?: number;
  numCircles?: number;
}

const Ripple = React.memo(({
  mainCircleSize = 210,
  mainCircleOpacity = 0.24,
  numCircles = 8,
}: RippleProps) => {
  // Memoize circle calculations to prevent unnecessary recalculations
  const circles = useMemo(() =>
    Array.from({ length: numCircles }, (_, i) => ({
      size: mainCircleSize + i * 70,
      opacity: Math.max(0, mainCircleOpacity - i * 0.03),
      animationDelay: `${i * 0.06}s`,
      borderStyle: i === numCircles - 1 ? "dashed" : "solid",
      borderOpacity: 5 + i * 5,
      index: i
    })),
    [mainCircleSize, mainCircleOpacity, numCircles]
  );

  return (
    <div className="absolute inset-0 z-0 flex items-center justify-center bg-white/5 [mask-image:linear-gradient(to_bottom,white,transparent)]">
      {circles.map(({
        size,
        opacity,
        animationDelay,
        borderStyle,
        borderOpacity,
        index
      }) => (
        <div
          key={index}
          className="absolute animate-ripple rounded-full bg-foreground/25 shadow-xl border"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            opacity,
            animationDelay,
            borderStyle,
            borderWidth: "1px",
            borderColor: `hsl(var(--foreground), ${borderOpacity / 100})`,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
          }}
        />
      ))}
    </div>
  );
});

Ripple.displayName = "Ripple";

export default Ripple;