import '../Call';
import {EventHandler} from '../$Implicit/EventHandler';

export = AppEvents;

declare global {
    export namespace AppEvents {
        /**
         * Event is triggered when an incoming call arrives. Since each
         * incoming call creates new session, it can be triggered only once
         * during session lifetime.
         */
        export namespace CallAlerting {
            export interface Event {
                /**
                 * Incoming call that triggered the event.
                 */
                readonly call: Call;

                /**
                 * CallerID for current call.
                 */
                readonly callerid: string;

                /**
                 * Optional: Custom data that is passed with the call. It can
                 * be passed from Web SDK via the Client.call method in the
                 * customData parameter; it works similarly in other SDKs.
                 */
                readonly customData: string | undefined;

                /**
                 * Dialed number.
                 */
                readonly destination: string;

                /**
                 * Displayable name of the caller.
                 */
                readonly displayName: string;

                /**
                 * CallerID with domain or SIP URI for incoming SIP call.
                 */
                readonly fromURI: string;

                /**
                 * Custom SIP headers received with the call (the ones starting with "X-")
                 */
                readonly headers: {[index: string]: string};

                /**
                 * The name of the event - "Application.CallAlerting"
                 */
                readonly name: 'Application.CallAlerting';

                /**
                 * Internal information about codecs, should be passed to the
                 * {@link VoxEngine.callUser}, {@link VoxEngine.callUserDirect},
                 * {@link VoxEngine.callSIP}, {@link VoxEngine.callConference},
                 * {@link Call.answer}, {@link }Call.answerDirect},
                 * {@link Call.startEarlyMedia} methods call.
                 */
                readonly scheme: any;

                /**
                 * Dialed SIP URI
                 */
                readonly toURI: string;
            }

            export interface Handler extends EventHandler<Event> {}
        }
    }
}
