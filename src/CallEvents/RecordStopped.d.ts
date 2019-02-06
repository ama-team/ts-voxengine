import {CallEvent} from './$Implicit/CallEvent';
import {EventHandler} from '../$Implicit/EventHandler';

export = CallEvents;

declare global {
    export namespace CallEvents {
        export namespace RecordStopped {
            export interface Event extends CallEvent<'Call.RecordStopped'> {
                /**
                 * Record cost (in the account's currency: USD, EUR or RUR).
                 */
                readonly cost: string;

                /**
                 * Record duration (sec).
                 */
                readonly duration: number;

                /**
                 * HTTP URL of record file.
                 */
                readonly url: string;
            }

            export interface Handler extends EventHandler<Event> {}
        }
    }
}
