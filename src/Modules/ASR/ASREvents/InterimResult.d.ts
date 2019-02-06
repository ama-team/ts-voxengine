import {ASREvent} from './$Implicit/ASREvent';
import {EventHandler} from '../../../$Implicit/EventHandler';

export = ASREvents;

declare global {
    export namespace ASREvents {
        export namespace InterimResult {
            /**
             * The event is triggered when interim recognition result
             * received from ASR. Note that event could be triggered
             * only if the {@link ASRParameters.interimResults} option
             * was set to true.
             */
            export interface Event extends ASREvent {
                readonly text: string;
            }

            export interface Handler extends EventHandler<Event> {}
        }
    }
}
