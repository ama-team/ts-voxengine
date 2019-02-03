import {ASREvent} from './Common/ASREvent';
import {EventHandler} from '../../../Common/EventHandler';

export = ASREvents;

declare global {
    export namespace ASREvents {
        export namespace Stopped {
            /**
             * The event is triggered as a result of the
             * {@link ASR.stop} method call.
             */
            export interface Event extends ASREvent {
                /**
                 * Record cost (in the account's currency: USD, EUR or
                 * RUR).
                 */
                readonly cost: string;

                /**
                 * Record duration (sec).
                 */
                readonly duration: number;
            }

            export interface Handler extends EventHandler<Event> {}
        }
    }
}
