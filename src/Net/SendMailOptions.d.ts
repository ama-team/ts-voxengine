export = Net;

declare global {
    export namespace Net {
        /**
         * Advanced options for sendMail method.
         */
        export interface SendMailOptions {
            /**
             * CC addresses.
             */
            cc?: string | string[];

            /**
             * BCC addresses.
             */
            bcc?: string | string[];

            /**
             * Alternative HTML body.
             */
            html?: string;

            /**
             * Login for mail server.
             */
            login?: string;

            /**
             * Password for mail server.
             */
            password?: string;

            /**
             * Mail server port.
             */
            port?: number;
        }
    }
}
