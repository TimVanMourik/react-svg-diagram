import {createReducer} from 'redux-orm';
import {combineReducers} from 'redux';

import orm from '../models';
import scene from './scene';

export default combineReducers({
  orm: createReducer(orm), // database components
  scene,
});

