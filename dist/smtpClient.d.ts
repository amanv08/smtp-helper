import { Transporter } from "nodemailer";
import { Provider } from "./providers";
export interface SMTPConfig {
    host?: string;
    port?: number;
    secure?: boolean;
    user: string;
    pass: string;
    from?: string;
}
export declare function createSMTPClient(config: SMTPConfig | Provider & {
    user: string;
    pass: string;
}): Transporter;
export declare function sendTestEmail(client: Transporter, options: {
    from: string;
    to: string;
    subject?: string;
    text?: string;
    html?: string;
}): Promise<any>;
