import React , { Component } from 'react'
import styled from 'styled-components'

export default class WebTile extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    clickHandler = (e) => {
        window.open(this.props.item.link)
    }

    render(){
        console.log(this.props)
        const item = this.props.item
        return(
            <WebTileDiv onClick={this.clickHandler}> 
                    <h1>{item.name}</h1>
            </WebTileDiv>
        )
    }
}

const WebTileDiv = styled.div`
    /* border: 1px solid red; */
    background: gray;
    width: 49%;
    margin: 2px;
    text-align: center;
    color: black;
    &:hover{
        background: lightgray;
        cursor: pointer;
    }
    a {
        text-decoration: none;
        color: black;
    }
`