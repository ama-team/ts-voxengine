import {CallEvent} from './Common/CallEvent';
import {EventHandler} from '../Common/EventHandler';

export = CallEvents;

declare global {
    export namespace CallEvents {
        export namespace MessageReceived {
            export interface Event extends CallEvent<'Call.MessageReceived'> {
                /**
                 * Content of the message.
                 */
                readonly text: string;
            }

            export interface Handler extends EventHandler<Event> {}
        }
    }
}
