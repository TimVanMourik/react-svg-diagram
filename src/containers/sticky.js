import {connect} from 'react-redux';

import Sticky from '../components/sticky';
import {clickItem, updateSticky} from '../actions';

const mapStateToProps = (state) => ({
  scale: state.scene.scale
});

const mapDispatchToProps = (dispatch) => ({
  clickItem: (nodeId, type) => dispatch(clickItem(nodeId, type)),
  updateSticky: (id, offset) => dispatch(updateSticky(id, offset)),
});

const StickyContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Sticky);

export default StickyContainer;
