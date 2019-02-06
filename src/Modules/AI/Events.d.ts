import './Events/DialogflowError';
import './Events/DialogflowPlaybackFinished';
import './Events/DialogflowPlaybackMarkerReached';
import './Events/DialogflowPlaybackStarted';
import './Events/DialogflowResponse';
import './Events/DialogflowStopped';
import './Events/VoicemailDetected';
import './Events/VoicemailNotDetected';

export = AI;

declare global {
    export namespace AI {
        export namespace Events {
            export type DialogflowError = () => DialogflowError.Event;
            export type DialogflowPlaybackFinished = () => DialogflowPlaybackFinished.Event;
            export type DialogflowPlaybackMarkerReached = () => DialogflowPlaybackMarkerReached.Event;
            export type DialogflowPlaybackStarted = () => DialogflowPlaybackStarted.Event;
            export type DialogflowResponse = () => DialogflowResponse.Event;
            export type DialogflowStopped = () => DialogflowStopped.Event;
            export type VoicemailDetected = () => VoicemailDetected.Event;
            export type VoicemailNotDetected = () => VoicemailNotDetected.Event;

            export const DialogflowError: DialogflowError;
            export const DialogflowPlaybackFinished: DialogflowPlaybackFinished;
            export const DialogflowPlaybackMarkerReached: DialogflowPlaybackMarkerReached;
            export const DialogflowPlaybackStarted: DialogflowPlaybackStarted;
            export const DialogflowResponse: DialogflowResponse;
            export const DialogflowStopped: DialogflowStopped;
            export const VoicemailDetected: VoicemailDetected;
            export const VoicemailNotDetected: VoicemailNotDetected;
        }

        export type Events =
            Events.DialogflowError |
            Events.DialogflowPlaybackFinished |
            Events.DialogflowPlaybackMarkerReached |
            Events.DialogflowPlaybackStarted |
            Events.DialogflowResponse |
            Events.DialogflowStopped |
            Events.VoicemailDetected |
            Events.VoicemailNotDetected;
    }
}
