export = PhoneNumber;

declare global {
    export namespace PhoneNumber {
        type ErrorEnum =
            'INVALID_COUNTRY_CODE' |
            'NOT_A_NUMBER' |
            'TOO_SHORT_AFTER_IDD' |
            'TOO_SHORT_NSN' |
            'TOO_LONG_NSN';

        type NumberTypeEnum =
            'FIXED_LINE' |
            'MOBILE' |
            'FIXED_LINE_OR_MOBILE' |
            'TOLL_FREE' |
            'PREMIUM_RATE' |
            'SHARED_COST' |
            'VOIP' |
            'PROFESSIONAL_NUMBER';

        /**
         * Phone number information.
         */
        export interface Info {

            /**
             * Optional error string. Possible values are:
             *
             * - INVALID_COUNTRY_CODE
             * - NOT_A_NUMBER
             * - TOO_SHORT_AFTER_IDD
             * - TOO_SHORT_NSN
             * - TOO_LONG_NSN
             */
            readonly error: ErrorEnum;
            /**
             * Is number possible in specified country (just by analyzing
             * length infomation).
             */
            readonly isPossibleNumber: boolean;
            /**
             * Is number valid in specified country.
             */
            readonly isValidNumber: boolean;
            /**
             * Is number valid in detected region.
             */
            readonly isValidNumberForRegion: boolean;
            /**
             * Number in international E.164 format, starting with +.
             */
            readonly number: string;
            /**
             * Number type, one of:
             *
             * - FIXED_LINE
             * - MOBILE
             * - FIXED_LINE_OR_MOBILE
             * - TOLL_FREE
             * - PREMIUM_RATE
             * - SHARED_COST
             * - VOIP
             * - PERSONAL_NUMBER
             * - PAGER
             * - UAN
             * - VOICEMAIL
             * - UNKNOWN
             */
            readonly numberType: NumberTypeEnum;
            /**
             * 2-digit country code of specified phone number (ISO 3166-1).
             */
            readonly region: string;
        }
    }
}
