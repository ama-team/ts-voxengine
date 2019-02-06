import './PlayerEvents/PlaybackFinished';
import './PlayerEvents/Stopped';
import './PlayerEvents/Started';
import './PlayerEvents/PlaybackReady';
import './PlayerEvents/PlaybackMarkerReached';

export = PlayerEvents;

declare global {
    export namespace PlayerEvents {
        export type PlaybackFinished = () => PlaybackFinished.Event;
        export type PlaybackMarkerReached = () => PlaybackMarkerReached.Event;
        export type PlaybackReady = () => PlaybackReady.Event;
        export type Started = () => Started.Event;
        export type Stopped = () => Stopped.Event;

        export const PlaybackFinished: PlaybackFinished;
        export const PlaybackMarkerReached: PlaybackMarkerReached;
        export const PlaybackReady: PlaybackReady;
        export const Started: Started;
        export const Stopped: Stopped;
    }
    
    export type PlayerEvents =
        PlayerEvents.PlaybackFinished |
        PlayerEvents.PlaybackMarkerReached |
        PlayerEvents.PlaybackReady |
        PlayerEvents.Started |
        PlayerEvents.Stopped;
}
