<script lang='ts'>
    import { onMount } from "svelte";
    import { iniatializeBluetoothScanMainThread, iniatializeBluetoothScanWorker } from "~/bluetooth-service";
    import { startAppPermissions } from "~/permission-utils";

    let message: string = "Testing Bluetooth with Worker"

    onMount(async () => {
        await startAppPermissions();
    });

    async function handleBluetoothWorker() {
        await iniatializeBluetoothScanWorker();
    }

    async function handleBluetoothMainThread() {
        await iniatializeBluetoothScanMainThread();
    }
</script>

<page>
    <actionBar title="Home" />
    <flexboxLayout flexDirection="column">
        <label class="info">
            <formattedString>
                <span class="fas" text="&#xf135;" />
                <span text=" {message}" />
            </formattedString>
        </label>
        <button class="-primary" on:tap={handleBluetoothMainThread}>
            BT in the main thread
        </button>
        <button class="-primary" on:tap={handleBluetoothWorker}>
            BT in the worker
        </button>
    </flexboxLayout>
</page>

<style>
    .info .fas {
        color: #3A53FF;
    }

    .info {
        font-size: 20;
        horizontal-align: center;
        vertical-align: center;
    }
</style>
