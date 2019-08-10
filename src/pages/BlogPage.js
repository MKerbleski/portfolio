import React , { Component } from 'react'
import styled from 'styled-components'
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router'
import axios from 'axios'

const blogPosts = {
    this: {
        title: "this is a test",
        link: "https://docs.google.com/document/d/e/2PACX-1vQD28DlTzy5FNFZcZDXIvS0262REST5lm8dUsQqQLpi7vYAolMDgWWrA1v4PLDtVFgF8JC4ejQwMK6f/pub?embedded=true",
        date: Date.now()
    },
    waffles: {
        title: "waffles",
        link: "https://docs.google.com/document/d/e/2PACX-1vRGoEltOarq_JcDVtWINqY08kGbQacC4-smLxniND2YcllegPyOkPu7gzzSA194e_MpEoGoOc7n90lF/pub",
        date: Date.now()
    },
    vrWorthEmulating: {
        link: "https://docs.google.com/document/d/e/2PACX-1vQUdPPAlzQE4sAmjj7OrxnEqW6nGTwIl7iEFTlOn1zc8Ymo7NKN-M8EqRfG7-qkO1nXLJBd3uPmULXd/pub",
    },
    guess: {
        link: "https://docs.google.com/document/d/e/2PACX-1vR9QN9kVs_6dqlhePT4H888m9eqsqdpyS5xWd4v9LTrmBUdiYSwjeXh6OgBX9ydnJt-9__ThQNx7pOY/pub",
    },
}

class BlogPage extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }

    componentDidMount(){
        axios.get('https://sheetsu.com/apis/v1.0bu/2300c8af088e').then(res => {
            this.setState({
                blogPosts: res.data
            })
        })
    }

    render(){
        console.log('this.props', this.state)
        return(
            <BlogPageDiv> 
            {this.state.blogPosts 
                    ?
                    <React.Fragment>
                        <ul className="blogLinks">
                            <h4>Posts</h4>  
                            {this.state.blogPosts.map(key => {
                                return (
                                    <li className="blogLink">
                                        {this.props.location.pathname.includes(key.keyword) ? '-> ' : null}<Link to={`/blog/${key.keyword}`} >{key.keyword}</Link>
                                    </li>)
                            })} 
                            
                        
                        </ul>
                            <Route path={`/blog/:postTitle`} render={(a) => 
                            <div className="wholePost">
                                <iframe className="post" src={this.state.blogPosts.filter(each => each.keyword === a.match.params.postTitle)[0].url} ></iframe>
                            </div>} />
                    </React.Fragment>
                : null}

            </BlogPageDiv>
        )
    }
}

export default withRouter(BlogPage)

const BlogPageDiv = styled.div`
    /* border: 1px solid red; */
    padding: 5px;
    display: flex;
    flex-direction: row;
    align-items: space-around;
    justify-content: space-around;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    .wholePost {
        border: 0;
        /* position: relative; */
        width: 90vw;
        /* height: 100%; */
        overflow: hidden;
    }
    .post {
        margin: 10px;
        position: fixed;
        display: block;       /* iframes are inline by default */
        /* background: #000; */
        border: none;         /* Reset default border */
        height: 80vh;       
        width: 80vw;
    }
    .blogLinks {
        /* border: 1px solid green; */
        width: 10vw;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: space-around;
    }
`