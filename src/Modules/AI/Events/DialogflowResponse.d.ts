import {DialogflowEvent} from './$Implicit/DialogflowEvent';
import {EventHandler} from '../../../$Implicit/EventHandler';

import * as Exported from '../DialogflowResponse';

declare global {
    export namespace AI {
        export namespace Events {
            export namespace DialogflowResponse {
                /**
                 * Event is triggered when a Dialogflow instance returns
                 * an intent response.
                 */
                export interface Event extends DialogflowEvent {
                    /**
                     * The cause of the event.
                     */
                    readonly response: Exported.DialogflowResponse;
                }

                export interface Handler extends EventHandler<Event> {}
            }
        }
    }
}
