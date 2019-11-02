import React , { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux';
import { updateLogs } from '../redux/actions.js'

class WebTile extends Component {
    clickHandler = (link) => {
        window.open(link)
        // const log = {
        //     time: Date.now(),
        //     action: `click`,
        //     component: `${item.name}`
        // }
        // this.props.updateLogs(log)
    }

    render(){
        const { item } = this.props
        return(
            <WebTileDiv 
                name='link' 
                onClick={(e) => {
                    e.stopPropagation()
                    this.clickHandler(item.link)
                }}> 
                    <h1>{item.name}</h1>
                    <a className="github" onClick={(e) => {
                            e.stopPropagation()
                            this.clickHandler(item.github)
                        }} target="_blank" href={item.github}>
                        <i className="fab fa-github"></i>
                    </a>
            </WebTileDiv>
        )
    }
}

const mapStateToProps = state => {
    return {state};
  }
  
  export default connect(mapStateToProps, {updateLogs})(WebTile)

const WebTileDiv = styled.div`
    background: white;
    width: 49%;
    margin: 2px;
    text-align: center;
    color: black;
    margin: 5px;
    min-height: 200px;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 10px 0 rgba(0, 0, 0, 0.1);
    &:hover {
        background: #f2f2f2;
        cursor: pointer;
        /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
    }
    a {
        text-decoration: none;
        color: black;
    }
    @media (max-width: 836px){
        /* flex-direction: column;
        justify-content: flex-start; */
        /* align-items: center; */
        max-width: 95%;
        width: 95%;
    }
    .github{
        font-size: 20px;
    }
`