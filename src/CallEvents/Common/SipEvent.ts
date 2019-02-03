import {CallEvent} from './CallEvent';

export interface SipEvent<N extends string> extends CallEvent<N> {
    /**
     * Optional SIP headers received with the message (the ones
     * starting with "X-").
     */
    readonly headers: {[index: string]: string};
}
