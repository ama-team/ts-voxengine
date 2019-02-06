import {SipEvent} from './$Implicit/SipEvent';
import {EventHandler} from '../$Implicit/EventHandler';

export = CallEvents;

declare global {
    export namespace CallEvents {
        export namespace ReInviteRejected {
            export interface Event extends SipEvent<'Call.ReInviteRejected'> {}

            export interface Handler extends EventHandler<Event> {}
        }
    }
}
