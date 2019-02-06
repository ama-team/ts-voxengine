import './AI/DialogflowTextInput';
import './AI/DialogflowQueryParameters';
import './AI/DialogflowOutputAudioConfig';
import './AI/Events';
import './AI/DialogflowResponse';
import './AI/DialogflowLanguage';
import './AI/DialogflowResult';
import './AI/DialogflowSynthesizeSpeechConfig';
import './AI/DialogflowInstance';
import './AI/DialogflowEventInput';
import './AI/DialogflowQueryInput';
import './AI/DialogflowSettings';
import './AI/DialogflowVoiceSelectionParams';
import './AI/DialogflowSsmlVoiceGender';
import './AI/DialogflowStreamingRecognitionResult';

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
