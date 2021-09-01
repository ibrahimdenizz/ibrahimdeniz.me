const nodemailer = require('nodemailer')

const router = require('express').Router()

const { CONTACT_FROM_MAIL, CONTACT_TO_MAIL, CONTACT_PASS } = process.env

router.post('/send-message', async (req, res) => {
  const transporter = nodemailer.createTransport({
    service: 'outlook',
    auth: {
      user: CONTACT_FROM_MAIL,
      pass: CONTACT_PASS,
    },
  })

  const mailOptions = {
    from: CONTACT_FROM_MAIL,
    to: CONTACT_TO_MAIL,
    subject: `Message From ${req.body.email} : ABOUT ${req.body.subject}`,
    text: `Who: ${req.body.fullName}\n\n${req.body.message}`,
  }
  try {
    await transporter.sendMail(mailOptions)
    res
      .status(200)
      .send({ path: 'success', message: 'Mail is sent successfully' })
  } catch (err) {
    res.status(500).send({ path: 'top', message: 'Something goes wrong' })
  }
})

module.exports = router
