export = AI;

declare global {
    export namespace AI {
        /**
         * Instructs the speech synthesizer how to generate the output
         * audio content.
         */
        export class DialogflowOutputAudioConfig {
            /**
             * Optional. Configuration of how speech should be
             * synthesized.
             */
            public synthesizeSpeechConfig?: DialogflowSynthesizeSpeechConfig;
        }
    }
}
