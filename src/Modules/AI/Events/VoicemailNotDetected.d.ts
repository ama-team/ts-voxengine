import {EventHandler} from '../../../Common/EventHandler';

declare global {
    export namespace AI {
        export namespace Events {
            export namespace VoicemailNotDetected {
                /**
                 * Event is triggered when an answering machine or
                 * voicemail is not detected.
                 */
                export interface Event {
                    /**
                     * Call that triggered the event
                     */
                    readonly call: Call;
                }

                export interface Handler extends EventHandler<Event> {}
            }
        }
    }
}
