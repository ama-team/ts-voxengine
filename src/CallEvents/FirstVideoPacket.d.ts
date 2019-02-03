import {CallEvent} from './Common/CallEvent';
import {EventHandler} from '../Common/EventHandler';

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
