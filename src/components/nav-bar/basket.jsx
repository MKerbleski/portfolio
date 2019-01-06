import React from 'react';
import styled from 'styled-components';
import { DropTarget } from 'react-dnd'; //The HOC that brings everything together

const Basket = (props) => (
  props.connectDropTarget(
    <div>
      <BasketDiv
        style={{
          display: props.highlighted ? 'flex' : 'none',
          background: props.over ? 'green' : null,
        }}
      >
      <i className="fab logo fa-angellist"></i>
    </BasketDiv>
  </div>
  )
);


const specObj = {

  drop(props) {
    console.log('target props', props)//target props //square or circle
    const { shape, catagory } = props;
    props.openAuth();
    return ({
      shape,
      catagory
    });
  }
}

const collect = (connect,  monitor) => ({
  connectDropTarget: connect.dropTarget(),
  highlighted: monitor.canDrop(),
  over: monitor.isOver(),
});

export default DropTarget('item', specObj, collect)(Basket);//HOC that combines Target

const BasketDiv = styled.div`
    box-sizing: border-box;
    margin-left: 5px;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    .logo {
      box-sizing: border-box;
      cursor: pointer;
      font-size: 30px;
      margin: 4px;
      padding-right: 6px;
      color: black;
    }
`