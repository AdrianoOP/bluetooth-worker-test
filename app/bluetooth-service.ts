import { Bluetooth } from "@nativescript-community/ble";

export async function iniatializeBluetoothScanMainThread() {
    console.log('starting iniatializeBluetoothScan inside main thread');
    try {
        const communicator = new Bluetooth();
        console.log('successfully initialized bluetooth inside the main thread');
        const hasPermissions = await communicator.hasLocationPermission();
        console.log(`Worker bluetooth has permissions main thread? ${hasPermissions}`);
    } catch (err: any) {
        console.log('error to initilize bluetooth inside the main thread');
        console.log(err, err.stack);
    }
    return;
}

export async function iniatializeBluetoothScanWorker() {
    const bluetoothWorker = new Worker('~/bluetooth-worker');
    bluetoothWorker.postMessage({
        type: 'scan',
        payload: 'starting bluetooth scan in the worker'
    });
    bluetoothWorker.onmessage = ((message) => {
        console.log(message);
    });
    bluetoothWorker.onmessageerror = ((error) => {
        console.log('error');
        console.log(error);
    })
}