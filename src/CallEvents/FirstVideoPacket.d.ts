import {CallEvent} from './$Implicit/CallEvent';
import {EventHandler} from '../$Implicit/EventHandler';

declare global {
    export namespace CallEvents {
        export namespace FirstVideoPacket {
            export interface Event extends CallEvent<'Call.FirstVideoPacket'> {
                /**
                 * Record URL.
                 */
                readonly url: string;
            }

            export interface Handler extends EventHandler<Event> {}
        }
    }
}
