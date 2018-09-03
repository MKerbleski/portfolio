import React from 'react';
import { DragSource } from 'react-dnd';
import { Link} from 'react-router-dom';

//also needs to be a stateless functional component
const Ball = (props) => (
// const Source = ({ color, connectDragSource, isDragging }) => (
  props.connectDragSource(
    <span>
      . 
    </span>
  )
);



const sourceObj = {
  beginDrag(props) { // this mounts any props onto the object
    console.log("beginDrag", props)
    const { color, text } = props; //this return just 'green'
    console.log(color);
    console.log(props.color); //same thing but props cant be in a return statement?
    return ({
      color, text
    });
  },
  //endDrag is called when dropped on a target
  endDrag(props, monitor) {// this takes props mounted on beginDrag
    console.log("endDrag", "props", props, "monitor", monitor.getDropResult())
    if (!monitor.didDrop()) {
      return;
    }
    // const { onDrop } = props;
    const  {color, text}  = monitor.getItem(); //returns just 'blue'
    // console.log(props.color) // also returns just 'blue'

    const { shape, catagory } = monitor.getDropResult();//gets props from the target// shape
    props.onDrop( color, shape, text, catagory);//onDrop supplied by parent which attaches the color and shape to the props
  },
};

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
});

export default DragSource('item', sourceObj, collect)(Ball);//HOC that ties the Source together
// export default DragSource(type, spec, collect)(MyComponent);
