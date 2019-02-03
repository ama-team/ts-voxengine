import {CallEvent} from './Common/CallEvent';
import {EventHandler} from '../Common/EventHandler';

export = CallEvents;

declare global {
    export namespace CallEvents {
        export namespace Connected {
            /**
             * Event is triggered after an incoming/outgoing call is connected.
             * For incoming call, it happens after the {@link Call.answer} was
             * called. For outgoing call, it happens when a remote peer answers
             * the call.
             */
            export interface Event extends CallEvent<'Call.Connected'> {
                /**
                 * Optional: custom data that was passed from client with call
                 * accept command.
                 */
                readonly customData?: string;
            }

            export interface Handler extends EventHandler<Event> {}
        }
    }
}
