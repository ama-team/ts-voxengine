import {SipEvent} from './$Implicit/SipEvent';
import {EventHandler} from '../$Implicit/EventHandler';

export = CallEvents;

declare global {
    export namespace CallEvents {
        export namespace ReInviteReceived {
            export interface Event extends SipEvent<'Call.ReInviteReceived'> {
                /**
                 * Content of the message.
                 */
                readonly body: string;

                /**
                 * MIME type of body data "application/sdp" or "application/json".
                 */
                readonly mimeType: 'application/sdp' | 'application/json';
            }

            export interface Handler extends EventHandler<Event> {}
        }
    }
}
