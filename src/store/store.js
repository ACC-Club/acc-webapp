import { createStore } from 'redux'

var initialState = {
    foo: 'blah i did call it blah',
    blogs: []
}

const reducer = (state, action) => {
    var newState = Object.assign({}, state);
    switch (action.type) {
        case 'BLOG_GET_BLOGS':
            var fakeBlogs = [
                { created: '11/30/2017', text: 'today i learn web apps' },
                { created: '11/30/2017', text: 'today i learn react' },
                { created: '11/30/2017', text: 'today i learn redux' },
            ]
            newState.blogs = fakeBlogs;
            return newState;
        default:
            return state;
    }
}

export const store = createStore(reducer, initialState, window.devToolsExtension())

export const dispatch = store.dispatch