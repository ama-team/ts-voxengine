export = VoxEngine;

declare global {
    export namespace VoxEngine {
        export namespace $Implicit {
            export namespace MediaUnit {
                export interface Source {
                    /**
                     * Start sending media (voice and video) from this media
                     * unit to unit specified in targetMediaUnit. The target
                     * call has to be {@link CallEvents.Connected} earlier.
                     * IMPORTANT: each source media unit can send media to any
                     * number of other media units, but target media unit
                     * can receive only one audio stream. A new incoming
                     * stream always replaces the previous one.
                     *
                     * @param targetMediaUnit Media unit that will receive
                     * media.
                     */
                    sendMediaTo(targetMediaUnit: Target): void;

                    /**
                     * Stop sending media (voice and video) from this media unit
                     * to unit specified in targetMediaUnit.
                     */
                    stopMediaTo(targetMediaUnit: Target): void;
                }
            }
        }
    }
}
