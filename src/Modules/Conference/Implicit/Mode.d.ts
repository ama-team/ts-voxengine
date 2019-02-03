export = Conference;

declare global {
    export namespace Conference {
        export namespace Implicit {
            export type Mode = 'MIX' | 'FORWARD';
        }
    }
}
