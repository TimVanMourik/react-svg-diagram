import React, {useRef, forwardRef, useImperativeHandle} from 'react';
import {UncontrolledReactSVGPanZoom} from 'react-svg-pan-zoom'
import {AutoSizer} from 'react-virtualized';

import {POSITION_RIGHT, ALIGN_CENTER, TOOL_AUTO} from 'react-svg-pan-zoom';

import {BackgroundDefs, Background} from './components/background';
import Items from './components/items';
import {svgElementToFile} from './utils/saveToImage';

const ReactSVGDiagram = forwardRef(({ background, defs, x, y, width, height, layout }, Viewer) => {
  const svgRef = useRef(null);
  const viewerRef = useRef(null);

  /** ReactSVGDiagram methods **/
  useImperativeHandle(Viewer, () => ({

    saveToFile(format) {
      svgElementToFile(viewerRef, format)
    }
  }));

  const viewer = (
    <svg
      viewBox={`${x || 0} ${y || 0} ${width} ${height}`}
    >
      <defs>
        {<BackgroundDefs/>}
      </defs>
      <g 
        className="view" 
        ref={svgRef}
      >
        {<Background />}
        <g 
          className="entities" 
          // ref={(el) => (this.entities = el)}
        >
          <Items layout={layout}/>
        </g>
      </g>
    </svg>
  );

  return (
    <div style={{width: "100%", height: "100%"}}>
      <AutoSizer>
        {(({width, height}) => width === 0 || height === 0 ? null : (
          <UncontrolledReactSVGPanZoom
            ref={viewerRef}
            // tool={TOOL_AUTO} onChangeTool={() => {}}
            // value={{}} onChangeValue={(() => {})}
            width={width} 
            height={height}
            //  SVGBackground={styleSheet.primaryLightSecondaryColor}
            background={"#fff"}
            miniatureProps={{position: POSITION_RIGHT}}
            toolbarProps={{position: POSITION_RIGHT, SVGAlignY: ALIGN_CENTER, SVGAlignX: ALIGN_CENTER}}
            // background={styleSheet.primaryLightSecondaryColor}
          >
            {viewer}
          </UncontrolledReactSVGPanZoom>
        ))}
      </AutoSizer>
    </div>
  )
});

export default ReactSVGDiagram;