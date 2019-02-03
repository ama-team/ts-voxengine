export = ASREvents;

declare global {
    export namespace ASREvents {
        export type ASRError = Function;
        export type CaptureStarted = Function;
        export type InterimResult = Function;
        export type Result = Function;
        export type SpeechCaptured = Function;
        export type Started = Function;
        export type Stopped = Function;

        export const ASRError: ASRError;
        export const CaptureStarted: CaptureStarted;
        export const InterimResult: InterimResult;
        export const Result: Result;
        export const SpeechCaptured: SpeechCaptured;
        export const Started: Started;
        export const Stopped: Stopped;
    }
    
    export type ASREvents =
        ASREvents.ASRError |
        ASREvents.CaptureStarted |
        ASREvents.InterimResult |
        ASREvents.Result |
        ASREvents.SpeechCaptured |
        ASREvents.Started |
        ASREvents.Stopped;
}
