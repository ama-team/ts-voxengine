export = VoxEngine;

declare global {
    export namespace VoxEngine {
        export namespace $Implicit {
            export namespace MediaUnit {
                export type Target = Call | Conference | ASR | Player | Recorder;
            }
        }
    }
}
