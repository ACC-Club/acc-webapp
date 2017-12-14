import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'

import './index.html'

import { store } from './store/store.js'

import { fetchBlogs } from './fakeapi.js'

import Blog from './components/blog.js'
import Chat from './components/chat.js'


fetchBlogs(blogs => {
    console.log('here are your blogs', blogs)
})

class App extends React.Component {
    render () {
        return (
            <div>
                My ACC App
                <Blog />
                <Chat />
            </div>
        )
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('app')
);