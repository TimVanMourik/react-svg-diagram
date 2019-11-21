import {Model, attr} from 'redux-orm';

import {nameToWidth} from '../utils/textToWidth';
import {
  ADD_NODE,
  REMOVE_NODE,
  UPDATE_NODE,
  CLEAR_DATABASE,
} from '../actions/actionTypes';


class Node extends Model {
  static reducer(action, Node) {
    const {type, payload} = action;
    switch (type) {
      case CLEAR_DATABASE:
        Node.all().delete();
        break;
      case ADD_NODE: {
        // parameters are saved in the Port reducer
        const {title} = payload;
        const width = nameToWidth(title, payload.parameters);
        Node.create({...payload, title, width});
        break;
      }
      case REMOVE_NODE:
        Node.withId(payload.id).delete()
        break;
      case UPDATE_NODE: {
        const node = Node.withId(payload.nodeId);
        const {newValues} = payload;
        const {title} = ('title' in payload) ? payload : node;

        node.update({
          ...newValues,
          width: nameToWidth(
            title,
            node.parameters && node.parameters.toRefArray()
          ),
        });
        break;
      }
    }
    return undefined;
  }
}
Node.modelName = 'Node';
Node.fields = {
  title: attr(),
  x: attr(),
  y: attr(),
  width: attr(),
  colour: attr(),
};

export default Node;
