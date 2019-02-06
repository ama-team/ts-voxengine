import {SipEvent} from './$Implicit/SipEvent';
import {EventHandler} from '../$Implicit/EventHandler';

export = CallEvents;

declare global {
    export namespace CallEvents {
        export namespace Disconnected {
            /**
             * Event is triggered when an established call was terminated. Note
             * that this event doesn't mean the end of the JavaScript session.
             * The session without calls and/or ACD requests will be
             * automatically terminated after some time (see the
             * {@link https://voximplant.com/docs/references/voxengine|session limits}
             * for details). It's a good idea to explicitly terminate the
             * session with {@link VoxEngine.terminate} after it's no longer
             * needed.
             */
            export interface Event extends SipEvent<'Call.Disconnected'> {
                /**
                 * Call cost in account currency
                 */
                readonly cost: number;

                /**
                 * Total call duration in seconds.
                 */
                readonly duration: number;
            }

            export interface Handler extends EventHandler<Event> {}
        }
    }
}
