import {EventHandler} from '../Common/EventHandler';
import {NamedEvent} from './Common/NamedEvent';

export = CallEvents;

declare global {
    export namespace CallEvents {
        export namespace RecordError {
            export interface Event extends NamedEvent<'Call.RecordError'> {
                /**
                 * Error message.
                 */
                readonly error: string;
            }

            export interface Handler extends EventHandler<Event> {}
        }
    }
}
