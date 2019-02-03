export = ACDEnqueueParams;

declare global {
    export class ACDEnqueueParams {
        /**
         * Optional extra headers to be passed with the call to
         * operator. Custom header names have to begin with the 'X-'
         * prefix except the 'VI-CallTimeout': '5' which switches to
         * another operator if current one didn't answer after the
         * timeout. The "X-" headers could be handled by a SIP phone or
         * WEB SDK (e.g. see the Events.incomingCall event). Example:
         * `{'X-header':'value'}`.
         */
        public headers: {[index: string]: string};
        /**
         * Priority (1-100, 1 is highest priority). If two or more
         * objects have the same priorities, they will be handled
         * according to the order of HTTP requests from JS scenario to
         * the ACD queue.
         */
        public priority: number;
    }
}
