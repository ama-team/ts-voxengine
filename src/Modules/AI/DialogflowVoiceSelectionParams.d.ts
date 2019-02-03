export = AI;

declare global {
    export namespace AI {
        /**
         * Description of which voice to use for speech synthesis.
         */
        export class DialogflowVoiceSelectionParams {
            /**
             * Optional. The name of the voice. If not set, the service
             * will choose a voice based on the other parameters such as
             * language_code and gender.
             */
            public name?: string;

            /**
             * Optional. The preferred gender of the voice. If not set,
             * the service will choose a voice based on the other
             * parameters such as language_code and name. Note that this
             * is only a preference, not requirement. If a voice of the
             * appropriate gender is not available, the synthesizer
             * should substitute a voice with a different gender rather
             * than failing the request.
             */
            public ssmlGender?: DialogflowSsmlVoiceGender;
        }
    }
}
