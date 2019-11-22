import React, {StrictMode, useReducer} from 'react';
import {ReactSVGDiagram, LayoutReducer} from '../../src/index';

const ViewerStory = () => {

  const [layoutState, dispatch] = useReducer(LayoutReducer);

  return (
    <StrictMode>
      <ReactSVGDiagram
        //mandatory:
        width={300}
        height={300}
        layout={layoutState}

        //optional:
        x={0}
        y={0}
        background={<rect />}
        backgroundDefs={<pattern />}
      >
        
      </ReactSVGDiagram>
    </StrictMode>
  )
}

export default ViewerStory;