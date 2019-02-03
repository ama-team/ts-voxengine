export = Crypto;

declare global {
    export namespace Crypto {
        /**
         * Calculates MD5 hash. Can be used with HTTP requests that
         * require hash.
         *
         * @param data String to calculate hash of.
         */
        export function md5(data: string | number[]): string;

        /**
         * Calculates SHA1 hash. Can be used with HTTP requests that
         * require hash.
         *
         * @param data String to calculate hash of.
         */
        export function sha1(data: string): string;

        /**
         * Calculates SHA256 hash of the specified data.
         *
         * @param data String to calculate hash of.
         */
        export function sha256(data: string): string;

        /**
         * Calculates HMAC-SHA256 hash of the specified data.
         *
         * @param key_string Key for calculation purposes
         * @param data_string String to calculate hash of
         */
        export function hmac_sha256(key_string: string, data_string: string): string;
    }
}
