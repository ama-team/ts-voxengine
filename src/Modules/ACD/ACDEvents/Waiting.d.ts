import {ACDRequestEvent} from './$Implicit/ACDRequestEvent';
import {EventHandler} from '../../../$Implicit/EventHandler';

export = ACDEvents;

declare global {
    export namespace ACDEvents {
        export namespace Waiting {
            /**
             * The event is triggered as a result of the
             * {@link ACDRequest.getStatus()} method call.
             */
            export interface Event extends ACDRequestEvent {
                /**
                 * Estimated wait time in minutes (value of 0 is also
                 * possible).
                 */
                readonly ewt: number;
            }

            export interface Handler extends EventHandler<Event> {}
        }
    }
}
