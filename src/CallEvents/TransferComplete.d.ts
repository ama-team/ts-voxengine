import {CallEvent} from './Common/CallEvent';
import {EventHandler} from '../Common/EventHandler';

export = CallEvents;

declare global {
    export namespace CallEvents {
        export namespace TransferComplete {
            export interface Event extends CallEvent<'Call.TransferComplete'> {}

            export interface Handler extends EventHandler<Event> {}
        }
    }
}
