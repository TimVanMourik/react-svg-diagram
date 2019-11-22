import {ORM} from 'redux-orm';

import Link from './link';
import Port from './port';
import Sticky from './sticky';
import Node from './node';

const orm = new ORM({
  stateSelector: state => state,
});
orm.register(Link, Port, Node, Sticky);

export default orm;
