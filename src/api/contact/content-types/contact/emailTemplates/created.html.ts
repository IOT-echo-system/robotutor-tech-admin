export const createdMailHTMLContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Contacting Robotutor Tech! Ticket no.: {{id}}</title>
</head>
<body>
<div class="container">
  <div class="content">
    <p>Hi {{name}},</p>
    <p>Thank you for reaching out to us. We have received your inquiry and our team will review
      it shortly.</p>
    <p>For your reference, here is your Ticket no.: <strong>{{id}}</strong></p>
    <p>We appreciate your interest and will do our best to respond to your inquiry within 48 hours.</p>

    <div style="padding: 8px 32px">
        <p>Full name: <strong>{{name}}</strong></p>
        <p>Phone: <strong>{{phone}}</strong></p>
        <p>Subject: <strong>{{subject}}</strong></p>
        <p>Message: <strong>{{message}}</strong></p>
    </div>

    <p>If you have any additional information or questions, please don't hesitate to reply to this email.</p>
  </div>
  <div class="footer">
    Best regards,<br>
    Robotutor Tech<br>
  </div>
</div>
</body>
</html>`
