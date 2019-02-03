export = AI;

declare global {
    export namespace AI {
        /**
         * Represents the natural language text to be processed.
         */
        export class DialogflowTextInput {
            /**
             * The language ot this conversation query.
             */
            public languageCode?: DialogflowLanguage;

            /**
             * The UTF-8 encoded natural language text to be processed.
             * Text length must not exceed 256 bytes.
             */
            public text: string;
        }
    }
}
