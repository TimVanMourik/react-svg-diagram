import React from 'react';

import Node from './node';
import Link from './link';
import Sticky from './sticky';

import {selectStickies, selectNodes, selectLinks} from '../selectors/selectors';

const Items = ({layout}) => {

  if(!layout) return null;

  const nodes = selectNodes(layout);
  const nodesToRender = nodes && nodes.map((node) => (
    <Node {...node} key={node.id} />
  ));
  const links = selectLinks(layout);
  const linksToRender = links && links.map((link) => (
    <Link {...link} key={link.id} />
  ));

  const stickies = selectStickies(layout);
  const stickiesToRender = stickies && stickies.map((sticky) => (
    <Sticky {...sticky} key={sticky.id} /> 
  ));

  return (
    <>
      {stickiesToRender}
      {nodesToRender}
      {linksToRender}
    </>
  )
}
export default Items;