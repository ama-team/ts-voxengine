export interface NamedEvent<N extends string> {
    /**
     * Name of the event.
     */
    readonly name: N;
}
