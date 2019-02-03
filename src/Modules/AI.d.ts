import './AI/Events';

export = AI;

declare global {
    export namespace AI {
        /**
         * Creates and returns a new Dialogflow instance which provides
         * the data exchanging with the Dialogflow API, handling events
         * etc.
         *
         * @param params
         */
        export function createDialogFlow(params: DialogflowSettings): DialogflowInstance;

        /**
         * Start voicemail recognition session. You can check how many
         * times voicemail was detected in the Call history.
         *
         * @param call
         */
        export function detectVoicemail(call: Call): Promise<Events.VoicemailDetected.Event>;
    }
}
