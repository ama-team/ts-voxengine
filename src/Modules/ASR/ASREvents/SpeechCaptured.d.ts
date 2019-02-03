import {ASREvent} from './Common/ASREvent';
import {EventHandler} from '../../../Common/EventHandler';

export = ASREvents;

declare global {
    export namespace ASREvents {
        export namespace SpeechCaptured {
            /**
             * The event is triggered after ASR captured audio data,
             * before recognition process
             */
            export interface Event extends ASREvent {}

            export interface Handler extends EventHandler<Event> {}
        }
    }
}
