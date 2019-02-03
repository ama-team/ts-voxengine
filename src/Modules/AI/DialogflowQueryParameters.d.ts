export = AI;

declare global {
    export namespace AI {
        /**
         * Represents the parameters of the conversational query. All
         * the parameters are optional.
         */
        export class DialogflowQueryParameters {
            /**
             * The collection of contexts to be activated before this
             * query is executed.
             */
            public contexts?: any[];

            /**
             * The geo location of this conversational query.
             */
            public geoLocation?: object;

            /**
             * This field can be used to pass custom data into the
             * webhook associated with the agent. Arbitrary JSON objects
             * are supported.
             */
            public payload?: object;

            /**
             * Specifies whether to delete all contexts in the current
             * session before the new ones are activated.
             */
            public resetContexts?: boolean;

            /**
             * The collection of session entity types to replace or
             * extend developer entities with for this query only. The
             * entity synonyms apply to all languages.
             */
            public sessionEntityTypes?: any[];

            /**
             * The time zone of this conversational query from the time
             * zone database, e.g., America/New_York, Europe/Paris. If
             * not provided, the time zone specified in agent settings
             * is used.
             */
            public timeZone?: string;
        }
    }
}
