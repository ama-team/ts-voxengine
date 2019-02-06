import {CallEvent} from './$Implicit/CallEvent';
import {EventHandler} from '../$Implicit/EventHandler';

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
