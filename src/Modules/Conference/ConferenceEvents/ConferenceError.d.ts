import {ConferenceEvent} from "./$Implicit/ConferenceEvent";
import {EventHandler} from "../../../$Implicit/EventHandler";

export = ConferenceEvents;

declare global {
    export namespace ConferenceEvents {
        export namespace ConferenceError {
            /**
             * The event is triggered in case of problems in the conference. Error codes:
             * 100: You have reached the maximum limit of endpoints in the conference
             * 101: Endpoint with this id already exists
             * 102: Attempt to enable FORWARD mode in two cases:
             * 1) without checked “video conference” option in the rule
             * 2) for Local conference
             * 103: Attempt to turn on video in two cases:
             * 1) without checked “video conference” option in the rule
             * 2) for Local conference
             */
            export interface Event extends ConferenceEvent {
                /**
                 * Error code.
                 */
                readonly code: 100 | 101 | 102 | 103;

                /**
                 * Id of a endpoint who caused the error.
                 */
                readonly endpointId: string;

                /**
                 * Error description.
                 */
                readonly error: string;
            }

            export interface Handler extends EventHandler<Event> {}
        }
    }
}
