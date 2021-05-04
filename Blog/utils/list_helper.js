const blog = require('../models/blog')

const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  const totalLikes = blogs.reduce((sum, blog) => {
    return sum + blog.likes
  }, 0)
  return totalLikes
}

const favoriteBlog = (blogs) => {
  if (blogs.length > 0) {
    const newLikeList = blogs.map((blog) => blog.likes)
    const favoriteIndex = newLikeList.indexOf(Math.max(...newLikeList))
    const blog = blogs[favoriteIndex]
    const result = {
      title: `${blog.title}`,
      author: `${blog.author}`,
      likes: parseInt(`${blog.likes}`),
    }
    return result
  }
  return {}
}
module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
}
