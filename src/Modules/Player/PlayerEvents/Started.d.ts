import {PlayerEvent} from './$Implicit/PlayerEvent';
import {EventHandler} from '../../../$Implicit/EventHandler';

export = PlayerEvents;

declare global {
    export namespace PlayerEvents {
        export namespace Started {
            /**
             * The event is triggered when playback is started. Note
             * that if the {@link VoxEngine.createURLPlayer} method is
             * called with the onPause parameter that is set to true,
             * the event isn't triggered; it will be triggered after the
             * {@link Player.resume} method call.
             */
            export interface Event extends PlayerEvent {}

            export interface Handler extends EventHandler<Event> {}
        }
    }
}
