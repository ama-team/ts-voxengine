import {DialogflowEvent} from './Common/DialogflowEvent';
import {EventHandler} from '../../../Common/EventHandler';

export = AI;

declare global {
    export namespace AI {
        export namespace Events {
            export namespace DialogflowPlaybackFinished {
                /**
                 * The event is triggered when a playback of a single
                 * phrase has finished successfully or in case of
                 * playback error.
                 */
                export interface Event extends DialogflowEvent {
                    /**
                     * Optional.
                     */
                    readonly error?: string;
                }

                export interface Handler extends EventHandler<Event> {}
            }
        }
    }
}
