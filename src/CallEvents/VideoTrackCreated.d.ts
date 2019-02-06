import {CallEvent} from './$Implicit/CallEvent';
import {EventHandler} from '../$Implicit/EventHandler';

export = CallEvents;

declare global {
    export namespace CallEvents {
        export namespace VideoTrackCreated {
            /**
             * Event is triggered when call transfer complete.
             */
            export interface Event extends CallEvent<'Call.VideoTrackCreated'> {}

            export interface Handler extends EventHandler<Event> {}
        }
    }
}
