export {
    base64_decode,
    base64_encode,
    hex2bytes,
    bytes2hex,
    str2bytes,
    bytes2str,
    setInterval,
    clearInterval,
    setTimeout,
    clearTimeout,
    uuidgen
};

declare global {
    /**
     * Evaluates to given data decoded via Base64 encoding.
     *
     * @param data Data to decode.
     */
    export function base64_decode(data: string): number[];

    /**
     * Evaluates to given data encoded via Base64 encoding.
     *
     * @param data String or array of numbers to encode.
     */
    export function base64_encode(data: string | number[]): string;

    /**
     * Creates an array of numbers from parsing a hex string.
     *
     * @param data Hex string like "cafec0de".
     */
    export function hex2bytes(data: String): number[];

    /**
     * Creates a hex string from given bytes array.
     *
     * @param data Array of numbers to convert into a string.
     * @param toUpperCase If set to 'true', resulting string will have
     * uppercase 'A-F' chars. Default is 'false'.
     */
    export function bytes2hex(data: number[], toUpperCase?: boolean): string;

    /**
     * Creates an array of numbers from parsing string in specified codepage.
     *
     * @param data String to parse.
     * @param encoding String encoding, "utf-8" by default.
     */
    export function str2bytes(data: string, encoding?: string): number[];

    /**
     * Given array of numbers create a string from them using specified encoding.
     *
     * @param data Array of numbers to create a string from.
     * @param encoding Encoding to use for string creation, "utf-8" by default.
     */
    export function bytes2str(data: number[], encoding?: string): string;

    /**
     * The setInterval() method repeatedly calls a function or executes a
     * code snippet, with a fixed time delay between each call.
     *
     * @param callback A function to be executed every delay milliseconds.
     * The function is not passed any parameters, and no return value is
     * expected.
     * @param delay The time, in milliseconds (thousandths of a second),
     * the timer should delay in between executions of the specified
     * function or code. If this parameter is less than 10, a value of 10
     * is used. Note that the actual delay may be longer.
     */
    export function setInterval(callback: () => void, delay: number): number;

    /**
     * The clearInterval() method cancels a timed, repeating action which
     * was previously established by a call to {@link setInterval()}.
     *
     * @param intervalID The identifier of the repeated action you want to
     * cancel. This ID was returned by the corresponding call to
     * {@link setInterval()}.
     */
    export function clearInterval(intervalID: number): void;

    /**
     * The setTimeout() method sets a timer which executes a function or
     * specified piece of code once after the timer expires.
     *
     * @param callback A function to be executed after the timer expires.
     * @param delay The time, in milliseconds (thousandths of a second),
     * the timer should wait before the specified function or code is
     * executed. If this parameter is omitted, a value of 0 is used,
     * meaning execute "immediately", or more accurately, as soon as
     * possible. Note that in either case, the actual delay may be
     * longer than intended.
     */
    export function setTimeout(callback: () => void, delay: number): number;

    /**
     * The clearTimeout() method cancels a timeout previously established
     * by calling {@link setTimeout()}.
     *
     * @param timeoutID The identifier of the timeout you want to cancel.
     * This ID was returned by the corresponding call to
     * {@link setTimeout()}.
     */
    export function clearTimeout(timeoutID: number): void;

    /**
     * Generates unique identifier and returns it's string representation.
     */
    export function uuidgen(): string;
}
