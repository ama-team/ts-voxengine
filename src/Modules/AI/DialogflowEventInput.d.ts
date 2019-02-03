export = AI;

declare global {
    export namespace AI {
        /**
         * Events allow for matching intents by event name instead of
         * the natural language input. For instance, input
         * `<event: { name: “welcome_event”, parameters: { name: “Sam” } }>`
         * can trigger a personalized welcome response. The parameter
         * name may be used by the agent in the response:
         * `“Hello #welcome_event.name! What can I do for you today?”`.
         */
        export class DialogflowEventInput {
            /**
             * The language ot this conversation query.
             */
            public languageCode: DialogflowLanguage;
            /**
             * The unique identifier of the event.
             */
            public name: string;
            /**
             * The collection of parameters associated with the event.
             */
            public parameters: object;
        }
    }
}
