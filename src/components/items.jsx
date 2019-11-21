import React, {useRef, forwardRef, useImperativeHandle, Component} from 'react';

// import Node from './node';
// import Link from './link';
import Sticky from './sticky';

import {stickiesSelector} from '../selectors/selectors';

const Items = ({layout}) => {

  if(!layout) return null;
  // const {nodes, links, stickies} = layout;

  // const nodesToRender = nodes && nodes.map((node) => (
  //   <Node {...node} key={node.id} />
  // ));
  // const linksToRender = links && links.map((link) => (
  //   <Link {...link} key={link.id} />
  // ));

  const stickies = stickiesSelector(layout);
  const stickiesToRender = stickies && stickies.map((sticky) => (
    <Sticky {...sticky} key={sticky.id} /> 
  ));

  return (
    <>
      {stickiesToRender}
      {/* {nodesToRender} */}
      {/* {linksToRender} */}
    </>
  )
}
export default Items;