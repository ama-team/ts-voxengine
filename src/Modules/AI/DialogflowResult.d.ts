export = AI;

declare global {
    export namespace AI {
        interface Intent {
            readonly name?: string;
            readonly display_name?: string;
            readonly webhook_state?: any;
            [index: string]: any;
        }

        /**
         * Represents the result of an intent response.
         */
        export interface DialogflowResult {
            /**
             * The action name from the matched intent.
             */
            readonly action: string

            /**
             * This field is set to:
             *
             * - `false` if the matched intent has required parameters
             * and not all of the required parameter values have been
             * collected.
             * - `true` if all required parameter values have been
             * collected, or if the matched intent doesn't contain any
             * required parameters.
             */
            readonly allRequiredParamsPresent: boolean;

            /**
             * The free-form diagnostic info. For example, this field
             * could contain webhook call latency.
             */
            readonly diagnosticInfo: object;

            /**
             * The collection of rich messages to present to the user.
             */
            readonly fulfillmentMessages: string[];

            readonly fulfillmentText: string;

            /**
             * The intent that matched the conversational query. Some,
             * not all fields are filled in this message, including but
             * not limited to: name, display_name and webhook_state.
             */
            readonly intent: Intent;

            /**
             * The intent detection confidence. Values range from 0.0
             * (completely uncertain) to 1.0 (completely certain).
             */
            readonly intentDetectionConfidence: number;

            /**
             * The language that was triggered during intent detection.
             * See Language Support for a list of the currently
             * supported language codes.
             */
            readonly languageCode: string;

            /**
             * The collection of extracted parameters.
             */
            readonly parameters: object;

            /**
             * The original conversational query text:
             *
             * - If natural language text was provided as input,
             * query_text contains a copy of the input.
             * - If natural language speech audio was provided as input,
             * query_text contains the speech recognition result. If
             * speech recognizer produced multiple alternatives, a
             * particular one is picked.
             * - If an event was provided as input, query_text is not
             * set.
             */
            readonly queryText?: string;
        }
    }
}
