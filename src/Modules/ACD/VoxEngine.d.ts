export = VoxEngine;

declare global {
    export namespace VoxEngine {
        /**
         * Adds a new request to the specified queue. The request will be
         * dispatched to the free operator according to the operator's
         * status (must be "Ready") and skills.
         *
         * @param queueName The name of the queue, where the call will be
         * directed. Queue name must be specified exactly as in the Control
         * panel.
         * @param callerid ID of the caller which will be put to the queue.
         * After request is dispatched to the operator, it's possible to get
         * this ID by assigning a handler to the
         * {@link ACDEvents.OperatorReached} event. In the operatorCall
         * property will be stored a call, so you can use the
         * {@link Call.callerid()} method. IMPORTANT: virtual numbers rented
         * from Voximplant can't be used as CallerID, use only real numbers.
         * @param params Object with extra parameters.
         */
        function enqueueACDRequest(queueName: string, callerid: string, params?: ACDEnqueueParams): ACDRequest;
    }
}
