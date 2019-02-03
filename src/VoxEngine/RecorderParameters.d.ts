import '../RecordExpireTime';

export = VoxEngine;

declare global {
    export namespace VoxEngine {
        /**
         * Recorder parameters. The parameters can be passed as arguments either
         * to the {@link Call#record} method or to the
         * {@link Recorder.createRecorder} method of {@link Recorder} module.
         * There are differences between using the parameters in these methods,
         * see the details in the parameters descriptions.
         */
        export class RecorderParameters {
            /**
             * Transcription dictionary. Array of words are possible values.
             * Note that dict does not limit the transcription to the specific
             * list. Instead, words in the specified list will have a higher
             * chance to be selected. Note that parameter doesn't matter for the
             * {@link Recorder} module because the transcription isn't available
             * for it.
             */
            public dict?: string[];

            /**
             * Storage time for recorded files. The default value is 3 months;
             * see possible values in the {@link RecordExpireTime} list.
             */
            public expire?: RecordExpireTime;

            /**
             * Transcription format. Could be specified as "json". In that case
             * the transcription result will be saved in JSON format. The
             * parameter isn't available for the {@link Recorder} module.
             */
            public format?: string;

            /**
             * If set to false (default), 8 KHz / 32 kbps mp3 file will be
             * generated. Otherwise, "wideband audio" 48 KHz / 192 kbps mp3 file
             * will be generated. Note that transcription's quality doesn't
             * depend on this parameter. The property is not compatible with
             * `lossless: true` property.
             */
            public hd_audio?: boolean;

            /**
             * An array of two strings. Each string names the label in resulting
             * transcription: the first string names a call/stream that
             * initiated recording, the second string names the other call. If
             * there is only one string in the array or the parameter is not
             * specified at all, the recording's initiate call will be named as
             * "Left" and the second stream will be named as "Right". The
             * parameter requires the `transcribe: true parameter`. The
             * parameter isn't available for the {@link Recorder} module.
             */
            public labels?: [string, string];

            /**
             * Transcription language. The parameter uses {@link ASRDictionary}
             * from {@link ASR} Module as possible values. Note that it's
             * necessary to include ASR module in the scenario to use the
             * language Constants. The parameter isn't available for the
             * {@link Recorder} module.
             */
            public language?: string;

            /**
             * False by default. If it is true, the record will be saved in FLAC
             * format. The property is not compatible with `hd_audio: true`
             * property.
             */
            public lossless?: boolean;

            /**
             * Name of the recorder. It can be seen in the call history.
             */
            public name?: string;

            /**
             * Restrict access to the record without HTTP API authorization
             * (available only in {@link VoxEngine.createRecorder)}.
             */
            public secure?: boolean;

            /**
             * False by default. The parameter doesn't change anything for the
             * {@link Recorder} module: it will record stereo with mixed streams
             * in both channels. For the {@link Call#record} method it work in
             * another way: 1) if it is False, it will record stereo with mixed
             * streams in both channels 2) If it is True, the Audio stream from
             * a call endpoint to voximplant cloud will be recorded into right
             * channel. Audio stream from voximplant cloud to a call endpoint
             * will be recorded into left channel.
             */
            public stereo?: boolean;

            /**
             * Create the call record transcription. Note that transcription
             * isn't available for the {@link Recorder} module. See the details
             * in the {@link https://voximplant.com/blog/speech-to-text-transcription/|article}.
             */
            public transcribe?: boolean;

            /**
             * Minimum length, in seconds, of a recording to transcribe. 0 to
             * transcribe recordings of any length. Used to filter out
             * recordings that are too short to be meaningful. The parameter
             * isn't available for the {@link Recorder} module.
             */
            public transcriptionThreshold?: boolean;

            /**
             * False by default. For video recording use the
             * {@link Call#record}({video: true}) method call. The parameter
             * isn't available for the {@link Recorder} module because it could
             * only record an audio.
             */
            public video?: boolean;
        }
    }
}
