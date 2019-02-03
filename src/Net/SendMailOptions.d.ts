export = Net;

declare global {
    export namespace Net {
        /**
         * Advanced options for sendMail method.
         */
        export class SendMailOptions {
            /**
             * CC addresses.
             */
            public cc: string | string[];

            /**
             * BCC addresses.
             */
            public bcc: string | string[];

            /**
             * Alternative HTML body.
             */
            public html: string;

            /**
             * Login for mail server.
             */
            public login: string;

            /**
             * Password for mail server.
             */
            public password: string;

            /**
             * Mail server port.
             */
            public port: number;
        }
    }
}
