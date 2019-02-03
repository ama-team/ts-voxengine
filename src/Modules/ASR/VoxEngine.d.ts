export = VoxEngine;

declare global {
    export namespace VoxEngine {
        /**
         * Creates new speech recognizer and starts the recognition.
         * Sources can later be attached using the
         * {@link Call.sendMediaTo} method etc.
         *
         * @param parameters ASR parameters. IMPORTANT: the lang
         * parameter is required, the other parameters are optional.
         */
        export function createASR(parameters: ASRParameters): ASR;
    }
}
