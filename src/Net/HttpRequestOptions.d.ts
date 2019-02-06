export = Net;

declare global {
    export namespace Net {
        /**
         * Advanced HTTP request options.
         */
        export interface HttpRequestOptions {
            /**
             * Additional Request headers. For example:
             *
             * ```
             * "Content-Type: application/json;charset=utf-8", "X-some-key: 123"
             * ```
             *
             * It is recommended to begin custom header names with the 'X-'
             * prefix.
             */
            headers?: string[];

            /**
             * HTTP request method name as a string: 'GET', 'POST' etc. It is
             * 'GET' by default.
             */
            method?: string;

            /**
             * Optional request parameters. They can be specified in URL itself
             * as well.
             */
            params?: { [index: string]: string };

            /**
             * If 'method' is set to 'POST', 'PUT' or 'PATCH', specifies a raw
             * utf-8 encoded data string that will be sent as the HTTP request
             * body.
             */
            postData?: string;

            /**
             * If it's true, Net.HttpRequestResult.data will contain a list of
             * 1-byte numbers corresponding to HTTP response data. If it's
             * false, Net.HttpRequestResult.data will be undefined.
             */
            rawOutput?: boolean;

            /**
             * If set, overrides default HTTP request timeout, in seconds,
             * which is 90 seconds by default. Timeout can only be decreased.
             */
            timeout?: number;
        }
    }
}
