import {ORM} from 'redux-orm';

import Link from './link';
import Parameter from './parameter';
import Port from './port';
import Sticky from './sticky';
import Node from './node';

const orm = new ORM({
  stateSelector: state => state,
});
// orm.register(Link, Parameter, Port, Node, Sticky);
orm.register(Sticky);

export default orm;
