import { MultiResult, request } from "@nativescript-community/perms";

export async function startAppPermissions(): Promise<void> {
    const permissions: MultiResult = await request({
        bluetooth: {},
        bluetoothConnect: {},
        bluetoothScan: {},
        location: {},
    })
    console.log(permissions);
    return;
}
