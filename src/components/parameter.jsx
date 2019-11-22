import React from 'react';

import Port from './port';

import "../scss/unselectable.scss";

const Parameter = ({name, input, output, x = 0, y, width, id}) => (
  <>
    <text 
      className="noselect"
      fill="white" 
      textAnchor="middle" 
      x={x + width / 2} 
      y={y} 
    >
      {name}
    </text>
    {input && <Port id={input} type="input" x={x} y={y - 4} />}
    {output && <Port id={output} type="output" x={x + width} y={y - 4} />}
  </>
);

export default Parameter;
