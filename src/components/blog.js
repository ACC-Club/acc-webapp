import React from 'react'

import { connect } from 'react-redux'

import { getBlogs } from '../actions/actions.js'

class Blog extends React.Component {
    onGetBlogsClicked () {
        getBlogs()
    }
    render () {
        var blogData = this.props.blogs;
        
        var blogElements = blogData.map((b, i) => {
            return (
                <div key={i}>
                    <h3>{b.created}</h3>
                    <p>{b.text}</p>
                </div>
            )
        })
        return (
            <div>
                This is the blog.
                <button onClick={this.onGetBlogsClicked}>get blogs</button>
                {blogElements}
            </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        buzz: state.foo,
        blogs: state.blogs
    }
}

export default connect(mapStateToProps)(Blog)