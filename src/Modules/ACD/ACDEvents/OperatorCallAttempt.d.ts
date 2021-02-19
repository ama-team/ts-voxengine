import '../../../Call';
import {ACDRequestEvent} from './$Implicit/ACDRequestEvent';
import {EventHandler} from '../../../$Implicit/EventHandler';

export = ACDEvents;

declare global {
    export namespace ACDEvents {
        export namespace OperatorCallAttempt {
            /**
             * The event is triggered when an ACD makes a user call 
             * via the {@link https://voximplant.com/docs/references/voxengine/voxengine/calluser|CallUser}
             * method.
             */
            export interface Event extends ACDRequestEvent {
                /**
                 * Operator's call
                 */
                readonly operatorCall: Call;
            }

            export interface Handler extends EventHandler<Event> {}
        }
    }
}
