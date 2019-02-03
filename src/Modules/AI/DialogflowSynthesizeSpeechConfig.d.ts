export = AI;

declare global {
    export namespace AI {
        /**
         * Configuration of how speech should be synthesized.
         */
        export class DialogflowSynthesizeSpeechConfig {
            /**
             * Optional. An identifier which selects 'audio effects'
             * profiles that are applied on (post synthesized) text to
             * speech. Effects are applied on top of each other in the
             * order they are given.
             */
            public effectsProfileId?: string[];

            /**
             * Optional. Speaking pitch, in the range -20.0, 20.0. 20
             * means increase 20 semitones from the original pitch. -20
             * means decrease 20 semitones from the original pitch.
             */
            public pitch?: number;

            public speakingRate: number;

            /**
             * Optional. The desired voice of the synthesized audio.
             */
            public voice?: DialogflowVoiceSelectionParams;

            /**
             * Optional. Volume gain (in dB) of the normal native volume
             * supported by the specific voice, in the range -96.0,
             * 16.0. If unset, or set to a value of 0.0 (dB), will play
             * at normal native signal amplitude. A value of -6.0 (dB)
             * will play at approximately half the amplitude of the
             * normal native signal amplitude. A value of +6.0 (dB) will
             * play at approximately twice the amplitude of the normal
             * native signal amplitude. We strongly recommend not to
             * exceed +10 (dB) as there's usually no effective increase
             * in loudness for any value greater than that.
             */
            public volumeGainDb: number;
        }
    }
}
