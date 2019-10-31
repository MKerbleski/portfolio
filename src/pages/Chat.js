import React , { Component } from 'react'
import styled from 'styled-components'

export default class Chat extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount(){
        const head = document.querySelector('head');
        const script = document.createElement('script');
        script.setAttribute('src',  'https://assets.calendly.com/assets/external/widget.js');
        head.appendChild(script);
    }
    
    render(){
        return(
            <ChatDiv> 
                <div className="calendly-inline-widget" data-url="https://calendly.com/kerbleski/15min" style={{minWidth:'320px', height:'630px'}}></div>
            </ChatDiv>
        )
    }
}

const ChatDiv = styled.div`

    width: 100%;
    height: 100%;
`