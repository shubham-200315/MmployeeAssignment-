import User from "../models/userModel.js"
import asyncHandler from "express-async-handler"
import generateToken from "../utils/generateToken.js"

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id)
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
    })
  } else {
    res.status(401)
    throw new Error(" Invalid email or password")
  }
})

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password,role } = req.body

  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error("User already Exists")
  }

  const user = await User.create({ name, email, password})

  if (user) {
    generateToken(res, user._id)
    res.status(201)
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
    })
  } else {
    res.status(400)
    throw new Error("Invalid User Credentials")
  }
})

const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find()
  res.json(users)
})

export {
  loginUser,
  registerUser,
  getUsers,
}
