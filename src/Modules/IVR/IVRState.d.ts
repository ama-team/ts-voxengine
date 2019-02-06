export = IVRState;

declare global {
    namespace IVRState {
        namespace Implicit {
            interface Handler {
                (input: string): void;
            }
        }
    }

    /**
     * IVR menu state.
     */
    export class IVRState {
        constructor(
            name: string,
            settings: IVRSettings,
            onInputFinished?: IVRState.Implicit.Handler,
            onTimeout?: IVRState.Implicit.Handler
        );

        /**
         * Start IVR from current state for specified call
         *
         * @param call Call that IVR will work with.
         */
        enter(call: Call): void;

        /**
         * This property is set when IVR leaves the specific state and
         * holds user input.
         */
        input: string;

        /**
         * IVR state settings.
         */
        settings: IVRSettings;
    }
}
