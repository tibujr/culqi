const EventBridge = require('aws-sdk/clients/eventbridge')
const eventBridgeInstance = new EventBridge();

async function emit(args, error, processName, action) {
    const numReintento = args[0].numReintento || 0;
    const eventBusName = process.env.AWS_EVENT_BUS_NAME_ERRORS
    const {disableRetry} = error
    const detail = {
        proceso: processName,
        numReintento: numReintento,
        request: {
            nombreFuncion: process.env.FUNCTION_NAME,
            action,
            payload: args[0]
        },
        nombreFuncion: process.env.FUNCTION_NAME,
        motivoError: error,
        deshabilitarReintentos: disableRetry
    }

    const params = {
        Entries: [
            {
                Source: 'errors',
                DetailType: `errors.payment`,
                EventBusName: eventBusName,
                Time: new Date(),
                Detail: JSON.stringify(detail)
            }
        ]
    };
    await eventBridgeInstance.putEvents(params).promise();
}

export default emit;
