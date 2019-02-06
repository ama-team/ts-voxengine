import {CallEvent} from './$Implicit/CallEvent';
import {EventHandler} from '../$Implicit/EventHandler';

export = CallEvents;

declare global {
    export namespace CallEvents {
        export namespace ToneReceived {
            export interface Event extends CallEvent<'Call.ToneReceived'> {
                /**
                 * Tone received in this event: 0-9,*,# are possible values.
                 */
                readonly tone: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '*' | '#';
            }

            export interface Handler extends EventHandler<Event> {}
        }
    }
}
