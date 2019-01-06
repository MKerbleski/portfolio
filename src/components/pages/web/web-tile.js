import React , { Component } from 'react'
import styled from 'styled-components'

export default class WebTile extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        console.log(this.props)
        return(
            <WebTileDiv> 
                <div style={'background'= picture} className="web-tile">
                    <h1><a href={item.link}>{item.name}</a></h1>
                </div>
            </WebTileDiv>
        )
    }
}

const WebTileDiv = styled.div`
    border: 1px solid red;
`