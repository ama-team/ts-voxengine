import {RecorderEvent} from './$Implicit/RecorderEvent';
import {EventHandler} from '../../../$Implicit/EventHandler';

export = RecorderEvents;

declare global {
    export namespace RecorderEvents {
        export namespace RecorderError {
            /**
             * Is triggered in case of problems during the recording process.
             */
            export interface Event extends RecorderEvent {
                /**
                 * Error message.
                 */
                readonly error: string;
            }

            export interface Handler extends EventHandler<Event> {}
        }
    }
}
