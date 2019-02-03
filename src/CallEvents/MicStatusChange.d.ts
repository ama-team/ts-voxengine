import {CallEvent} from './Common/CallEvent';
import {EventHandler} from '../Common/EventHandler';

export = CallEvents;

declare global {
    export namespace CallEvents {
        export namespace MicStatusChange {
            export interface Event extends CallEvent<'Call.MicStatusChange'> {
                /**
                 * Activity flag.
                 */
                readonly active: boolean;
            }

            export interface Handler extends EventHandler<Event> {}
        }
    }
}
