import {EventHandler} from '../$Implicit/EventHandler';

export = AppEvents;

declare global {
    export namespace AppEvents {
        export namespace Terminated {
            export interface Event {}

            export interface Handler extends EventHandler<Event> {}
        }
    }
}
