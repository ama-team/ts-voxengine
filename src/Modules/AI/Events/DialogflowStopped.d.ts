import {DialogflowEvent} from './$Implicit/DialogflowEvent';
import {EventHandler} from '../../../$Implicit/EventHandler';

declare global {
    export namespace AI {
        export namespace Events {
            export namespace DialogflowStopped {
                /**
                 * Event is triggered when a Dialogflow instance was
                 * stopped.
                 */
                export interface Event extends DialogflowEvent {
                    /**
                     * The cause of the event.
                     */
                    readonly cause: string;
                }

                export interface Handler extends EventHandler<Event> {}
            }
        }
    }
}
