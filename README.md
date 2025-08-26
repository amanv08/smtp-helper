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
- Supports attachments (local files, Buffers, or URLs)

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

2. Send an Simple Email
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

3. Send an Email with Attachments
```
sendEmail(client, {
  from: 'you@example.com',
  to: 'recipient@example.com',
  subject: 'Email with Attachment',
  text: 'Please see the attached file.',
  attachments: [
    {
      filename: 'test.txt',
      path: './test.txt', // local file path
    },
    {
      filename: 'image.jpg',
      path: 'https://example.com/image.jpg', // remote URL
    },
    {
      filename: 'notes.txt',
      content: 'This is a string-based file attachment.', // string or Buffer
    }
  ],
})
.then(() => console.log('Email with attachment sent successfully'))
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
- html (string, optional): Email body (HTML)
- attachments (array, optional): List of attachments
  - filename (string): Name of the file
  - path (string, optional): Local file path or remote URL
  - content (Buffer | string, optional): File content directly
  - contentType (string, optional): MIME type

## Contributing
Contributions are welcome! Please open an issue or submit a pull request.
