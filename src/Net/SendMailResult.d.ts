export = Net;

declare global {
    export namespace Net {
        /**
         * Result of sending e-mail message
         */
        export interface SendMailResult {
            /**
             * SMTP server response code.
             */
            readonly code: number;

            /**
             * Optional SMTP server error message.
             */
            readonly error?: string;
        }
    }
}
