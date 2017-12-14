export const fetchBlogs = (callback) => {
    setTimeout(function () {
        var fakeBlogs = [
            { created: '11/30/2017', text: 'today i learn web apps' },
            { created: '11/30/2017', text: 'today i learn react' },
            { created: '11/30/2017', text: 'today i learn redux' },
        ]
        callback(fakeBlogs)
    }, 4000)
}