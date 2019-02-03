export = AI;

declare global {
    export namespace AI {
        /**
         * Settings to setup a new Dialogflow instance.
         */
        export class DialogflowSettings {
            /**
             * Language.
             */
            public lang?: DialogflowLanguage;

            /**
             * Instructs the speech synthesizer how to generate the
             * output audio content.
             */
            public outputAudioConfig?: DialogflowOutputAudioConfig;

            /**
             * Optional. The collection of phrase hints which are used
             * to boost accuracy of speech recognition.
             */
            public phraseHints?: string[];

            /**
             * Initial query parameters.
             */
            public queryParameters?: DialogflowQueryParameters;

            /**
             * Enables/disables single utterance.
             */
            public singleUtterance?: boolean;
        }
    }
}
