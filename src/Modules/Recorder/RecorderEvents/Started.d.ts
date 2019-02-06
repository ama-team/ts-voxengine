import {RecorderEvent} from './$Implicit/RecorderEvent';
import {EventHandler} from '../../../$Implicit/EventHandler';

export = RecorderEvents;

declare global {
    export namespace RecorderEvents {
        export namespace Started {
            /**
             * Is triggered after the recording's start.
             */
            export interface Event extends RecorderEvent {
                /**
                 * Record URL.
                 */
                readonly url: string;
            }

            export interface Handler extends EventHandler<Event> {}
        }
    }
}
