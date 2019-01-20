import React , { Component } from 'react'
import styled from 'styled-components'
import { posts } from './blogPosts.js'
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default class BlogPage extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
      console.log(posts)
        return(
            <BlogPageDiv>
                {posts.map(post => {
                  console.log(post)
                  return <Route key={post.url} path={`/blog/${post.url}`} render={() => {
                    return (
                      <div>
                        {post.body}
                      </div>)}}
                  />
                })}
                {posts.map(post => {
                  console.log(post)
                  return (
                      <Link key={post.url} to={`/blog/${post.url}`}>{post.title}</Link>
                  )
                })}
                <Link to={`/blog/`}>blog home</Link>
            </BlogPageDiv>
        )
    }
}

const BlogPageDiv = styled.div`
    border: 1px solid red;
`
