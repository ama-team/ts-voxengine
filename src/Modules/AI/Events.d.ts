import './Events/VoicemailDetected';

export = AI;

declare global {
    export namespace AI {
        export namespace Events {
            export type DialogflowError = Function;
            export type DialogflowPlaybackFinished = Function;
            export type DialogflowPlaybackMarkerReached = Function;
            export type DialogflowPlaybackStarted = Function;
            export type DialogflowResponse = Function;
            export type DialogflowStopped = Function;
            export type VoicemailDetected = Function;
            export type VoicemailNotDetected = Function;

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
