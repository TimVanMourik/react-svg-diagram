import {Model, attr} from 'redux-orm';
import {v4} from 'uuid';

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
        // ports are saved in the Port reducer
        const {name, ports} = payload;
        const width = nameToWidth(name, ports);
        Node.create({
          id: payload.id || v4(),
          name: payload.name || '',
          x: payload.x || 0,
          y: payload.y || 0,
          colour: payload.colour || '#BBB',
          width,
        });
        break;
      }
      case REMOVE_NODE:
        const node = Node.withId(payload.id);
        const {ports} = node;
        if(ports.length !== 0) {
          ports.forEach((port) => {
            if(port.inputLinks.length !== 0) {
              port.inputLinks.forEach((link) => link.delete());
            }
            if(port.outputLinks.length !== 0) {
              port.outputLinks.forEach((link) => link.delete());
            }
          });
          ports.forEach((port) => port.delete());
        }
        node.delete()
        break;
      case UPDATE_NODE: {
        const node = Node.withId(payload.nodeId);
        const {newValues} = payload;
        const {name} = ('name' in payload) ? payload : node;

        node.update({
          ...newValues,
          width: nameToWidth(
            name,
            node.ports && node.ports.toRefArray()
          ),
        });
      }
        break;
      default: 
        return undefined;
    }
  }
}
Node.modelName = 'Node';
Node.fields = {
  name: attr(),
  x: attr(),
  y: attr(),
  width: attr(),
  colour: attr(),
};

export default Node;
