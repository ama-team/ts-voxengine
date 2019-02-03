import {SipEvent} from './Common/SipEvent';
import {EventHandler} from '../Common/EventHandler';

export = CallEvents;

declare global {
    export namespace CallEvents {
        export namespace AudioStarted {
            /**
             * Event is triggered after remote peer answered the call or set
             * the call into the {@link Call.startEarlyMedia} state. Note that
             * event is not triggered in P2P mode.
             */
            export interface Event extends SipEvent<'Call.AudioStarted'> {}

            export interface Handler extends EventHandler<Event> {}
        }
    }
}
