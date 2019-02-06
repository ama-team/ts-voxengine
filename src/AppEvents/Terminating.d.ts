import {EventHandler} from '../$Implicit/EventHandler';

export = AppEvents;

declare global {
    export namespace AppEvents {
        export namespace Terminating {
            export interface Event {}

            export interface Handler extends EventHandler<Event> {}
        }
    }
}
