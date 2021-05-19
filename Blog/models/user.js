const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minLength: 3,
    unique: true
  },
  name: String,
  passwordHash: {
    type: String,
    required: true,
    minLength: 3
  },
  blogs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Blog'
    }
  ]
})

userSchema.plugin(uniqueValidator)

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    delete returnedObject.passwordHash
  }
})

userSchema.methods.getToken = function() {
  const userForToken = {
    username: this.username,
    id: this._id
  }

  const token = jwt.sign(userForToken, process.env.SECRET)
  return token
}

const User = mongoose.model('User', userSchema)

module.exports = User