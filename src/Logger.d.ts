export = Logger;

declare global {
    export namespace Logger {
        /**
         * Write specified message to the session logger. Logs are stored
         * in the call history.
         *
         * @param message Message to write. Maximum length is 1000 characters.
         */
        export function write(message: string): void;
    }
}
