import {CallEvent} from './$Implicit/CallEvent';
import {EventHandler} from '../$Implicit/EventHandler';

export = CallEvents;

declare global {
    export namespace CallEvents {
        export namespace Statistics {
            /**
             * @deprecated
             */
            export interface Event extends CallEvent<'Call.Statistics'> {}

            export interface Handler extends EventHandler<Event> {}
        }
    }
}
