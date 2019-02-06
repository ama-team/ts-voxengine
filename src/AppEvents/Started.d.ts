import {EventHandler} from '../$Implicit/EventHandler';

export = AppEvents;

declare global {
    export namespace AppEvents {
        export namespace Started {
            export interface Event {
                /**
                 * HTTP URL that can be used to send commands to this scenario
                 * from the outer world.
                 */
                readonly accessURL: string;

                /**
                 * Unique identification number of Voximplant account. Can be
                 * used as one of the
                 * {@link https://voximplant.com/docs/references/httpapi/#how-auth-works|authentication parameters}
                 * in HTTP API methods.
                 */
                readonly accountId: number;

                /**
                 * Unique identification number of Voximplant application. Can
                 * be used in
                 * {@link https://voximplant.com/docs/references/httpapi/#toc-managing-applications|Managing Applications}
                 * methods of HTTP API
                 */
                readonly applicationId: number;

                /**
                 * Direct link to the call's log.
                 */
                readonly logURL: string;

                /**
                 * Unique identification number of JS session. Can be used in
                 * {@link https://voximplant.com/docs/references/httpapi/#toc-managing-history|Managing History}
                 * methods of HTTP API.
                 */
                readonly sessionId: string;

                /**
                 * HTTPS URL that can be used to send commands to this scenario
                 * from the outer world.
                 */
                readonly accessSecureURL: string;
            }

            export interface Handler extends EventHandler<Event> {}
        }
    }
}
