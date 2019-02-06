import {ASREvent} from './$Implicit/ASREvent';
import {EventHandler} from '../../../$Implicit/EventHandler';

export = ASREvents;

declare global {
    export namespace ASREvents {
        export namespace ASRError {
            /**
             * The event is triggered in case of problems during the
             * recognition process.
             */
            export interface Event extends ASREvent {
                /**
                 * Error message.
                 */
                readonly error: string;
            }

            export interface Handler extends EventHandler<Event> {}
        }
    }
}
