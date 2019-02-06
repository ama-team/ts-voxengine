import {PlayerEvent} from './$Implicit/PlayerEvent';
import {EventHandler} from '../../../$Implicit/EventHandler';

export = PlayerEvents;

declare global {
    export namespace PlayerEvents {
        export namespace PlaybackMarkerReached {
            /**
             * The event is triggered when {@link Player.addMarker} is
             * reached.
             */
            export interface Event extends PlayerEvent {
                /**
                 * The marker offset.
                 */
                readonly offset?: number;
            }

            export interface Handler extends EventHandler<Event> {}
        }
    }
}
