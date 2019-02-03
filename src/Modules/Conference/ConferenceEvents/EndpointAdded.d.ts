import {ConferenceEvent} from "./Common/ConferenceEvent";
import {EventHandler} from "../../../Common/EventHandler";

export = ConferenceEvents;

declare global {
    export namespace ConferenceEvents {
        export namespace EndpointAdded {
            /**
             * The event is triggered when the endpoint was added.
             */
            export interface Event extends ConferenceEvent {
                /**
                 * The added endpoint.
                 */
                readonly endpoint: Endpoint;

                /**
                 * The unique ID of endpoint.
                 */
                readonly endpointId: string;
            }

            export interface Handler extends EventHandler<Event> {}
        }
    }
}
