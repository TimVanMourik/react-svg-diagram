import {Model, fk, attr} from 'redux-orm';
import {v4} from 'uuid';

import {
  ADD_NODE,
  REMOVE_NODE,
  ADD_PORT_TO_NODE,
  REMOVE_PORT,
  UPDATE_PORT,
  CLEAR_DATABASE,
} from '../actions/actionTypes';

class Port extends Model {
  static reducer(action, Port) {
    const {type, payload} = action;
    switch (type) {
      case CLEAR_DATABASE:
        Port.all().delete();
        break;
      case ADD_NODE:
        const ports = payload.ports;
        ports && ports.forEach((port) => {
          Port.create({
            id: port.id || v4(),
            node: payload.id,
            name: port.name,
            input: port.input,
            output: port.output,
          });
        });
        break;
      case REMOVE_NODE:
        Port.filter((port) => port.node === payload.id)
            .toModelArray()
            .forEach((port) => {
              port.input && port.inputModel.delete();
              port.output && port.outputModel.delete();
              port.delete();
            });
        break;
      case ADD_PORT_TO_NODE:
        const {port, nodeId} = payload;

        if (!Port.filter({id: port.id}).exists()) {
          Port.create({
            id: port.id,
            node: nodeId,
            name: port.name,
            type: port.type,
            input: port.input,
            output: port.output,
          });
        }
        break;
      case REMOVE_PORT:
        Port.withId(payload.id).delete();
        break;
      case UPDATE_PORT:
        Port.withId(payload.portId).update(payload.newValues);
        break;
      default: 
        return undefined;
    }
  }
}
Port.modelName = 'Port';
Port.fields = {
  name: attr(),
  node: fk({
    to: 'Node',
    as: 'node',
    relatedName: 'ports',
  }),
  input: attr(),
  output: attr(),
};

export default Port;
