import './CallEvents/AudioStarted';
import './CallEvents/Connected';
import './CallEvents/Disconnected';
import './CallEvents/Failed';
import './CallEvents/FirstVideoPacket';
import './CallEvents/InfoReceived';
import './CallEvents/MessageReceived';
import './CallEvents/MicStatusChange';
import './CallEvents/OffHold';
import './CallEvents/OnHold';
import './CallEvents/PlaybackFinished';
import './CallEvents/PlaybackReady';
import './CallEvents/RecordError';
import './CallEvents/RecordStarted';
import './CallEvents/RecordStopped';
import './CallEvents/ReInviteAccepted';
import './CallEvents/ReInviteReceived';
import './CallEvents/ReInviteRejected';
import './CallEvents/Ringing';
import './CallEvents/Statistics';
import './CallEvents/ToneDetected';
import './CallEvents/ToneReceived';
import './CallEvents/TransferComplete';
import './CallEvents/VideoTrackCreated';
import './CallEvents/VoicemailToneDetected';
import './CallEvents/VoicemailToneNotDetected';

declare global {
    export namespace CallEvents {
        type AudioStarted = 'Call.AudioStarted';
        type Connected = 'Call.Connected';
        type Disconnected = 'Call.Disconnected';
        type Failed = 'Call.Failed';
        type FirstVideoPacket = 'Call.FirstVideoPacket';
        type InfoReceived = 'Call.InfoReceived';
        type MessageReceived = 'Call.MessageReceived';
        type MicStatusChange = 'Call.MicStatusChange';
        type OffHold = 'Call.OffHold';
        type OnHold = 'Call.OnHold';
        type PlaybackFinished = 'Call.PlaybackFinished';
        type PlaybackReady = 'Call.PlaybackReady';
        type ReInviteAccepted = 'Call.ReInviteAccepted';
        type ReInviteReceived = 'Call.ReInviteReceived';
        type ReInviteRejected = 'Call.ReInviteRejected';
        type RecordError = 'Call.RecordError';
        type RecordStarted = 'Call.RecordStarted';
        type RecordStopped = 'Call.RecordStopped';
        type Ringing = 'Call.Ringing';
        type Statistics = 'Call.Statistics';
        type ToneDetected = 'Call.ToneDetected';
        type ToneReceived = 'Call.ToneReceived';
        type TransferComplete = 'Call.TransferComplete';
        type VideoTrackCreated = 'Call.VideoTrackCreated';
        type VoicemailToneDetected = 'Call.VoicemailToneDetected';
        type VoicemailToneNotDetected = 'Call.VoicemailToneNotDetected';

        /**
         * Event is triggered after remote peer answered the call or set the
         * call into the {@link Call.startEarlyMedia} state. Note that event
         * is not triggered in P2P mode.
         */
        const AudioStarted: AudioStarted;

        /**
         * Event is triggered after an incoming/outgoing call is connected.
         * For incoming call, it happens after the {@link Call.answer} was
         * called. For outgoing call, it happens when a remote peer answers
         * the call.
         */
        const Connected: Connected;

        /**
         * Event is triggered when an established call was terminated. Note
         * that this event doesn't mean the end of the JavaScript session.
         * The session without calls and/or ACD requests will be
         * automatically terminated after some time (see the
         * {@link https://voximplant.com/docs/references/voxengine|session limits}
         * for details). It's a good idea to explicitly terminate the
         * session with {@link VoxEngine.terminate} after it's no longer
         * needed.
         */
        const Disconnected: Disconnected;

        /**
         * Event is triggered when an outgoing call was terminated before
         * it was connected. Most frequent status codes:
         *
         * | Code | Description                                 |
         * |:----:|:--------------------------------------------|
         * | 486  | Destination number is busy                  |
         * | 487  | Request terminated                          |
         * | 603  | Call was rejected                           |
         * | 404  | Invalid number                              |
         * | 480  | Destination number is unavailable           |
         * | 402  | Insufficient funds                          |
         * | 408  | The call was not answered within 60 seconds |
         */
        const Failed: Failed;

        /**
         * Event is triggered when the first video packet was received.
         */
        const FirstVideoPacket: FirstVideoPacket;

        /**
         * Event is triggered when INFO message is received.
         */
        const InfoReceived: InfoReceived;

        /**
         * Event is triggered when Text Message is received.
         */
        const MessageReceived: MessageReceived;

        /**
         * Event is triggered each time when microphone status changes.
         * There is the method for enabling status analyzing -
         * {@link Call.handleMicStatus}.
         */
        const MicStatusChange: MicStatusChange;

        /**
         * Event is triggered when call is taken off hold.
         */
        const OffHold: OffHold;

        /**
         * Event is triggered when call is put on hold.
         */
        const OnHold: OnHold;

        /**
         * Event is triggered when audio/voice playback is completed. Note
         * that the {@link Call.stopPlayback} method finishes any media, so
         * the PlaybackFinished event will be not triggered. The playback
         * may be started by the {@link Call.say} or
         * {@link Call.startPlayback} methods.
         */
        const PlaybackFinished: PlaybackFinished;

        /**
         * The event is triggered by the {@link Call.startPlayback} and
         * {@link Call.say} when 1) the audio file download to the
         * Voximplant cache is finished 2) the audio file is found in the
         * cache (i.e., it was in the cache before).
         */
        const PlaybackReady: PlaybackReady;

        /**
         * Event is triggered when the Voximplant cloud receives the
         * ReInviteRejected message. This message means that a call didn't
         * receive video from the other participant.
         */
        const RecordError: RecordError;

        /**
         * Event is triggered when call recording is started as a result of
         * the {@link Call.record} method call.
         */
        const RecordStarted: RecordStarted;

        /**
         * Event is triggered when call recording is stopped. This happens
         * after the {@link CallEvents.Disconnected} event was triggered.
         */
        const RecordStopped: RecordStopped;

        /**
         * Event is triggered when the Voximplant cloud receives the
         * ReInviteAccepted message. This message means that a call
         * received video from the other participant.
         */
        const ReInviteAccepted: ReInviteAccepted;

        /**
         * Event is triggered when the Voximplant cloud receives the
         * ReInviteReceived message. This message means that a caller:
         * 1) started to send video 2) started/stopped screensharing
         * 3) put a call on hold / took a call off hold.
         */
        const ReInviteReceived: ReInviteReceived;

        /**
         * Event is triggered when the Voximplant cloud receives the
         * ReInviteReceived message. This message means that a caller:
         * 1) started to send video 2) started/stopped screensharing 3)
         * put a call on hold / took a call off hold.
         */
        const ReInviteRejected: ReInviteRejected;

        /**
         * Event is triggered after outgoing call receives progress signal
         * from a remote peer.
         */
        const Ringing: Ringing;

        /**
         * Event is triggered when call statistic changed.
         *
         * @deprecated
         */
        const Statistics: Statistics;

        /**
         * Event is triggered when a call progress tone is detected (either
         * dial tone or busy tone). There is the method for enabling tone
         * detection - {@link Call.detectProgressTone|. Note that: 1) the
         * event is triggered only if the {@link CallEvents.Connected}
         * event was triggered 2) the event is only triggered once in a
         * call session.
         */
        const ToneDetected: ToneDetected;

        /**
         * Event is triggered when a DTMF signal is received. Note that by
         * default DTMF signals will not trigger this event, this behavior
         * needs to be set explicitly by using the
         * {@link Call.handleTones} method.
         */
        const ToneReceived: ToneReceived;

        /**
         * Event is triggered when call transfer complete.
         */
        const TransferComplete: TransferComplete;

        /**
         * The event is triggered after the video track created. This could
         * happen only if the {@code Call.record({video: true})} method was
         * called.
         */
        const VideoTrackCreated: VideoTrackCreated;

        /**
         * Event is triggered each time when voicemail tone is detected.
         * The detection is possible if the {@link Call.detectVoicemailTone}
         * method was called in the scenario. Note that detection is ended
         * after timeout specified in the method (default value is 20
         * seconds).
         */
        const VoicemailToneDetected: VoicemailToneDetected;

        /**
         * Event is triggered when voicemail tone is not detected. The
         * event can be triggered only if the
         * {@link Call.detectVoicemailTone} method was called in the
         * scenario. Note that event is triggered strictly after timeout
         * specified in the method (default value is 20 seconds). Possible
         * causes of detection's failure: interferences or dividing of the
         * signal; complex signal (more than one frequency); the signal is
         * out of the supported range (500 - 2000 Hz).
         */
        const VoicemailToneNotDetected: VoicemailToneNotDetected;
    }

    export type CallEvents =
        CallEvents.AudioStarted |
        CallEvents.Connected |
        CallEvents.Disconnected |
        CallEvents.Failed |
        CallEvents.FirstVideoPacket |
        CallEvents.InfoReceived |
        CallEvents.MessageReceived |
        CallEvents.MicStatusChange |
        CallEvents.OffHold |
        CallEvents.OnHold |
        CallEvents.PlaybackFinished |
        CallEvents.PlaybackReady |
        CallEvents.RecordError |
        CallEvents.RecordStarted |
        CallEvents.RecordStopped |
        CallEvents.ReInviteAccepted |
        CallEvents.ReInviteReceived |
        CallEvents.ReInviteRejected |
        CallEvents.Ringing |
        CallEvents.Statistics |
        CallEvents.ToneDetected |
        CallEvents.ToneReceived |
        CallEvents.TransferComplete |
        CallEvents.VideoTrackCreated |
        CallEvents.VoicemailToneDetected |
        CallEvents.VoicemailToneNotDetected;
}
