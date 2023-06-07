import twilio from 'twilio'

async function sendSMS(req, res) {
  const accountSid = process.env.TWILIO_ACCOUNT_SID
  const token = process.env.TWILIO_AUTH_TOKEN
  const client = twilio(accountSid, token)
  const { message } = req.body

  client.messages
    .create({
      body: message,
      from: '+13613458966',
      to: '+61452298126',
    })
    .then((message) =>
      res.json({
        success: true,
      })
    )
    .catch((error) => {
      console.log(error)
      res.json({
        success: false,
      })
    })
}

export default sendSMS
