import './ASREvents/ASRError';
import './ASREvents/Stopped';
import './ASREvents/CaptureStarted';
import './ASREvents/Started';
import './ASREvents/InterimResult';
import './ASREvents/SpeechCaptured';
import './ASREvents/Result';

export = ASREvents;

declare global {
    export namespace ASREvents {
        export type ASRError = () => ASRError.Event;
        export type CaptureStarted = () => CaptureStarted.Event;
        export type InterimResult = () => InterimResult.Event;
        export type Result = () => Result.Event;
        export type SpeechCaptured = () => SpeechCaptured.Event;
        export type Started = () => Started.Event;
        export type Stopped = () => Stopped.Event;

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
