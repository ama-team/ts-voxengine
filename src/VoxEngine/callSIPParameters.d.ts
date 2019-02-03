export = VoxEngine;

declare global {
    export namespace VoxEngine {
        /**
         * VoxEngine.callSIP parameters.
         */
        export class callSIPParameters {
            /**
             * Username for SIP Authentication. If not specified,
             * {@link callerid} is used as username for authentication. If it is
             * specified, the regId parameter is also required.
             */
            public authUser?: string;

            /**
             * CallerID of the calling user that will be displayed to the called
             * user. Usage of whitespaces is not allowed. Normally it's some
             * phone number that can be used for callback. IMPORTANT: virtual
             * numbers rented from Voximplant can't be used as CallerID, use
             * only real numbers.
             */
            public callerid?: string;

            /**
             * Name of the calling user, that will be displayed to the called
             * user. Normally it's a human-readable version of CallerID, e.g. a
             * person's name.
             */
            public displayName?: string;

            /**
             * Optional custom parameters (SIP headers) that should be passed
             * with call (INVITE) message. Custom header names have to begin
             * with the 'X-' prefix. The "X-" headers could be handled by a SIP
             * phone or WEB SDK (e.g. see the {@link http://voximplant.com/docs/references/websdk/enums/events.html#incomingcall|incomingCall} event).
             * Example: `{'X-header':'value'}`.
             */
            public headers?: { [index: string]: string };

            /**
             * Specifies outbound proxy, e.g. `outProxy: "69.167.178.6"`
             */
            public outProxy?: string;

            /**
             * Password for SIP Authentication. If it is specified, the
             * {@link #regId} parameter is also required.
             */
            public password?: string;
            /**
             * Identifier of Voximplant SIP registration that is used for
             * outbound call. It is required if the {@link #authUser} and
             * {@link #password} were specified.
             */
            public regId?: number;

            /**
             * Specifies if call should have video support. Please note that
             * price for audio-only and video calls is different!
             */
            public video?: boolean;
        }
    }
}
