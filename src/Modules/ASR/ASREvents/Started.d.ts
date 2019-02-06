import {ASREvent} from './$Implicit/ASREvent';
import {EventHandler} from '../../../$Implicit/EventHandler';

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
