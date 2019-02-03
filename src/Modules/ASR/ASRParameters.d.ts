export = ASRParameters;

declare global {
    /**
     * ASR parameters.
     */
    export interface ASRParameters {
        /**
         * ASR dictionary for recognition. {@link ASRDictionary}.* or
         * array of words are the possible values. Note that dict does
         * not limit the recognition to the specific list. Instead,
         * words in the specified list will have a higher chance to be
         * selected.
         */
        dict?: ASRDictionary | string[];

        /**
         * Enables/disables interim ASR results. If it is "true", the
         * {@link ASREvents.InterimResult} will be triggered many times
         * according to the speech.
         */
        interimResults?: boolean;

        /**
         * ASR language.
         */
        lang: ASRLanguage;

        /**
         * Enables/disables single utterance. It is true by default, so
         * the {@link ASREvents.Result} will be triggered after every
         * utterance. If it is false, there are two cases:
         *
         * 1) if the speech is shorter than 60 sec
         * {@link ASREvents.Result} will be triggered in unpredictable
         * time. You could mute the mic when the speech is over - this
         * will increase the probability of {@link ASREvents.Result}
         * catching,
         * 2) if the speech is longer than 60 sec the
         * {@link ASREvents.Result} will be triggered each 60 seconds.
         */
        singelUtterance?: boolean;
    }
}
