import {CallEvent} from './$Implicit/CallEvent';
import {EventHandler} from '../$Implicit/EventHandler';

export = CallEvents;

declare global {
    export namespace CallEvents {
        export namespace VoicemailToneNotDetected {
            export interface Event extends CallEvent<'Call.VoicemailToneNotDetected'> {}

            export interface Handler extends EventHandler<Event> {}
        }
    }
}
