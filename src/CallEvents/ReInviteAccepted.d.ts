import {SipEvent} from './Common/SipEvent';
import {EventHandler} from '../Common/EventHandler';

export = CallEvents;

declare global {
    export namespace CallEvents {
        export namespace ReInviteAccepted {
            export interface Event extends SipEvent<'Call.ReInviteAccepted'> {
                /**
                 * Content of the message.
                 */
                readonly body: string;

                /**
                 * MIME type of body data, "application/sdp" or "application/json".
                 */
                readonly mimeType: 'application/sdp' | 'application/json';
            }

            export interface Handler extends EventHandler<Event> {}
        }
    }
}
