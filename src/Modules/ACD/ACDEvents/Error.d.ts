import {ACDRequestEvent} from './Common/ACDRequestEvent';
import {EventHandler} from '../../../Common/EventHandler';

export = ACDEvents;

declare global {
    export namespace ACDEvents {
        export const Error: Error;

        export type Error = 'ACDEvents.Error';

        export namespace Error {
            /**
             * The event is triggered if ACD service returns an internal
             * error. The JS scenarios are not able to cause the
             * internal errors because these errors depend on internal
             * and network issues.
             */
            export interface Event extends ACDRequestEvent {
                /**
                 * Error message.
                 */
                readonly error: string;
            }

            export interface Handler extends EventHandler<Event> {}
        }
    }
}
