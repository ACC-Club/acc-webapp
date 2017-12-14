import { dispatch } from '../store/store.js'

export const getBlogs = () => {
    dispatch({
        type: 'BLOG_GET_BLOGS'
    })
}