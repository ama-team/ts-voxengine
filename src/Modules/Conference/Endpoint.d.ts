export = Endpoint;

declare global {
    /**
     * Object that represents any remote media unit in a session.
     * Endpoint can be {@link ASR}, {@link Recorder}, {@link Player} or
     * another {@link Call} (e.g. which is joined to the conference).
     */
    export interface Endpoint {
        /**
         * Returns direction value.
         */
        getDirection(): Conference.$Implicit.Direction;

        /**
         * Returns mode value.
         */
        getMode(): Conference.$Implicit.Mode;

        /**
         * Returns endpoint id.
         */
        id(): string;

        /**
         * Set display name for specified endpoint. When display name is
         * set, all SDKs clients will receive EndpointEvents.InfoUpdated
         * event.
         *
         * @param name
         */
        setDisplayName(name: string): void;
    }
}
