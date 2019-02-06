import {EventHandler} from '../$Implicit/EventHandler';
import {NamedEvent} from './$Implicit/NamedEvent';

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
