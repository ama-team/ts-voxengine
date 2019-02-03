import {SipEvent} from './Common/SipEvent';
import {EventHandler} from '../Common/EventHandler';

export = CallEvents;

declare global {
    export namespace CallEvents {
        export namespace ReInviteRejected {
            export interface Event extends SipEvent<'Call.ReInviteRejected'> {}

            export interface Handler extends EventHandler<Event> {}
        }
    }
}
