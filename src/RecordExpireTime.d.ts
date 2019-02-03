export = RecordExpireTime;

declare global {
    export enum RecordExpireTime {
        DEFAULT,
        SIXMONTHS,
        ONEYEAR,
        TWOYEARS,
        THREEYEARS
    }
}
