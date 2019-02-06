import {ACDRequestEvent} from './$Implicit/ACDRequestEvent';
import {EventHandler} from '../../../$Implicit/EventHandler';

export = ACDEvents;

declare global {
    export namespace ACDEvents {
        export namespace QueueFull {
            /**
             * The event is triggered if queue has reached it's max size
             * or max EWT, in this case request is not queued. Max size
             * and max EWT are "unlimited" by default, you can change
             * these values for every new or already existing queue in
             * the control panel.
             */
            export interface Event extends ACDRequestEvent {}

            export interface Handler extends EventHandler<Event> {}
        }
    }
}
