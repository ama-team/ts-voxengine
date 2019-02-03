export = EndpointOptions;

declare global {
    /**
     * Endpoint options.
     */
    export interface EndpointOptions {
        /**
         * Call that will be connected to the conference.
         */
        call: Call;
        /**
         * Possible values are: `SEND` | `RECEIVE` | `BOTH`. `SEND`
         * provides only sending stream from endpoint to conference;
         * `RECEIVE` provides only receiving stream from conference to
         * endpoint; `BOTH` allows both sending and receiving.
         */
        direction: Conference.Implicit.Direction;
        /**
         * Endpoint's displayName.
         */
        displayName?: string;
        /**
         * Possible values are: `MIX` | `FORWARD`. `MIX` mode combines
         * all streams in one, FORWARD mode sends only one stream.
         */
        mode: Conference.Implicit.Mode;
        /**
         * Required. Internal information about codecs.
         */
        scheme: object;
    }
}
