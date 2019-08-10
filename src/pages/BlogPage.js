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
    }
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
                {Object.keys(blogPosts).map(key => {
                    return (
                        <div className="blogLinks">
                            <Link to={`/blog/${blogPosts[key].url}`} >{blogPosts[key].title}</Link>
                        </div>)
                })}
                <Route path={`/blog/:postTitle`} render={(a) => <div className="post">
                    <h4>{a.match.params.postTitle}</h4>
                    <iframe className="post" src={blogPosts[a.match.params.postTitle].link} ></iframe>
                </div>} />


            </BlogPageDiv>
        )
    }
}

export default withRouter(BlogPage)

const BlogPageDiv = styled.div`
    border: 1px solid red;
    display: flex;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    .post{
        border: 0;
        position: absolute;
        width: 99%;
        height: 100%;
    }
    .blogLinks{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        alignItems: space-around;
    }
`