import {
  SET_SCALE,
  ADD_NODE,
  HOVER_PORT,
  CLICK_ITEM,
  COPY_NODES,
  REMOVE_LINK,
  REMOVE_NODE,
  REMOVE_STICKY,
  SET_DRAGGING,
} from '../actions/actionTypes';

const EMPTY_SELECTION = {
  link: null,
  node: null,
  sticky: null,
};
const INITIAL_STATE = {
  hoveredPort: null,
  selection: EMPTY_SELECTION,
  copyNodes: null,
  scale: 1,
  dragging: false
};

export default function scene(state = INITIAL_STATE, action) {
  const {type, payload} = action;
  switch (type) {
    case SET_DRAGGING:
      const {dragging} = payload;
      return {...state, dragging}
    case SET_SCALE:
      const {scale} = payload;
      return {...state, scale};
    case ADD_NODE:
      return {
        ...state,
        selection: {...EMPTY_SELECTION, node: [payload.id]},
      };
    case HOVER_PORT:
      return {
        ...state,
        hoveredPort: {id: payload.portId, type: payload.type},
      };
    case COPY_NODES:
      return {...state, copyNodes: payload.nodeIds};
    case REMOVE_LINK:
    case REMOVE_NODE:
    case REMOVE_STICKY:
      return {
        ...state,
        selection: EMPTY_SELECTION,
      };
    case CLICK_ITEM:
      const selection = {};
      Object.keys(state.selection).forEach((key) => {
        selection[key] = payload.type === key && !(
            state.selection[key] &&
            state.selection[key].includes(payload.id) &&
            state.selection[key].length == 1
          ) ? [payload.id] : null
      });
      return {...state, selection};
    default:
      return state;
  }
}
