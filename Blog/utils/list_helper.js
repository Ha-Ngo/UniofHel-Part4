const blog = require('../models/blog')
var _ = require('lodash')

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

function testfunc(author, blogs) {
  return {'author': author, 'blogs': blogs}
}
const mostBlogs = (blogs) => {
  const result = _.countBy(blogs, 'author')
  const countBlog = Object.entries(result).map(([key,value]) => ({'author': key,'blogs': value}))
  const mostBlog = _.maxBy(countBlog, 'blogs')
  console.log(countBlog)
  console.log(mostBlog)

  return mostBlog
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs
}
