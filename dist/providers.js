"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.providers = void 0;
exports.providers = {
    gmail: { host: "smtp.gmail.com", port: 587, secure: false },
    outlook: { host: "smtp.office365.com", port: 587, secure: false },
    yahoo: { host: "smtp.mail.yahoo.com", port: 465, secure: true }
};
