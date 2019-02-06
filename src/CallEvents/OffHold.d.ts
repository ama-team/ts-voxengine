import {CallEvent} from './$Implicit/CallEvent';
import {EventHandler} from '../$Implicit/EventHandler';

export = CallEvents;

declare global {
    export namespace CallEvents {
        export namespace OffHold {
            export interface Event extends CallEvent<'Call.OffHold'> {}

            export interface Handler extends EventHandler<Event> {}
        }
    }
}
