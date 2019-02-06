import {RecorderEvent} from './$Implicit/RecorderEvent';
import {EventHandler} from '../../../$Implicit/EventHandler';

export = RecorderEvents;

declare global {
    export namespace RecorderEvents {
        export namespace Stopped {
            /**
             * Is triggered after the recording's stop.
             */
            export interface Event extends RecorderEvent {
                /**
                 * Record cost (in the account's currency: USD, EUR or
                 * RUR).
                 */
                readonly cost: string;

                /**
                 * Record duration (seconds).
                 */
                readonly duration: number;
            }

            export interface Handler extends EventHandler<Event> {}
        }
    }
}
