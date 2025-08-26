import { Transporter } from "nodemailer";

export interface EmailOptions {
  from?: string;
  to: string;
  subject?: string;
  text?: string;
  html?: string;
  attachments?: Array<{
    filename: string;
    path?: string;      // file path
    content?: any;      // Buffer or string
    contentType?: string;
  }>;
}

export async function sendEmail(client: Transporter, options: EmailOptions) {
  return client.sendMail(options);
}