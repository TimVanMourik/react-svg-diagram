import React from 'react';
import {ReactSVGPanZoom} from 'react-svg-pan-zoom'
import {AutoSizer} from 'react-virtualized';
import {POSITION_RIGHT, ALIGN_CENTER} from 'react-svg-pan-zoom';

import {BackgroundDefs, Background} from './components/background';

const ReactSVGPipeline = ({ background, defs, x, y, width, height }) => {


  const viewer = (
    <svg
      viewBox={`${x || 0} ${y || 0} ${width} ${height}`}
    >
      <defs>
        {<BackgroundDefs/>}
      </defs>
      <g 
        className="view" 
      >
        {<Background />}
        <g 
          // ref={(el) => (this.entities = el)}
        >
        </g>
      </g>
    </svg>
  );

  return (
    <AutoSizer>
       {(({width, height}) => width === 0 || height === 0 ? null : (
         <ReactSVGPanZoom
           width={width} 
           height={height}
           background={"#fff"}
           miniatureProps={{position: POSITION_RIGHT}}
           toolbarProps={{position: POSITION_RIGHT, SVGAlignY: ALIGN_CENTER, SVGAlignX: ALIGN_CENTER}}
         >
           {viewer}
         </ReactSVGPanZoom>
       ))}
     </AutoSizer>
  )
};

export default ReactSVGPipeline;