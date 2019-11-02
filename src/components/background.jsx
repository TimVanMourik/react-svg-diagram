import React from 'react';

const defaults = {
  gridSpacing: 36,
  gridDot: 2,
  gridSize: 40960,
};

export const Background = () => (
  <rect
    className="background"
    x={-defaults.gridSize / 2}
    y={-defaults.gridSize / 2}
    width={defaults.gridSize}
    height={defaults.gridSize}
    fill="url(#grid)"
  />
);


export const BackgroundDefs = () => (
  <>
    <pattern
      id="grid"
      key="grid"
      width={defaults.gridSpacing}
      height={defaults.gridSpacing}
      patternUnits="userSpaceOnUse"
    >
      <circle
        cx={defaults.gridSpacing / 2}
        cy={defaults.gridSpacing / 2}
        r={defaults.gridDot}
        fill="lightgray"
      />
    </pattern>

    <filter id="selection-glow">
      <feColorMatrix
        type="matrix"
        values="0 0 0 0   0
                    0 0 0 0   0
                    0 0 0 0   0
                    0 0 0 0.7 0"
      />
      <feGaussianBlur stdDeviation="5" result="coloredBlur" />
      <feMerge>
      <feMergeNode in="coloredBlur" />
      <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>

    <linearGradient id="linearGradient4752">
      <stop id="stop4754" offset="0" stopColor="#fed661" stopOpacity={1} />
      <stop id="stop4756" offset="1" stopColor="#edc63d" stopOpacity={1} />
    </linearGradient>

    <linearGradient id="linearGradient4701">
      <stop stopColor="#fed661" stopOpacity={1} offset="0" id="stop4703" />
      <stop stopColor="#fed12f" stopOpacity={1} offset="1" id="stop4705" />
    </linearGradient>

    <linearGradient
      xlinkHref="#linearGradient4701"
      id="linearGradient4763"
      gradientUnits="userSpaceOnUse"
      x1="318.57144"
      y1="42.17857"
      x2="294.28571"
      y2="437.89285"
    />
    <linearGradient
      xlinkHref="#linearGradient4752"
      id="linearGradient4765"
      gradientUnits="userSpaceOnUse"
      x1="187.14285"
      y1="465.03571"
      x2="151.27034"
      y2="308.62051"
    />
    <linearGradient
      xlinkHref="#linearGradient4701"
      id="linearGradient4767"
      gradientUnits="userSpaceOnUse"
      x1="344.97217"
      y1="418.97968"
      x2="515.17273"
      y2="418.97968"
    />
  </>
)
