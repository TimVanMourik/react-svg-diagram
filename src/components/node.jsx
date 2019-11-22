import React, {useState} from 'react';

import Parameter from './parameter';
import Tooltip from './tooltip';

import "../scss/unselectable.scss";

const Node = (props) => {
  
  const {id, name, x, y, width, colour,
    scale,
    // selectedNodes,
    ports,
    updateNode,
    clickItem 
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
      onClick={() => clickItem(id, 'node')}
      onMouseEnter={() => setHover(true)} 
      onMouseLeave={() => {setHover(false); endDrag()}}
      onMouseDown={() => startDrag()}
      onMouseUp={() => endDrag()}
      onMouseMove={(event) => dragging && drag(event)}
    >
      <rect
        fill={colour}
        rx={6}
        ry={6}
        width={`${width}px`}
        height={initialHeight + portHeight * (ports && ports.length)}
        filter={hovered ? "url(#selection-glow)": ""}
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
      {/* {hovered && <Tooltip ports={ports} />} */}
    </g>
  );
}

export default Node;
