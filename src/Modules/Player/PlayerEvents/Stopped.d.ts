import {PlayerEvent} from './$Implicit/PlayerEvent';
import {EventHandler} from '../../../$Implicit/EventHandler';

export = PlayerEvents;

declare global {
    export namespace PlayerEvents {
        export namespace Stopped {
            /**
             * The event is triggered as a result of the
             * {@link Player.stop} method call.
             */
            export interface Event extends PlayerEvent {}

            export interface Handler extends EventHandler<Event> {}
        }
    }
}
