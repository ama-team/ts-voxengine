import {CallEvent} from './$Implicit/CallEvent';
import {EventHandler} from '../$Implicit/EventHandler';

export = CallEvents;

declare global {
    export namespace CallEvents {
        export namespace TransferComplete {
            export interface Event extends CallEvent<'Call.TransferComplete'> {}

            export interface Handler extends EventHandler<Event> {}
        }
    }
}
