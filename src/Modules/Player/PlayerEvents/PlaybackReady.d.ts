import {PlayerEvent} from './$Implicit/PlayerEvent';
import {EventHandler} from '../../../$Implicit/EventHandler';

export = PlayerEvents;

declare global {
    export namespace PlayerEvents {
        export namespace PlaybackReady {
            /**
             * The event is triggered by the {@link VoxEngine.createURLPlayer}
             * and {@link VoxEngine.createTTSPlayer} methods when:
             *
             * 1) the audio file download to the Voximpant cache is
             * finished
             * 2) the audio file is found in the cache (i.e., it was in
             * the cache before).
             */
            export interface Event extends PlayerEvent {}

            export interface Handler extends EventHandler<Event> {}
        }
    }
}
