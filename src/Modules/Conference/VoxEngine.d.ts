export = VoxEngine;

declare global {
    export namespace VoxEngine {
        /**
         * Create new conference.
         *
         * @param parameters Conference parameters.
         */
        export function createConference(parameters?: ConferenceParameters): Conference;

        /**
         * Destroy existing conference.
         *
         * @param conference Existing conference.
         */
        export function destroyConference(conference: Conference): void;
    }
}
