import {Model, attr} from 'redux-orm';
import {v4} from 'uuid';

import {
  ADD_STICKY,
  REMOVE_STICKY,
  UPDATE_STICKY,
  CLEAR_DATABASE,
} from '../actions/actionTypes';

class Sticky extends Model {
  static reducer(action, Sticky, session) {
    const {type, payload} = action;
    switch (type) {
      case CLEAR_DATABASE:
        Sticky.all().delete();
        break;
      case ADD_STICKY:
        Sticky.create({
          id: payload.id || v4(),
          name: payload.name || '',
          content: payload.content || '',
          x: payload.x || 0,
          y: payload.y || 0,
        });
        break;
      case UPDATE_STICKY:
        const {newValues} = payload;
        const sticky = Sticky.withId(payload.id);
        sticky.update({...newValues});
        break;
      case REMOVE_STICKY:
        Sticky.withId(payload.id).delete();
        break;
      default: 
        return undefined;
    }
  }
}
Sticky.modelName = 'Sticky';
Sticky.fields = {
  name: attr(),
  x: attr(),
  y: attr(),
  content: attr(),
};

export default Sticky;
