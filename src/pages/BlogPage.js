import React , { Component } from 'react'
import styled from 'styled-components'
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router'

const blogPosts = {
    this: {
        url: 'this',
        title: "this is a test",
        link: "https://docs.google.com/document/d/e/2PACX-1vQD28DlTzy5FNFZcZDXIvS0262REST5lm8dUsQqQLpi7vYAolMDgWWrA1v4PLDtVFgF8JC4ejQwMK6f/pub?embedded=true",
        date: Date.now()
    },
    second: {
        url: 'second',
        title: "second",
        link: "https://docs.google.com/document/d/1lOLDDYMaeCdlMiIV49qE5G0pLQ602_O6v-j5c-ligKE/pub?embedded=true",
        date: Date.now()
    },
    waffles: {
        url: 'waffles',
        title: "waffles",
        link: "https://docs.google.com/document/d/e/2PACX-1vRGoEltOarq_JcDVtWINqY08kGbQacC4-smLxniND2YcllegPyOkPu7gzzSA194e_MpEoGoOc7n90lF/pub",
        date: Date.now()
    },
}

class BlogPage extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        console.log('this.props', this.props)
        return(
            <BlogPageDiv> 
            <ul className="blogLinks">

                {Object.keys(blogPosts).map(key => {
                    return (
                        <li className="blogLink">
                            <Link to={`/blog/${blogPosts[key].url}`} >{blogPosts[key].title}</Link>
                        </li>)
                })}
            </ul>
                <Route path={`/blog/:postTitle`} render={(a) => 
                <div className="wholePost">
                    <iframe className="post" src={blogPosts[a.match.params.postTitle].link} ></iframe>
                </div>} />


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