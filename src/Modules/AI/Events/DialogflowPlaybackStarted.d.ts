import {DialogflowEvent} from './Common/DialogflowEvent';
import {EventHandler} from '../../../Common/EventHandler';

declare global {
    export namespace AI {
        export namespace Events {
            export namespace DialogflowPlaybackStarted {
                /**
                 * Dialogflow playback started The event is triggered
                 * when a playback of a single phrase has started.
                 */
                export interface Event extends DialogflowEvent {
                    /**
                     * Playback duration
                     */
                    readonly duration: number;
                }

                export interface Handler extends EventHandler<Event> {}
            }
        }
    }
}
