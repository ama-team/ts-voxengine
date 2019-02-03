import {CallEvent} from './Common/CallEvent';
import {EventHandler} from '../Common/EventHandler';

declare global {
    export namespace CallEvents {
        export namespace OnHold {
            export interface Event extends CallEvent<'Call.OnHold'> {}

            export interface Handler extends EventHandler<Event> {}
        }
    }
}
