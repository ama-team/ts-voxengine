import {ConferenceEvent} from "./Common/ConferenceEvent";
import {EventHandler} from "../../../Common/EventHandler";

declare global {
    export namespace ConferenceEvents {
        export namespace Stopped {
            /**
             * The event is triggered when the conference was stopped.
             * I.e., the call of {@link Conference.stop} triggers the event.
             */
            export interface Event extends ConferenceEvent {
                /**
                 * Conference cost.
                 */
                readonly cost: string;

                /**
                 * Conference duration.
                 */
                readonly duration: string;
            }

            export interface Handler extends EventHandler<Event> {}
        }
    }
}
