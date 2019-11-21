import React, {useRef, useReducer, StrictMode} from 'react';
import {ReactSVGDiagram, LayoutReducer} from '../../src/index';
import {FORMAT_SVG, FORMAT_PNG} from '../../src/constants';
import {
  ADD_NODE,
  ADD_STICKY,
} from '../../src/actions/actionTypes';

const STYLE_BUTTON = {
  fontFamily: 'courier',
  margin: "0rem 0.2rem 0.2rem",
  padding: "0.1rem",
  border: "1px solid black",
  background: "#000",
  color: "#0f0",
  cursor: "pointer"
};

const HR_BUTTON = {
  borderTop: "0px",
  borderBottom: "1px solid #333"
}

const MethodsStory = () => {
  const [layoutState, dispatch] = useReducer(LayoutReducer);
  
  const viewerRef = useRef(null);
  const nodePayload = {
    name: 'test',
    x: 100,
    y: 200,
    colour: '#BBB',
  }
  const stickyPayload = {
    title: 'test',
    content: 'content',
    x: 100,
    y: 200,
  }

  return (
    <StrictMode>
      <div>
        <button type="button" style={STYLE_BUTTON} name="fit-btn"
          onClick={event => viewerRef.saveToFile(FORMAT_SVG)}>.saveToSvg(FORMAT_SVG)
          // onClick={event => {console.info(viewerRef)}}>.saveToSvg(FORMAT_SVG)
        </button>

        <button type="button" style={STYLE_BUTTON} name="fit-btn"
          onClick={event => viewerRef.saveToFile(FORMAT_PNG)}>.saveToSvg(FORMAT_PNG)
        </button>
      </div>
      <hr style={HR_BUTTON}/>
      <div>
        <button type="button" style={STYLE_BUTTON} name="fit-btn"
          onClick={event => dispatch({type: ADD_NODE, payload: nodePayload})}>ADD_NODE (payload)
        </button>
        <button type="button" style={STYLE_BUTTON} name="fit-btn"
          onClick={event => dispatch({type: ADD_STICKY, payload: stickyPayload})}>ADD_STICKY (payload)
        </button>
      </div>
      <hr style={HR_BUTTON}/>

      <ReactSVGDiagram
        //mandatory:
        x={0}
        y={0}
        width={300}
        height={300}
        layout={layoutState}

        //optional:
        ref={viewerRef}

        // background={<rect />}
        // backgroundDefs={<pattern />}
      >
>
        
      </ReactSVGDiagram>
    </StrictMode>
  )
}

export default MethodsStory;