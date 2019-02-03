import './Net/HttpRequestResult';
import './Net/HttpRequestOptions';
import './Net/SendMailResult';
import './Net/SendMailOptions';

declare global {
    export namespace Net {
        interface HttpRequestCallback {
            (result: HttpRequestResult): void;
        }

        /**
         * Performs a regular HTTP request. GET is the default request
         * method. See {@link https://voximplant.com/docs/references/voxengine|VoxEngine Reference}
         * for the limits. TCP connect timeout is 6 seconds and total
         * request timeout is 90 seconds.
         *
         * @param url HTTP url to query.
         * @param callback Function to be called on completion. The
         * function receives a response object of type
         * {@link HttpRequestResult} as a first argument.
         * @param options Advanced settings.
         */
        export function httpRequest(url: string, callback?: HttpRequestCallback, options?: HttpRequestOptions): void;

        /**
         * Performs an asynchronous HTTP request, i.e., the method returns
         * a Promise which resolves with a {@link HttpRequestResult}
         * object. GET is the default request method. See
         * {@link https://voximplant.com/docs/references/voxengine||VoxEngine Reference}
         * for the limits. TCP connect timeout is 6 seconds and total
         * request timeout is 90 seconds.
         *
         * @param url HTTP url to query.
         * @param options Advanced settings.
         */
        export function httpRequestAsync(url: string, options?: HttpRequestOptions): Promise<HttpRequestResult>;

        interface MailSendCallback {
            (result: SendMailResult): void;
        }

        /**
         * Send e-mail using specified e-mail server.
         *
         * @param mailServerAddress Address of mail server to use.
         * @param from From address of e-mail message.
         * @param to To address or list of those.
         * @param title Message title.
         * @param body Message body.
         * @param callback Function to be called on completion.
         * @param options Advanced settings.
         */
        export function sendMail(
            mailServerAddress: string,
            from: string,
            to: string,
            title: string,
            body: string,
            callback: MailSendCallback,
            options: SendMailOptions
        ): void;

        /**
         * Send e-mail using specified e-mail server.
         *
         * @param mailServerAddress Address of mail server to use.
         * @param from From address of e-mail message.
         * @param to To address or list of those.
         * @param title Message title.
         * @param body Message body.
         * @param options Advanced settings.
         */
        export function sendMailAsync(
            mailServerAddress: string,
            from: string,
            to: string | string[],
            title: string,
            body: string,
            options: SendMailOptions
        ): Promise<SendMailResult>;
    }
}
