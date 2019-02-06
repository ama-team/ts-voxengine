import {CallEvent} from './$Implicit/CallEvent';
import {EventHandler} from '../$Implicit/EventHandler';

export = CallEvents;

declare global {
    export namespace CallEvents {
        export namespace RecordStarted {
            export interface Event extends CallEvent<'Call.RecordStarted'> {
                /**
                 * HTTP URL of a record file.
                 */
                readonly url: string;
            }

            export interface Handler extends EventHandler<Event> {}
        }
    }
}
