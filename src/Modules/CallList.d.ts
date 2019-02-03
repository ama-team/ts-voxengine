export = CallList;

declare global {
    export namespace CallList {
        /**
         * Report error to CallList module.
         *
         * @param error Error string or JSON.
         * @param whenDone Callback that is executed when a result is
         * processed.
         */
        export function reportError(error: string | object, whenDone?: () => void): void;

        /**
         * Report progress to CallList module.
         *
         * @param progress Error string or JSON.
         * @param whenDone Callback that is executed when a result is processed.
         */
        export function reportProgress(progress: string | object, whenDone?: () => void): void;

        /**
         * Report result to CallList module.
         *
         * @param result Error string or JSON.
         * @param whenDone Callback that is executed when a result is processed.
         */
        export function reportResult(result: string | object, whenDone?: () => void): void;
    }
}
