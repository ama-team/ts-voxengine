import '../../DialogflowInstance';

export interface DialogflowEvent {
    /**
     * The Dialogflow instance that generated the event.
     */
    readonly dialogflow: AI.DialogflowInstance;
}
