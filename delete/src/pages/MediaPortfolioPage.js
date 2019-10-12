import React from 'react';
import styled from 'styled-components';
import { media } from '../data/mediaObj'
import { WebTile } from '../components'
import { connect } from 'react-redux';
import { updateLogs } from '../redux/actions.js.js'

class WebPortfolio extends React.Component {

  render(){
    return (
      <PortfolioDiv>
        {media.map(item => {
          return <WebTile item={item} key={item.name} />
        })}
      </PortfolioDiv>
    )
  }
}

const mapStateToProps = state => {
  return {state};
}

export default connect(mapStateToProps, {updateLogs})(WebPortfolio)

const PortfolioDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  overflow: auto;
  flex-wrap: wrap;
`;