export const resolvedMailHTMLContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ticket Resolved, Ticket no.: {{id}}</title>
</head>
<body>
    <div class="container">
        <div class="content">
            <p>Hi {{name}},</p>
            <p>We are pleased to inform you that your ticket no. <strong>{{id}}</strong> has been successfully resolved.</p>
            <p>If you have any further questions or require additional assistance, please feel free to reply to this email or contact our support team.</p>
            <p>Thank you for your patience and for allowing us to assist you.</p>
        </div>
        <div class="footer">
            Best regards,<br>
            Robotutor Tech<br>
        </div>
    </div>
</body>
</html>
`
