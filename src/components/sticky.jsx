import React, {useState} from 'react';

import {truncateString} from '../utils/truncateString';
import {wrap} from '../utils/wordWrap';

import "../scss/unselectable.scss";

const Sticky = (props) => {
  const {name, content, x, y, scale, id} = props;
  const {clickItem, updateSticky} = props;

  const [dragging, setDragging] = useState(false);
  const [hovered, setHover] = useState(false);
  const [draggingPosition, setDraggingPosition] = useState({x, y});
 
  const textParameters = {
    x: 290,
    y: 120,
    fontSize: 30,
    lineHeight: 1.25,
    style: '',
    fontFamily: 'NexaBold',
  };

  const maxLines = 8;
  const textwrap = wrap(content, textParameters, 100, maxLines);

  const drag = (event) => {
    event.stopPropagation();
    setDraggingPosition({
      x: draggingPosition.x + event.movementX / (scale || 1),
      y: draggingPosition.y + event.movementY / (scale || 1),
    })
  }

  const startDrag = () => {
    setDragging(true)
    setDraggingPosition({x, y});
  }
  const endDrag = () => {
    setDragging(false)
    if(!updateSticky) return
    updateSticky(id, draggingPosition)
  }

  const {x: xPos, y: yPos} = dragging ? draggingPosition : props;
  return (
    <g 
      transform={`translate(${xPos},${yPos})`}
      onClick={() => {if(!clickItem) return; clickItem(id, 'sticky')}}
      onMouseEnter={() => setHover(true)} 
      onMouseLeave={() => {setHover(false); endDrag()}}
      onMouseDown={() => startDrag()}
      onMouseUp={() => endDrag()}
      onMouseMove={(event) => dragging && drag(event)}
    >
      <g transform="translate(0,100) scale(0.4,0.4)">
        <path
          d={'M 71.428571,29.321428 C 71.428571,35.035714 ' +
          '70,309.32143 70,309.32143 L 192.85714,480.75 l ' +
          '320,10 5.71429,-452.857143 -447.142859,-8.571429 z'}
          fill="url(#linearGradient4763)"
          fillOpacity={1}
          stroke="none"
          filter={hovered ? "url(#selection-glow)": ""}
        />
        <path
          d={'m 345.47217,485.90229 167.68532,5.05076 ' +
          '1.51523,-143.94674 -169.20055,138.89598 z'}
          fill="url(#linearGradient4767)"
          stroke="none"
        />
        <text
          className="noselect"
          fill="#777"
          fontFamily="Nexa-Bold"
          // textAnchor="middle"
          fontSize={'4rem'}
          x={80}
          y={90}
        >
          {truncateString(name, 10)}
        </text>
        <text
          className="noselect"
          fill="#777"
          textAnchor="middle"
          fontSize={'1.8rem'}
          x={textParameters[x]}
          y={textParameters[y]}
        >
          {textwrap}
        </text>
        <path
          d={'M 69.700526,308.62052 192.93914,480.85153 ' +
          '232.84016,361.14845 69.700526,308.62052 z'}
          fill="url(#linearGradient4765)"
          fillOpacity={1}
          stroke="none"
        />
      </g>
    </g>
  );
}
export default Sticky;
