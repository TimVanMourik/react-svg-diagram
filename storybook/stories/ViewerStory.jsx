import React, {StrictMode, useState, useReducer} from 'react';
import {ReactSVGPipeline, LayoutReducer} from '../../src/index';

const ViewerStory = () => {

  const [layoutState, dispatch] = useReducer(LayoutReducer);


  return (
    <StrictMode>
      <ReactSVGPipeline
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
        
      </ReactSVGPipeline>
    </StrictMode>
  )
}

export default ViewerStory;