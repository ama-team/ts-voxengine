import {ASREvent} from './Common/ASREvent';
import {EventHandler} from '../../../Common/EventHandler';

declare global {
    export namespace ASREvents {
        export namespace CaptureStarted {
            /**
             * The event is triggered after ASR detected voice input and
             * started collecting audio data for ASR.
             */
            export interface Event extends ASREvent {}

            export interface Handler extends EventHandler<Event> {}
        }
    }
}
