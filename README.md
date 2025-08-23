# SMTP Helper

A simple Node.js library to help you quickly set up and test SMTP servers.

## Installation

```bash
npm install smtp-helper
```
## Features

- Simple SMTP client setup
- Send emails with minimal configuration
- Supports secure and non-secure SMTP connections

## Usage

1. Create an SMTP Client
```
const { createSMTPClient, sendEmail } = require('smtp-helper');

const client = createSMTPClient({
  host: 'smtp.example.com',
  port: 587,
  secure: false, // true for port 465, false for others
  user: 'your-email@example.com',
  pass: 'your-password', //smtp app password
});
```

2. Send an Email
```
sendEmail(client, {
  from: 'you@example.com',
  to: 'recipient@example.com',
  subject: 'Hello from SMTP Helper',
  text: 'This is a test email!',
})
.then(() => console.log('Email sent successfully'))
.catch(console.error);
```

## API Reference
**createSMTPClient(options)**<br>
Creates and returns an SMTP client.
#### Parameters:
- host (string): SMTP server hostname
- port (number): Port number
- secure (boolean): Use TLS (true for 465)
- user (string): SMTP username
- pass (string): SMTP password


**sendEmail(client, mailOptions)**<br>
Sends an email using the created client.
#### Parameters:
- from (string): Sender email address
- to (string): Recipient email address
- subject (string): Email subject
- text (string): Email body (plain text)

## Contributing
Contributions are welcome! Please open an issue or submit a pull request.
