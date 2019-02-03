import {CallEvent} from './Common/CallEvent';
import {EventHandler} from '../Common/EventHandler';

export = CallEvents;

declare global {
    export namespace CallEvents {
        export namespace PlaybackFinished {
            export interface Event extends CallEvent<'Call.PlaybackFinished'> {
                /**
                 * Error that occured during the playback.
                 */
                readonly error?: string;
            }

            export interface Handler extends EventHandler<Event> {}
        }

    }
}
