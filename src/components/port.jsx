import React, {useState} from 'react';
import {v4} from 'uuid';

const Port = (props) => {

  const {hoverPort, startDrag, endDrag, id, type, x, y} = props;

  return (
    <circle
      onMouseEnter={() => {if(!hoverPort) return; hoverPort(id, type)}} 
      onMouseLeave={() => {if(!hoverPort) return; hoverPort(null)}}
      onMouseDown={() => {if(!startDrag) return; startDrag()}}
      onMouseUp={() => {if(!endDrag) return; endDrag()}}
      // onMouseMove={(event) => dragging && drag(event)}
      cx={x}
      cy={y}
      r={4}
      fill={type === 'input' ? '#3498db' : '#e74c3c'}
      cursor="pointer"
      strokeWidth="16"
      stroke="transparent"
    />
  );
}
export default Port;
