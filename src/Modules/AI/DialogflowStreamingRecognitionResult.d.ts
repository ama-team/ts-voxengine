export = AI;

declare global {
    export namespace AI {
        /**
         * Contains a speech recognition result corresponding to a
         * portion of the audio that is currently being processed or an
         * indication that this is the end of the single requested
         * utterance.
         */
        export interface DialogflowStreamingRecognitionResult {
            /**
             * The Speech confidence between 0.0 and 1.0 for the current
             * portion of audio. A higher number indicates an estimated
             * greater likelihood that the recognized words are correct.
             * The default of 0.0 is a sentinel value indicating that
             * confidence was not set. This field is typically only
             * provided if isFinal is true and you should not rely on it
             * being accurate or even set.
             */
            readonly confidence?: number;
            /**
             * The default of 0.0 is a sentinel value indicating
             * confidence was not set. If false, the
             * StreamingRecognitionResult represents an interim result
             * that may change. If true, the recognizer will not return
             * any further hypotheses about this piece of the audio.
             */
            readonly isFinal: boolean;
            /**
             * Type of the result message.
             */
            readonly messageType: string;
            /**
             * Optional. Transcript text representing the words that the
             * user spoke.
             */
            readonly transcript?: string;
        }
    }
}
