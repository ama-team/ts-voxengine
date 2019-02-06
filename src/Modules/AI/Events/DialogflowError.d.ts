import {DialogflowEvent} from './$Implicit/DialogflowEvent';
import {EventHandler} from '../../../$Implicit/EventHandler';

export = AI;

declare global {
    export namespace AI {
        export namespace Events {
            export namespace DialogflowError {
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
