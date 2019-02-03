import {ASREvent} from './Common/ASREvent';
import {EventHandler} from '../../../Common/EventHandler';

export = ASREvents;

declare global {
    export namespace ASREvents {
        export namespace Started {
            /**
             * The event is triggered after ASR instance was created.
             */
            export interface Event extends ASREvent {}

            export interface Handler extends EventHandler<Event> {}
        }
    }
}
