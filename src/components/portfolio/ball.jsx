import React from 'react';
import { DragSource } from 'react-dnd';

const Ball = (props) => (
// const Source = ({ color, connectDragSource, isDragging }) => (
  props.connectDragSource(
    <span style={{cursor: props.isDragging ? 'pointer' : null}} >
      .
    </span>
  )
);

const sourceObj = {
  beginDrag(props) {
    const {color} = props
    return ({
      color //this gets sent to the drop item // is null in this example because react-dnd is overkill
    });
  },

  endDrag(props, monitor) {// this takes props mounted on beginDrag

  },
};

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
});

export default DragSource('item', sourceObj, collect)(Ball);//HOC that ties the Source together
// export default DragSource(type, spec, collect)(MyComponent);
