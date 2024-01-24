import "@nativescript/core/globals";
import { Bluetooth } from "@nativescript-community/ble";


globalThis.onmessage = async (message: MessageEvent<any>) => {
    const success = false;
    const data: any = {};
    switch (message.data.type) {
        case 'scan':        
            await handleScanMessage();
            break;
        default:
            break;
    }
};

globalThis.onerror = (err) => {
    throw Error(`An unhandled error occurred in worker`);
};

async function handleScanMessage() {
    console.log('starting handleScanMessage inside worker');
    let communicator;
    try {
        communicator = new Bluetooth();
        console.log('successfully initialized bluetooth inside worker');
        const hasPermissions = await communicator.hasLocationPermission();
        console.log(`Worker bluetooth has permissions? ${hasPermissions}`);
    } catch (err: any) {
        console.log('error to initilize bluetooth inside the worker');
        console.log(err, err.stack);
    }
    return;
}