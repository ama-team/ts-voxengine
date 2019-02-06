export = Net;

declare global {
    export namespace Net {
        namespace $Implicit {
            interface HttpHeader {
                readonly key: string;
                readonly value: string;
            }
        }

        /**
         * HTTP response.
         */
        export interface HttpRequestResult {
            /**
             * Response code. HTTP code (2xx-5xx) or one of our internal status
             * codes:
             *
             * - 0: {@link https://voximplant.com/docs/references/appengine/|VoxEngine limits}
             * were violated (e.g. HTTP request count exceeded).
             * - -1: Unknown error.
             * - -2: Malformed URL.
             * - -3: Host not found.
             * - -4: Connection error
             * - -5: Too many redirects
             * - -6: Network error
             * - -7: Timeout
             * - -8: Internal error
             */
            readonly code: number;

            /**
             * If Net.HttpRequestOptions.rawOutput is true, the data will
             * contain a list of 1-byte numbers corresponding to HTTP response
             * data. If Net.HttpRequestOptions.rawOutput is false, the data
             * will be undefined.
             */
            readonly data: number[] | undefined;

            /**
             * In case of an error contains the error description.
             */
            readonly error: string;

            /**
             * List of dictionaries with key and value fields representing HTTP
             * headers returned by the remote server.
             */
            readonly headers: $Implicit.HttpHeader[];

            /**
             * HTTP headers string returned by the remote server, without
             * processing.
             */
            readonly raw_headers: string[];

            /**
             * HTTP response body if Content-Type is not binary.
             */
            readonly text: string;
        }
    }
}
