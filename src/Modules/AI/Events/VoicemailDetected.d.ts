import {EventHandler} from '../../../Common/EventHandler';

declare global {
    export namespace AI {
        export namespace Events {
            export namespace VoicemailDetected {
                /**
                 * Event is triggered when an answering machine or
                 * voicemail is detected.
                 */
                export interface Event {
                    /**
                     * Call that triggered the event
                     */
                    readonly call: Call;
                    /**
                     * Recognition confidence. Values range from 0
                     * (completely uncertain) to 100 (completely
                     * certain). The value is not guaranteed to be
                     * accurate, consider it while handling the event.
                     */
                    readonly confidence: number;
                }

                export interface Handler extends EventHandler<Event> {}
            }
        }
    }
}
