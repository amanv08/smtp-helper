import nodemailer, { Transporter } from "nodemailer";
import { providers, Provider } from "./providers";

export interface SMTPConfig {
  host?: string;
  port?: number;
  secure?: boolean;
  user: string;
  pass: string;
  from?: string; // optional default from address
}

export function createSMTPClient(config: SMTPConfig | Provider & { user: string; pass: string }): Transporter {
  let finalConfig: SMTPConfig;

  if (typeof config === "string") {
    const providerConfig = providers[config as Provider];
    if (!providerConfig) throw new Error("Unknown provider");
    finalConfig = { ...providerConfig, user: "", pass: "" }; // user/pass must be set
  } else {
    finalConfig = config;
  }

  if (!finalConfig.user || !finalConfig.pass) {
    throw new Error("SMTP credentials are required");
  }

  return nodemailer.createTransport({
    host: finalConfig.host,
    port: finalConfig.port,
    secure: finalConfig.secure,
    auth: {
      user: finalConfig.user,
      pass: finalConfig.pass
    }
  });
}

export async function sendEmail(
  client: Transporter,
  options: { from: string; to: string; subject?: string; text?: string; html?: string }
) {
  return client.sendMail(options);
}
