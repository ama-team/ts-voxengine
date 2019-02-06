import './RecorderEvents/Stopped';
import './RecorderEvents/Started';
import './RecorderEvents/RecorderError';


export = RecorderEvents;

declare global {
    export namespace RecorderEvents {
        export type RecorderError = () => RecorderError.Event;
        export type Started = () => Started.Event;
        export type Stopped = () => Stopped.Event;

        export const RecorderError: RecorderError;
        export const Started: Started;
        export const Stopped: Stopped;
    }

    export type RecorderEvents =
        RecorderEvents.RecorderError |
        RecorderEvents.Started |
        RecorderEvents.Stopped;
}
