const blog = require("../models/blog")

const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    const totalLikes = blogs.reduce((sum, blog) => {
        return sum + blog.likes
    }, 0)
    return(totalLikes)
}

module.exports = {
    dummy,
    totalLikes
}