import React, { useState } from 'react';

import '../styles/image_plot.css'

const BlueDot = ({ size = 50 }) => (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} xmlns="http://www.w3.org/2000/svg">
        <circle cx={size / 2} cy={size / 2} r={size / 2} fill="blue" />
    </svg>
  );
  
const BlueRing = ({ size = 50 }) => (
<svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} xmlns="http://www.w3.org/2000/svg">
    <circle 
        cx={size / 2} 
        cy={size / 2} 
        r={(size / 2) - 5} 
        stroke="blue" 
        strokeWidth="5" 
        fill="none" 
    />
</svg>
);

export const ImagePlot = ({ width, height, points, section, axes, fontSize = 12 }) => {
  // Axis properties
  const axisPadding = 40; // Padding for axis labels and lines

  return (
    <div>
      <svg width={width} height={height}>
        {/* Render Axes */}
        {axes && (
          <>
            {/* X-Axis */}
            <line
              x1={axisPadding}
              y1={height - axisPadding}
              x2={width - axisPadding}
              y2={height - axisPadding}
              stroke="black"
            />
            <text
              x={width / 2}
              y={height - 10}
              textAnchor="middle"
              fontSize="12"
            >
              {axes.x}
            </text>

            {/* Y-Axis */}
            <line
              x1={axisPadding}
              y1={axisPadding}
              x2={axisPadding}
              y2={height - axisPadding}
              stroke="black"
            />
            <text
              x={10}
              y={height / 2}
              textAnchor="middle"
              fontSize="12"
              transform={`rotate(-90, 10, ${height / 2})`}
            >
              {axes.y}
            </text>
          </>
        )}

        {/* Render Points */}
        {points.map((point, index) => (
            <a key={index} className="plot-point" href={`/${section}/${point.slug}`}>
                (point.data.img && <image
                    href={point.data.img}
                    x={axisPadding + point.coords.x} // Offset by axisPadding
                    y={height - axisPadding - point.coords.y} // Adjust for SVG's inverted Y-axis
                    width={point.data.width || 30}
                    height={point.data.height || 30}
                />)
                <text
                    x={axisPadding + point.coords.x + (point.data.width || 30) / 2} // Center the label above the image
                    y={height - axisPadding - point.coords.y - 5} // Place label slightly above the image
                    textAnchor="middle"
                    fontSize={fontSize}
                    fill="black"
                >
                    {point.title || `Point ${index + 1}`}
                </text>
            </a>
        ))}
      </svg>
    </div>
  );
};
