import {SipEvent} from './Common/SipEvent';
import {EventHandler} from '../Common/EventHandler';

export = CallEvents;

declare global {
    export namespace CallEvents {
        export namespace Ringing {
            export interface Event extends SipEvent<'Call.Ringing'> {}

            export interface Callback extends EventHandler<Event> {}
        }
    }
}
