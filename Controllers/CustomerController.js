// const User = require('../Models/Blog');
const Category = require('../Models/CustomerModel')
const { v4: uuid } = require('uuid')
const nodemailer = require('nodemailer')

// forgot password
exports.CreateForm = async (req, res) => {
	try {
		// HTML Message
		const message = `
    Hi, I'm ${req.body.fname} ${req.body.lname} and I am ${req.body?.whoAmI}.
    
    Contact: ${req.body.phone}
    Company: ${req.body.company}
    
    Message: ${req.body.message}
`

		var transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: 'aallahu563@gmail.com',
				pass: 'pspk bsyv ywlp taar'
			}
		})

		var mailOptions = {
			from: 'aallahu563@gmail.com',
			to: 'rifkhanmuhammed17@gmail.com',
			subject: 'Information request form',
			text: message
		}

		transporter.sendMail(mailOptions, function (error, info) {
			if (error) {
				console.log(error)
				res.status(400).send({ message: 'Email not sent', success: false })
			} else {
				console.log('Email sent: ' + info.response)
				res.status(200).send({ message: 'Email sent', success: true })
			}
		})
	} catch (error) {
		res
			.status(500)
			.json({ message: 'Something went wrong', error: error.message })
	}
}
