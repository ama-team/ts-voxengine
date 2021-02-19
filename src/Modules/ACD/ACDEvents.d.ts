import './ACDEvents/Error';
import './ACDEvents/Offline';
import './ACDEvents/OperatorFailed';
import './ACDEvents/OperatorReached';
import './ACDEvents/OperatorCallAttempt';
import './ACDEvents/Queued';
import './ACDEvents/QueueFull';
import './ACDEvents/Waiting';

export = ACDEvents;

declare global {
    export namespace ACDEvents {
        // @ts-ignore
        export type Error = () => Error.Event;
        export type Offline = () => Offline.Event;
        export type OperatorFailed = () => OperatorFailed.Event;
        export type OperatorReached = () => OperatorReached.Event;
        export type OperatorCallAttempt = () => OperatorCallAttempt.Event;
        export type Queued = () => Queued.Event;
        export type QueueFull = () => QueueFull.Event;
        export type Waiting = () => Waiting.Event;

        export const Error: Error;
        export const Offline: Offline;
        export const OperatorFailed: OperatorFailed;
        export const OperatorReached: OperatorReached;
        export const OperatorCallAttempt: OperatorCallAttempt;
        export const Queued: Queued;
        export const QueueFull: QueueFull;
        export const Waiting: Waiting;
    }

    export type ACDEvents =
        ACDEvents.Error |
        ACDEvents.Offline |
        ACDEvents.OperatorFailed |
        ACDEvents.OperatorReached |
        ACDEvents.OperatorCallAttempt |
        ACDEvents.Queued |
        ACDEvents.QueueFull |
        ACDEvents.Waiting;
}
