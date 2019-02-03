export = VoxEngine;

declare global {
    export namespace VoxEngine {

        /**
         * Options for Text-to-speech usage. See the details in the
         * {@link https://www.w3.org/TR/speech-synthesis/#S3.2.4|official specs}.
         * Note that if you specify at least one of these options, Voxengine
         * automatically adds the `<speak>...</speak>` tags to either end of a
         * passed string. If you want to use other SSML tags, specify the
         * `<speak>...</speak>` tags manually:
         *
         * ```
         * call.say("<speak><say-as stress='1'>something</say-as></speak>", Language.UK_ENGLISH_FEMALE)
         * ```
         */
        export class TTSOptions {
            /**
             * Voice pitch. Acceptable ranges are: 1) the numbers followed by
             * "Hz" from 0.5Hz to 2Hz 2) `x-low`, `low`, `medium`, `high`,
             * `x-high`, `default`.
             */
            public pitch: 'x-low' | 'low' | 'medium' | 'high' | 'x-high' | 'default' | string;

            /**
             * Speech speed. Possible values are: `x-slow`, `slow`, `medium`,
             * `fast`, `x-fast`, `default`.
             */
            public rate: 'x-slow' | 'slow' | 'medium' | 'fast' | 'x-fast' | 'default';

            /**
             * Speech volume. Possible values are: `silent`, `x-soft`, `soft`,
             * `medium`, `loud`, `x-loud`, `default`.
             */
            public volume: 'silent' | 'x-soft' | 'soft' | 'medium' | 'loud' | 'x-loud' | 'default';
        }
    }
}
