export = ConferenceParameters;

declare global {
    /**
     * Conference parameters.
     */
    export interface ConferenceParameters {
        /**
         * Wideband audio mode. If it set to false (default), audio stream
         * will have the frequency of 8 KHz. Otherwise, audio stream will
         * have the frequency of 48 KHz. Please note that default audio mode
         * costs nothing while the wideband audio is billed additionally -
         * for more details see the
         * {@link https://voximplant.com/pricing/|pricing page}.
         */
        hd_audio: boolean;
    }
}
