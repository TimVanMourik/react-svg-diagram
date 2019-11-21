import React, {useRef, useReducer, StrictMode} from 'react';
import { LoremIpsum } from "lorem-ipsum";

import {ReactSVGDiagram, LayoutReducer} from '../../src/index';
import {FORMAT_SVG, FORMAT_PNG} from '../../src/constants';
import {
  ADD_NODE,
  ADD_STICKY,
  CLEAR_DATABASE
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
const lorem = new LoremIpsum({
  sentencesPerParagraph: { max: 8, min: 4 },
  wordsPerSentence: { max: 16, min: 4 }
});

const randomNodePayload = () => ({
  title: lorem.generateWords(1),
  x: Math.floor(Math.random() * 800),
  y: Math.floor(Math.random() * 800),
  colour: '#BCD'
});

const randomStickyPayload = () => ({
  title: lorem.generateWords(1),
  content: lorem.generateSentences(2),
  x: Math.floor(Math.random() * 600),
  y: Math.floor(Math.random() * 600),
});


const MethodsStory = () => {
  const [layoutState, dispatch] = useReducer(LayoutReducer);
  
  const viewerRef = useRef(null);
  return (
    <StrictMode>
      <div
        style={{display: 'flex', flexDirection: 'column', height: '100%'}}
      >
        <div>
          <button type="button" style={STYLE_BUTTON} name="fit-btn"
            onClick={event => viewerRef.saveToFile(FORMAT_SVG)}>.saveToSvg(FORMAT_SVG)
            {/* onClick={event => {console.info(viewerRef)}}>.saveToSvg(FORMAT_SVG) */}
          </button>

          <button type="button" style={STYLE_BUTTON} name="fit-btn"
            onClick={event => viewerRef.saveToFile(FORMAT_PNG)}>.saveToSvg(FORMAT_PNG)
          </button>
        </div>
        <hr style={HR_BUTTON}/>
        <div>
          <button type="button" style={STYLE_BUTTON} name="fit-btn"
            onClick={event => dispatch({type: CLEAR_DATABASE})}>CLEAR_DATABASE
          </button>
          <button type="button" style={STYLE_BUTTON} name="fit-btn"
            onClick={event => dispatch({type: ADD_NODE, payload: randomNodePayload()})}>ADD_NODE (random payload)
          </button>
          <button type="button" style={STYLE_BUTTON} name="fit-btn"
            onClick={event => dispatch({type: ADD_STICKY, payload: randomStickyPayload()})}>ADD_STICKY (random payload)
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
      </div>
    </StrictMode>
  )
}

export default MethodsStory;