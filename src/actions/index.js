import {
  CLEAR_DATABASE,
  ADD_NODE,
  REMOVE_NODE,
  UPDATE_NODE,
  ADD_PARAMETER_TO_NODE,
  REMOVE_PARAMETER,
  UPDATE_PARAMETER,
  ADD_LINK,
  REMOVE_LINK,
  START_LINK,
  ADD_STICKY,
  REMOVE_STICKY,
  UPDATE_STICKY,
  CLICK_ITEM
} from './actionTypes';

export const clearDatabase = () => ({
  type: CLEAR_DATABASE,
});


// /// NODES /////
export const addNode = (props) => ({
  type: ADD_NODE,
  payload: props,
});
export const deleteNode = (id) => ({
  type: REMOVE_NODE,
  payload: {
    id,
  },
});
export const updateNode = (nodeId, newValues) => ({
  type: UPDATE_NODE,
  payload: {
    nodeId,
    newValues,
  },
});
export const addParameterToNode = (parameter, nodeId) => ({
  type: ADD_PARAMETER_TO_NODE,
  payload: {
    parameter,
    nodeId,
  },
});
// export const addToolboxNodes = (toolboxes) => ({
//   type: ADD_TOOLBOX_NODES,
//   payload: {
//     toolboxes,
//   },
// });

// /// LINKS /////
export const addLink = (props) => ({
  type: ADD_LINK,
  payload: props,
});
export const startLink = (portId) => ({
  type: START_LINK,
  payload: {
    portId,
  },
});
export const deleteLink = (id) => ({
  type: REMOVE_LINK,
  payload: {
    id,
  },
});

// /// PORTS /////
export const updateParameter = (parameterId, newValues) => ({
  type: UPDATE_PARAMETER,
  payload: {
    parameterId,
    newValues,
  },
});
export const deleteParameter = (id) => ({
  type: REMOVE_PARAMETER,
  payload: {
    id,
  },
});

// /// STICKY /////
export const addSticky = (props) => ({
  type: ADD_STICKY,
  payload: props,
});
export const updateSticky = (id, newValues) => ({
  type: UPDATE_STICKY,
  payload: {
    id,
    newValues,
  },
});
export const deleteSticky = (id) => ({
  type: REMOVE_STICKY,
  payload: {
    id,
  },
});


export const clickItem = (id, item) => ({
  type: CLICK_ITEM,
  payload: {
    id,
    item,
  },
});