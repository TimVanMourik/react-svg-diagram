import React, {useState} from 'react';

function getTextWidth(text, font) {
  // re-use canvas object for better performance
  const canvas =
    getTextWidth.canvas ||
    (getTextWidth.canvas = document.createElement('canvas'));
  const context = canvas.getContext('2d');
  context.font = font;
  const metrics = context.measureText(text);
  return metrics.width;
}

export function wrap(text, textParameters, maxWidth, maxLines) {
  const {x, y, fontSize, lineHeight} = textParameters;
  const words = text.split(' ');
  const lines = [];
  let line = 0;
  lines[line] = [];
  words.forEach((word) => {
    const newline = lines[line].join(' ');
    if (getTextWidth(newline) <= maxWidth) {
      lines[line].push(word);
    } else {
      line += 1;
      lines[line] = [word];
    }
  });
  const lineElements = lines.map((line, index) => (
    <tspan key={index} x={x} y={y + index * (fontSize + lineHeight)}>
      {line.join(' ')}
    </tspan>
  ));
  if (lineElements.length <= maxLines) {
    return lineElements;
  } else {
    const truncated = lineElements.slice(0, maxLines);
    truncated.push(
        <tspan key={maxLines} x={x} y={y + maxLines * (fontSize + lineHeight)}>
          {'......'}
        </tspan>
    );
    return truncated;
  }
}
