export = VoxEngine;

declare global {
    export namespace VoxEngine {
        export class AnswerParameters {
            /**
             * Set the maximum possible video bitrate for the end user device in
             * kbps.
             */
            public maxVideoBitrate: number;
            /**
             * Internal information about codecs, which can be retrieved from
             * {@link AppEvents.CallAlerting} (in case of an "echo" call, i.e.,
             * with one leg) or {@link CallEvents.Connected} (in case of a
             * regular call with at least two legs). The retrieved scheme should
             * be passed to the {@link Call.answer} method.
             */
            public scheme: any;
        }
    }
}
