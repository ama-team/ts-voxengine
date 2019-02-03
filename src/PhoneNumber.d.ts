import './PhoneNumber/Info';

declare global {
    export namespace PhoneNumber {
        /**
         * Get phone number info.
         *
         * @param number Phone number in country specific format, or E.164
         * if starts with `+`.
         * @param country 2-digit country code to get number format, if not
         * specified, number is treated as E.164, e.g. "RU", "US".
         *
         * @example Transform number dialed in US format to international
         * format:
         *
         * ```javascript
         * let a = PhoneNumber.getInfo("01174951234567", "US").number;
         * ```
         *
         * @example Get the region name of the caller's number:
         *
         * ```javascript
         * VoxEngine.addEventListener(AppEvents.CallAlerting, (e) => {
         *     const region = PhoneNumber.getInfo(e.callerid).region;
         *     Logger.write(region);
         * });
         * ```
         */
        function getInfo(number: string, country: string): Info;
    }
}
