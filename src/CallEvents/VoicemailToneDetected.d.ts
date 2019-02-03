import {CallEvent} from './Common/CallEvent';
import {EventHandler} from '../Common/EventHandler';

export = CallEvents;

declare global {
    export namespace CallEvents {
        export namespace VoicemailToneDetected {
            export interface Event extends CallEvent<'Call.VoicemailToneDetected'> {
                /**
                 * Tone frequency.
                 */
                readonly frequency: number;
            }

            export interface Handler extends EventHandler<Event> {}
        }
    }
}
