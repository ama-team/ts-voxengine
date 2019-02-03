import {ACDRequestEvent} from './Common/ACDRequestEvent';
import {EventHandler} from '../../../Common/EventHandler';

export = ACDEvents;

declare global {
    export namespace ACDEvents {
        export namespace OperatorFailed {
            /**
             * The event is triggered when an ACD request tries to reach
             * an operator, but the operator declines the call.
             * IMPORTANT NOTE: This is just a notification, the request
             * processing won't stop. The ACD request will be
             * automatically redirected to the next free operator.
             */
            export interface Event extends ACDRequestEvent {
                /**
                 * Username of failed operator.
                 */
                readonly operatorUserName: string;
                /**
                 * Call status code.
                 */
                readonly statusCode: number;
            }

            export interface Handler extends EventHandler<Event> {}
        }
    }
}
