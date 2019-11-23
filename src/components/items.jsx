import React from 'react';

import Node from './node';
import Link from './link';
import Sticky from './sticky';

import {selectStickies, selectNodesWithPorts, selectLinks} from '../selectors/selectors';
import { CLICK_ITEM } from '../actions/actionTypes';

const Items = ({layout, dispatch}) => {
  if(!layout) return null;
  const {selection} = layout.scene;
  const clickItem = (id, type) => dispatch({type: CLICK_ITEM, payload: {id, type}});

  const nodes = selectNodesWithPorts(layout);
  const {node: selectedNodes} = selection;
  const nodesToRender = nodes && nodes.map((node) => (
    <Node 
      {...node} 
      key={node.id}
      selected={selectedNodes && selectedNodes.includes(node.id)}
      onClick={clickItem}
    />
  ));
  const stickies = selectStickies(layout);
  const stickiesToRender = stickies && stickies.map((sticky) => (
    <Sticky 
      {...sticky} 
      key={sticky.id} 
      onClick={clickItem}
    /> 
  ));

  const links = selectLinks(layout);
  const linksToRender = links && links.map((link) => (
    <Link 
      {...link} 
      key={link.id} 
      onClick={clickItem}
    />
  ));

  // const [linkUnderConstruction, setLinkUnderConstruction] = useState(null);


  return (
    <>
      {stickiesToRender}
      {nodesToRender}
      {linksToRender}
      {/* {linkUnderConstruction} */}
    </>
  )
}
export default Items;