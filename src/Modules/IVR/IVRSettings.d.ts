export = IVRSettings;

declare global {
    namespace IVRSettings {
        namespace $Implicit {
            type IVRMenuType = 'select' | 'inputfixed' | 'inputunknown' | 'noinput';
            type IVRInput = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '#' | '*';
        }
    }

    /**
     * IVR menu state settings.
     */
    export interface IVRSettings {
        /**
         * For inputfixed - length of desired input.
         */
        inputLength: number;

        /**
         * For inputunknown states - function that returns whether input
         * is complete or not (input is passed as string).
         */
        inputValidator: (input: IVRSettings.$Implicit.IVRInput) => boolean;

        /**
         * Next state to go - for noinput state type.
         */
        nextState: IVRState;

        /**
         * For select type, map of IVR states to go to according to user
         * input. If there is no next state for specific input,
         * `onInputComplete` is invoked.
         */
        nextStates: {[index: string]: IVRState};

        /**
         * Prompt settings.
         */
        prompt: IVRPrompt;

        /**
         * When this digit is entered in `inputunknown` mode, input is
         * considered to be complete.
         */
        terminateOn?: IVRSettings.$Implicit.IVRInput;

        /**
         * Timeout in milliseconds for user input. The default value is
         * 5000 ms.
         */
        timeout?: number;

        /**
         * Menu type. Possible values: select, inputfixed, inputunknown,
         * noinput.
         */
        type?: IVRSettings.$Implicit.IVRMenuType;
    }
}
