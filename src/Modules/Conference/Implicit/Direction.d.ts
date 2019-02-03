export = Conference;

declare global {
    export namespace Conference {
        export namespace Implicit {
            export type Direction = 'SEND' | 'RECEIVE' | 'BOTH';
        }
    }
}
