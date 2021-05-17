const blog = require('../models/blog')
var _ = require('lodash')
const { indexOf } = require('lodash')

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


const mostBlogs = (blogs) => {
  const result = _.countBy(blogs, 'author')
  const countBlog = Object.entries(result).map(([key,value]) => ({'author': key,'blogs': value}))
  const mostBlog = _.maxBy(countBlog, 'blogs')
  
  return mostBlog
}

const mostLikes = (blogs) => {
  const result = _.groupBy(blogs, 'author')
  console.log(result)
  const countBlog = Object.values(result).map(blog => blog.map((like) => like.likes))
  const authors = Object.keys(result)
  const totalLike = countBlog.map(like => like.reduce((total, like) => total + like))
  const index = totalLike.indexOf(Math.max(...totalLike))
  const final = {'author': authors[index], 'likes': totalLike[index]}
  console.log(final)

  return final
}


module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}
