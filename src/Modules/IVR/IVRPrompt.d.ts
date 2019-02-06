export = IVRPrompt;

declare global {
    namespace IVRPrompt {
        namespace Implicit {
            interface IVRSayPrompt {
                /**
                 * TTS language for pronouncing a value of the say parameter.
                 */
                lang: Language;

                /**
                 * Voice message to say. Use it together with the lang
                 * parameter.
                 */
                say: string;
            }

            interface IVRPlayPrompt {
                /**
                 * Voice message url to play. Supported formats are mp3 and ogg.
                 */
                play: string;
            }
        }
    }

    /**
     * IVR menu prompt settings. Note that it's possible to specify play
     * parameter or pair of the say and lang parameters.
     */
    export type IVRPrompt = IVRPrompt.Implicit.IVRSayPrompt | IVRPrompt.Implicit.IVRPlayPrompt;
}
