import '../../../Call';
import {ACDRequestEvent} from './$Implicit/ACDRequestEvent';
import {EventHandler} from '../../../$Implicit/EventHandler';

export = ACDEvents;

declare global {
    export namespace ACDEvents {
        /**
         * The event is triggered when an operator was reached.
         */
        export namespace OperatorReached {
            export interface Event extends ACDRequestEvent {
                /**
                 * Established call with operator.
                 */
                readonly operatorCall: Call;
            }
            
            export interface Handler extends EventHandler<Event> {}
        }
    }
}
