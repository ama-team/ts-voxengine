import './AppEvents/CallAlerting';
import './AppEvents/HttpRequest';
import './AppEvents/Started';

export = AppEvents;

declare global {
    export namespace AppEvents {
        export type CallAlerting = 'AppEvents.CallAlerting';
        export type HttpRequest = 'AppEvents.HttpRequest';
        export type Started = 'AppEvents.Started';
        export type Terminating = 'AppEvents.Terminating';
        export type Terminated = 'AppEvents.Terminated';

        /**
         * Event is triggered when an incoming call arrives. Since each
         * incoming call creates new session, it can be triggered only
         * once during session lifetime.
         */
        export const CallAlerting: CallAlerting;

        /**
         * Event is triggered when the managing HTTP request is received
         * by the session. If you started a call session with HTTP request
         * you got an answer: an object with media_session_access_url
         * property. The property's value is the managing URL for the
         * specified session, so it can be used in managing HTTP request
         * that triggers AppEvents.HttpRequest event. These managing HTTP
         * requests are used to stop scenario or pass additional data into
         * it. For more details see the {@link AppEvents.Started}.
         */
        export const HttpRequest: HttpRequest;

        /**
         * The very first event is triggered due to incoming call or HTTP
         * request to Voximplant cloud over the internet. The event is
         * triggered only once in a session, so if you execute the same
         * HTTP request again it will create the new, separate session.
         * Note that usage of the event in your JS scenario is optional.
         * See the workflow example in
         * {@link https://voximplant.com/blog/rapid-callback-app-development-using-voximplant/|this article}.
         */
        export const Started: Started;

        /**
         * Event is triggered when a session is about to terminate. The
         * event is triggered in two cases: 1) when there are no calls
         * and/or ACD requests in a call session. See the details in
         * {@link https://voximplant.com/docs/references/voxengine|VoxEngine session limits}
         * 2) when the {@link VoxEngine.terminate} method was called.
         * Timers and any other external resources are not available after
         * this event was triggered, but you can perform one HTTP request
         * inside the event handler (e.g. to notify external system about
         * the fact that session is finished). When that request is
         * finished (or no such request was made), the
         * {@link AppEvents.Terminated} event will be triggered.
         */
        export const Terminating: Terminating;

        /**
         * Event is triggered when a session was terminated and after the
         * {@link AppEvents.Terminating} event was triggered. The time
         * between these events depends on handler for
         * {@link AppEvents.Terminating} event. Use the event just for
         * debugging, only the Logger.write method could be used in a
         * handler.
         */
        export const Terminated: Terminated;

        export namespace Terminating {
            export interface Event {}

            export interface Handler {
                (event: Event): void;
            }
        }

        export namespace Terminated {
            export interface Event {}

            export interface Handler {
                (event: Event): void;
            }
        }
    }

    export type AppEvents =
        AppEvents.CallAlerting |
        AppEvents.HttpRequest |
        AppEvents.Started |
        AppEvents.Terminating |
        AppEvents.Terminated;
}
