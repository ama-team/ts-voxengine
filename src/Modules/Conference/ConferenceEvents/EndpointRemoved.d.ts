import {ConferenceEvent} from "./Common/ConferenceEvent";
import {EventHandler} from "../../../Common/EventHandler";

declare global {
    export namespace ConferenceEvents {
        export namespace EndpointRemoved {
            /**
             * The event is triggered when the endpoint was removed.
             */
            export interface Event extends ConferenceEvent {
                /**
                 * Possible values are: SEND | RECEIVE | BOTH. SEND
                 * provides only sending stream from endpoint to
                 * conference; RECEIVE provides only receiving stream
                 * from conference to endpoint; BOTH allows both sending
                 * and receiving.
                 */
                readonly direction: Conference.Implicit.Direction;

                /**
                 * The removed endpoint.
                 */
                readonly endpoint: Endpoint;

                /**
                 * The unique ID of endpoint.
                 */
                readonly endpointId: string;

                /**
                 * Possible values are: MIX | FORWARD. MIX mode combines
                 * all streams in one, FORWARD mode sends only one
                 * stream.
                 */
                readonly mode: Conference.Implicit.Mode;
            }

            export interface Handler extends EventHandler<Event> {}
        }
    }
}
