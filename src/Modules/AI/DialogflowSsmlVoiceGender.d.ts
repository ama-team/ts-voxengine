export = AI;

declare global {
    export namespace AI {
        export enum DialogflowSsmlVoiceGender {
            /**
             * A female voice.
             */
            FEMALE,

            /**
             * A male voice.
             */
            MALE,

            /**
             * A gender-neutral voice.
             */
            NEUTRAL,

            /**
             * An unspecified gender, which means that the client
             * doesn't care which gender the selected voice will have.
             */
            UNSPECIFIED
        }
    }
}
