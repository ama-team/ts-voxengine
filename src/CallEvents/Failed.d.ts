import {SipEvent} from './Common/SipEvent';
import {EventHandler} from '../Common/EventHandler';

export = CallEvents;

declare global {
    export namespace CallEvents {
        export namespace Failed {
            export interface Event extends SipEvent<'Call.Failed'> {
                /**
                 * Status code of the call (i.e., 486).
                 */
                readonly code: number;

                /**
                 * Status message of call failure (i.e., Busy Here).
                 */
                readonly reason: string;
            }

            export interface Handler extends EventHandler<Event> {}
        }
    }
}
