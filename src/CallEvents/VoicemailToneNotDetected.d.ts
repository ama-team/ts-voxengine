import {CallEvent} from './Common/CallEvent';
import {EventHandler} from '../Common/EventHandler';

export = CallEvents;

declare global {
    export namespace CallEvents {
        export namespace VoicemailToneNotDetected {
            export interface Event extends CallEvent<'Call.VoicemailToneNotDetected'> {}

            export interface Handler extends EventHandler<Event> {}
        }
    }
}
