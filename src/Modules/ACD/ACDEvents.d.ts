import './ACDEvents/Error';
import './ACDEvents/Offline';
import './ACDEvents/OperatorFailed';
import './ACDEvents/OperatorReached';
import './ACDEvents/Queued';
import './ACDEvents/QueueFull';
import './ACDEvents/Waiting';

export = ACDEvents;

declare global {
    export namespace ACDEvents {
        // @ts-ignore
        export type Error = Function;
        export type Offline = Function;
        export type OperatorFailed = Function;
        export type OperatorReached = Function;
        export type Queued = Function;
        export type QueueFull = Function;
        export type Waiting = Function;

        export const Error: Error;
        export const Offline: Offline;
        export const OperatorFailed: OperatorFailed;
        export const OperatorReached: OperatorReached;
        export const Queued: Queued;
        export const QueueFull: QueueFull;
        export const Waiting: Waiting;
    }

    export type ACDEvents =
        ACDEvents.Error |
        ACDEvents.Offline |
        ACDEvents.OperatorFailed |
        ACDEvents.OperatorReached |
        ACDEvents.Queued |
        ACDEvents.QueueFull |
        ACDEvents.Waiting;
}
