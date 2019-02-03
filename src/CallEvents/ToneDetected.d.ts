import {CallEvent} from './Common/CallEvent';
import {EventHandler} from '../Common/EventHandler';

export = CallEvents;

declare global {
    export namespace CallEvents {
        export namespace ToneDetected {
            export interface Event extends CallEvent<'Call.ToneDetected'> {
                /**
                 * If set to true, the detected tone is a voicemail tone.
                 */
                readonly VoicemailTone: boolean;
                /**
                 * If set to true, the detected tone is a progress tone.
                 */
                readonly ProgressTone: boolean;
            }

            export interface Handler extends EventHandler<Event> {}
        }
    }
}
