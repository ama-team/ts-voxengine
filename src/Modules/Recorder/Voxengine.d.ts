export = VoxEngine;

declare global {
    export namespace VoxEngine {
        /**
         * Create new audio recorder. Sources can later be attached
         * using the {@link Call.sendMediaTo} method.
         *
         * @param options Object with recorder parameters. Note that if
         * the first parameter is not an object, it's treated as 'name',
         * with second optional parameter as 'secure' boolean flag,
         * default to 'false'.
         */
        export function createRecorder(options?: RecorderParameters);
    }
}
