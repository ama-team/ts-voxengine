export = AI;

declare global {
    export namespace AI {
        export enum DialogflowLanguage {
            /**
             * Chinese Simplified. Supported features: Recognition,
             * Sentiment Analysis.
             */
            CHINESE_CN,

            /**
             * Chinese Cantonese. Supported features: Recognition.
             */
            CHINESE_HK,

            /**
             * Chinese Traditional. Supported features: Recognition,
             * Sentiment Analysis.
             */
            CHINESE_TW,

            /**
             * Danish. Supported features: Recognition.
             */
            DANISH,

            /**
             * Dutch. Supported features: Recognition, Text-to-Speech.
             */
            DUTCH,

            /**
             * US English. Supported features: Recognition,
             * Text-to-Speech, Knowledge Connectors, Sentiment Analysis.
             */
            ENGLISH,

            /**
             * Australian English. Supported features: Recognition,
             * Text-to-Speech, Knowledge Connectors.
             */
            ENGLISH_AU,

            /**
             * Canadian English. Supported features: Recognition,
             * Text-to-Speech, Knowledge Connectors.
             */
            ENGLISH_CA,

            /**
             * British English. Supported features: Recognition,
             * Text-to-Speech, Knowledge Connectors.
             */
            ENGLISH_GB,

            /**
             * Indian English. Supported features: Recognition,
             * Text-to-Speech, Knowledge Connectors.
             */
            ENGLISH_IN,
            /**
             * US English (equivalent to DialogflowLanguage.ENGLISH).
             * Supported features: Recognition, Text-to-Speech,
             * Knowledge Connectors, Sentiment Analysis.
             */
            ENGLISH_US,

            /**
             * French. Supported features: Recognition, Text-to-Speech,
             * Sentiment Analysis.
             */
            FRENCH,

            /**
             * Canadian French. Supported features: Recognition,
             * Text-to-Speech.
             */
            FRENCH_CA,

            /**
             * France (equivalent to DialogflowLanguage.FRENCH).
             * Supported features: Recognition, Text-to-Speech,
             * Sentiment Analysis.
             */
            FRENCH_FR,

            /**
             * German. Supported features: Recognition, Text-to-Speech,
             * Sentiment Analysis.
             */
            GERMAN,

            /**
             * Hindi. Supported features: Recognition.
             */
            HINDI,

            /**
             * Indonesian. Supported features: Recognition.
             */
            INDONESIAN,

            /**
             * Italian. Supported features: Recognition, Sentiment
             * Analysis.
             */
            ITALIAN,

            /**
             * Japanese. Supported features: Recognition,
             * Text-to-Speech, Sentiment Analysis.
             */
            JAPANESE,

            /**
             * Korean. Supported features: Recognition, Sentiment
             * Analysis.
             */
            KOREAN,

            /**
             * Norwegian. Supported features: Recognition.
             */
            NORWEGIAN,

            /**
             * Portuguese. Supported features: Recognition,
             * Text-to-Speech, Sentiment Analysis.
             */
            PORTUGUES,

            /**
             * Brazilian portuguese. Supported features: Recognition,
             * Text-to-Speech.
             */
            PORTUGUESE_BR,

            /**
             * Russian. Supported features: Recognition.
             */
            RUSSIAN,

            /**
             * Spanish. Supported features: Recognition, Text-to-Speech,
             * Sentiment Analysis.
             */
            SPANISH,

            /**
             * Latin American Spanish. Supported features: Recognition.
             */
            SPANISH_419,

            /**
             * Spanish (equivalent to DialogflowLanguage.SPANISH). Supported features: Recognition, Text-to-Speech, Sentiment Analysis.
             */
            SPANISH_ES,

            /**
             * Swedish. Supported features: Recognition.
             */
            SWEDISH,

            /**
             * Thai. Supported features: Recognition.
             */
            THAI,

            /**
             * Ukranian. Supported features: Recognition.
             */
            UKRANIAN,

            /**
             * Brazilian Portuguese. Supported features: Recognition,
             * Text-to-Speech.
             */
            PORTUGUES_BR
        }
    }
}
