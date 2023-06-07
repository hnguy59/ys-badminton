import sendgrid from '@sendgrid/mail'
import { siteMetadata } from '~/data/siteMetadata'

sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

async function sendEmail(req, res) {
  try {
    // console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: siteMetadata.email, // Your email where you'll receive emails
      from: siteMetadata.email, // your website email address here
      subject: `${req.body.subject}`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">
      
        <title>The HTML5 Herald</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      
        <link rel="stylesheet" href="css/styles.css?v=1.0">
      
      </head>
      
      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
        </div>
        <div class="container" style="margin-left: 20px;margin-right: 20px;">
          <h3>YS Badminton Join the team Form</h3>
          <div style="font-size: 16px;">
            <p>Name: ${req.body.firstName} ${req.body.lastName}</p>
            <p>Email: ${req.body.email}</p>
            <p>Phone: ${req.body.phoneNumber}</p>
            <p>Message: ${req.body.message}</p>
            <br>
          </div>
        </div>
      </body>
      </html>`,
    })
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message })
  }

  return res.status(200).json({ error: '' })
}

export default sendEmail
