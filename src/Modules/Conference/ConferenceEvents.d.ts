export = ConferenceEvents;

declare global {
    export namespace ConferenceEvents {
        export type EndpointAdded = () => EndpointAdded.Event;
        export type EndpointRemoved = () => EndpointRemoved.Event;
        export type ConferenceError = () => ConferenceError.Event;
        export type Started = () => Started.Event;
        export type Stopped = () => Stopped.Event;

        export const EndpointAdded: EndpointAdded;
        export const ConferenceError: ConferenceError;
        export const EndpointRemoved: EndpointRemoved;
        export const Started: Started;
        export const Stopped: Stopped;
    }
    
    export type ConferenceEvents =
        ConferenceEvents.ConferenceError |
        ConferenceEvents.EndpointAdded |
        ConferenceEvents.EndpointRemoved |
        ConferenceEvents.Started |
        ConferenceEvents.Stopped;
}
