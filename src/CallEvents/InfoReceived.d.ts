import {SipEvent} from './Common/SipEvent';
import {EventHandler} from '../Common/EventHandler';

export = CallEvents;

declare global {
    export namespace CallEvents {
        export namespace InfoReceived {
            export interface Event extends SipEvent<'Call.InfoReceived'> {
                /**
                 * Content of the message.
                 */
                readonly body: string;

                /**
                 * MIME type of INFO message.
                 */
                readonly mimeType: string;
            }

            export interface Handler extends EventHandler<Event> {}
        }
    }
}
