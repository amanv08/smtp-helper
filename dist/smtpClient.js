"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSMTPClient = createSMTPClient;
exports.sendTestEmail = sendTestEmail;
const nodemailer_1 = __importDefault(require("nodemailer"));
const providers_1 = require("./providers");
function createSMTPClient(config) {
    let finalConfig;
    if (typeof config === "string") {
        const providerConfig = providers_1.providers[config];
        if (!providerConfig)
            throw new Error("Unknown provider");
        finalConfig = { ...providerConfig, user: "", pass: "" }; // user/pass must be set
    }
    else {
        finalConfig = config;
    }
    if (!finalConfig.user || !finalConfig.pass) {
        throw new Error("SMTP credentials are required");
    }
    return nodemailer_1.default.createTransport({
        host: finalConfig.host,
        port: finalConfig.port,
        secure: finalConfig.secure,
        auth: {
            user: finalConfig.user,
            pass: finalConfig.pass
        }
    });
}
async function sendTestEmail(client, options) {
    return client.sendMail(options);
}
