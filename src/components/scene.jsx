import React, {StrictMode, useState, useReducer} from 'react';


import Links from './links';
import Nodes from './nodes';
import Stickies from './stickies';

const Scene = () => {


  return (
    <svg
      withViewBox={`${x || 0} ${y || 0} ${w || width} ${h || height}`}
    >
      {this.renderDefs()}
      <g 
        className="view" 
        ref={(el) => (this.view = el)}
      >
        <Background />
        <g 
          className="entities" 
          ref={(el) => (this.entities = el)}
        >
          <Stickies stickies={stickies} />
          <Nodes nodes={nodes} />
          <Links links={links} />
          <CustomDragLayer />
        </g>
      </g>
    </svg>
      
  )
})




