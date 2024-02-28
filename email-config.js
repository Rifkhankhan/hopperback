const nodemailer = require('nodemailer')

var transport = nodemailer.createTransport({
	host: 'sandbox.smtp.mailtrap.io',
	port: 2525,
	auth: {
		user: 'aallahu563@gmail.com',
		pass: 'allahuakbar123'
	}
})
module.exports = transport
