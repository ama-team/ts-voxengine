import {ASREvent} from './Common/ASREvent';
import {EventHandler} from '../../../Common/EventHandler';

export = ASREvents;

declare global {
    export namespace ASREvents {
        export namespace Result {
            /**
             * The event is triggered when recognition result received
             * from ASR. We strongly recommend to create recognition
             * timeout manually to prevent unexpectedly long recognition
             * time.
             */
            export interface Event extends ASREvent {
                /**
                 * Recognition confidence in 0..100 Range (100 means
                 * full confidence, 0 - not confident at all).
                 */
                readonly confidence: number;

                /**
                 * Recognition result.
                 */
                readonly text: string;
            }

            export interface Handler extends EventHandler<Event> {}
        }
    }
}
