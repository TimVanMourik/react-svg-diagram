import React, {useState} from 'react';

import Parameter from './parameter';

import "../scss/unselectable.scss";

const Node = (props) => {
  
  const {id, name, x, y, width, colour,
    scale,
    selected,
    ports,
    updateNode,
    onClick 
  } = props;

  const [dragging, setDragging] = useState(false);
  const [hovered, setHover] = useState(false);
  const [xDragging, setDraggingX] = useState(x);
  const [yDragging, setDraggingY] = useState(y);

  const drag = (event) => {
    setDraggingX(xDragging +  event.movementX / (scale || 1));
    setDraggingY(yDragging +  event.movementY / (scale || 1));
    if(!updateNode) return
    updateNode(id, {x: xDragging, y: yDragging})
  }

  const startDrag = () => {
    setDragging(true)
    setDraggingX(x);
    setDraggingY(y);
  }
  const endDrag = () => {
    setDragging(false);
    if(!updateNode) return
    updateNode(id, {x: xDragging, y: yDragging})
  }

  const initialHeight = 50;
  const portHeight = 25;
  const portBlock = ports.length === 0 ? null : ports.map((port, index) => (
    <Parameter
      {...port}
      key={port.id}
      width={width}
      y={initialHeight + index * portHeight}
    />
  ));

  return (
    <g 
      transform={`translate(${x},${y})`}
      onClick={() => {if(!onClick) return; onClick(id, 'node')}}
      onMouseEnter={() => setHover(true)} 
      onMouseLeave={() => {setHover(false); endDrag()}}
      onMouseDown={() => {if(!startDrag) return; startDrag()}}
      onMouseUp={() => endDrag()}
      onMouseMove={(event) => dragging && drag(event)}
    >
      <rect
        fill={colour}
        rx={6}
        ry={6}
        width={`${width}px`}
        height={initialHeight + portHeight * (ports && ports.length)}
        filter={selected || hovered ? "url(#selection-glow)": ""}
        // filter={
        //   selectedNodes && selectedNodes.includes(id)
        //     ? 'url(#selection-glow)'
        //     : ''
        // }
      />
      <text
        className="noselect"
        fill="white"
        textAnchor="middle"
        x={width / 2}
        y={28}
        fontSize={'1.4rem'}
      >
        {name}
      </text>
      {portBlock}
    </g>
  );
}

export default Node;
