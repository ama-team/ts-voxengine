import {EventHandler} from '../Common/EventHandler';

export = AppEvents;

declare global {
    export namespace AppEvents {
        export namespace HttpRequest {
            export interface Event {
                /**
                 * HTTP request content.
                 *
                 * @example `'{"param1": "value1", "param2": "value2"}'`
                 */
                readonly content: string;
                /**
                 * HTTP request method.
                 *
                 * @example `'POST'`
                 */
                readonly method: string;
                /**
                 * HTTP path requested (without domain name).
                 *
                 * @example `'/request/1d61f27ba2faad53.1500645140.80028_185.164.148.244/eb4b0539b13e2401'`
                 */
                readonly path: string;
            }

            export interface Handler extends EventHandler<Event> {}
        }
    }
}
