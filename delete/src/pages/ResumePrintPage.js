import React, {Component} from 'react';
import styled from 'styled-components';
import { Resume } from '../components/resume'

class Print extends Component {
  constructor(props){
    super(props);
    this.state = {
        printOnce: false
    }
  }

  componentDidMount(){
    this.props.hideHeaders();
  }

  componentDidUpdate(){
      window.print()
  }

  componentWillUnmount(){
    this.props.showHeaders();
  }

  render(props){
    return (
      <PrintDiv>
          <Resume />
      </PrintDiv>
    )
  }
}

export default Print;

const PrintDiv = styled.div`
  
`;