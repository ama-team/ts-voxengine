import {PlayerEvent} from './$Implicit/PlayerEvent';
import {EventHandler} from '../../../$Implicit/EventHandler';

export = PlayerEvents;

declare global {
    export namespace PlayerEvents {
        export namespace PlaybackFinished {
            /**
             * The event is triggered when playback has finished
             * successfully or in case of playback error.
             */
            export interface Event extends PlayerEvent {
                /**
                 * Error message.
                 */
                readonly error?: string;
            }

            export interface Handler extends EventHandler<Event> {}
        }
    }
}
