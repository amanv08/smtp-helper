export declare const providers: {
    gmail: {
        host: string;
        port: number;
        secure: boolean;
    };
    outlook: {
        host: string;
        port: number;
        secure: boolean;
    };
    yahoo: {
        host: string;
        port: number;
        secure: boolean;
    };
};
export type Provider = keyof typeof providers;
