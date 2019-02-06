export interface EventHandler<E> {
    (event: E): void;
}
