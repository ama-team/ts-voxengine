import '../src'

VoxEngine.addEventListener(AppEvents.CallAlerting, event => {
    Logger.write(PhoneNumber.getInfo(event.callerid, 'ru').number);
});

declare const event: AppEvents.Started.Event;
