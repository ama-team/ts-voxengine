import './DialogflowEventInput';

export = AI;

declare global {
    export namespace AI {
        /**
         * Represents the query input. It can contain either:
         *
         * 1. A conversational query in the form of text
         * 2. An event that specifies which intent to trigger
         */
        export class DialogflowQueryInput {
            /**
             * The event to be processed.
             */
            public event?: DialogflowEventInput;

            /**
             * The natural language text to be processed.
             */
            public text?: DialogflowTextInput;
        }
    }
}
