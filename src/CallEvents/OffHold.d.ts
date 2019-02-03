import {CallEvent} from './Common/CallEvent';
import {EventHandler} from '../Common/EventHandler';

export = CallEvents;

declare global {
    export namespace CallEvents {
        export namespace OffHold {
            export interface Event extends CallEvent<'Call.OffHold'> {}

            export interface Handler extends EventHandler<Event> {}
        }
    }
}
