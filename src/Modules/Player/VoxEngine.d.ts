export = VoxEngine;

declare global {
    export namespace VoxEngine {
        /**
         * Create new audio player with specified text; TTS is used to
         * play this text. Media streams can later be attached using the
         * {@link Call#sendMediaTo} method etc. If text length exceeds
         * 1500 characters the {@link PlayerEvents.PlaybackFinished}
         * event is triggered with error description. After the very
         * first playing, a phrase will be cached; each createTTSPlayer
         * instance stores the cache data up to 2 weeks. Note that cache
         * addresses only the URL, without additional headers. The
         * cached phrase is available for all applications and further
         * sessions.
         *
         * @param text Text to say.
         * @param language TTS language.
         * @param ttsoptions Optional parameters for TTS. Note that
         * support of the {@link TTSOptions#pitch} parameter depends on
         * the language and dictionary used. For unsupported
         * combinations the {@link PlayerEvents.PlaybackFinished} event
         * will be triggered with error 400.
         */
        export function createTTSPlayer(text: string, language?: Language, ttsoptions?: TTSOptions);

        /**
         * Create new audio player with specified ToneScript sequence.
         * Media streams can later be attached using the
         * {@link Call#sendMediaTo} method etc.
         *
         * @param script ToneScript string.
         * @param loop Looped playback.
         */
        export function createToneScriptPlayer(script: string, loop?: boolean);

        /**
         * Creates a new audio player with specified audio file URL.
         * Maximum audio file size is 10 megabytes. Media streams can
         * later be attached using the {@link Call#sendMediaTo} method
         * etc. Supported formats are: mp3, ogg & flac (mp3, speex,
         * vorbis and flac codecs respectively). After the very first
         * playing, a file will be cached; each 'createURLPlayer'
         * instance stores the cache data up to 2 weeks. Note that cache
         * addresses only the URL, without additional headers. The
         * cached file is available for all applications and further
         * sessions.
         *
         * @param url URL of media file.
         * @param loop Looped playback.
         * @param onPause If it's true, the player will set on pause
         * right after creation. To continue playback use the
         * {@link Player#resume} method. It's false by default.
         */
        export function createURLPlayer(url: string, loop?: boolean, onPause?: boolean);
    }
}
