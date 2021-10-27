const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const argon2 = require('argon2')
const jwt = require('jsonwebtoken')
const User = require('../models/user.js')

const secret = 'test'
exports.login = async (req, res) => {
    const { email, password } = req.body
    try {
        const existingUser = await User.findOne({ email: email })
        if (!existingUser) {
            return res.status(404).json({ message: 'User does not exist' })
        }
        const isPasswordMatch = await argon2.verify(
            existingUser.password,
            password
        )
        if (!isPasswordMatch) {
            return res.status(400).json({ message: 'Password not correct' })
        }

        const token = jwt.sign(
            { email: existingUser.email, userId: existingUser._id },
            secret,
            { expiresIn: '2d' }
        )
        res.status(200).json({
            success: true,
            message: 'User logged in successfully',
            result: existingUser,
            token: token,
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
        })
    }
}

exports.signup = async (req, res) => {
    const { email, password, firstName, lastName } = req.body
    try {
        const existingUser = await User.findOne({ email: email })
        if (existingUser) {
            return res.status(400).json({ message: 'User already exist.' })
        }
        const hashedPassword = await argon2.hash(password)
        const result = await User.create({
            email: email,
            password: hashedPassword,
            name: `${firstName} ${lastName}`,
        })

        const token = jwt.sign(
            { email: result.email, userId: result._id },
            secret,
            { expiresIn: '2 days' }
        )

        res.status(201).json({
            success: true,
            message: 'User created successfully',
            result: result,
            token: token,
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
        })
    }
}
