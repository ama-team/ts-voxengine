export = AI;

declare global {
    export namespace AI {
        /**
         * Represents Dialogflow intent response.
         */
        export interface DialogflowResponse {
            /**
             * Optional. The result of the conversational query or event
             * processing.
             */
            readonly queryResult?: DialogflowResult;

            /**
             * Optional. The result of speech recognition.
             */
            readonly recognitionResult?: DialogflowStreamingRecognitionResult;

            /**
             * The unique identifier of the response. It can be used to
             * locate a response in the training example set or for
             * reporting issues.
             */
            readonly responseId: string;

            /**
             * Specifies the status of the webhook request.
             */
            readonly webhookStatus: object;
        }
    }
}
