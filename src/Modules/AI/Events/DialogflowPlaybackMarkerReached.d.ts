import {DialogflowEvent} from './Common/DialogflowEvent';
import {EventHandler} from '../../../Common/EventHandler';

declare global {
    export namespace AI {
        export namespace Events {
            export namespace DialogflowPlaybackMarkerReached {
                /**
                 * The event is triggered when
                 * {@link DialogflowInstance#addMarker} is reached.
                 */
                export interface Event extends DialogflowEvent {
                    /**
                     * Marker offset.
                     */
                    readonly offset: number;
                }

                export interface Handler extends EventHandler<Event> {}
            }
        }
    }
}
