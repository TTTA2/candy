<script lang="ts">
    import { Button, Dialog, Divider, ListItem, ListItemButton } from "m3-svelte";
    import ViewContainer from "./ViewContainer.svelte";
    import type { Config } from "../type";

    // @ts-ignore
    const config: Config = jsConfig;

    let division = $state(config.divisions[0].id ?? "");
    let divName = $derived(config.divisions.find(d => d.id == division)?.name ?? "");

    let isOpenDivDialog = $state(false);

    const onDivisionClick = (id: string) => {
        division = id;
        isOpenDivDialog = false;
    }

</script>

<div class="grid">

    <nav>

        <Button type={"filled"} on:click={() => isOpenDivDialog = true}>{divName}</Button>

        <Dialog headline="ディビジョン選択" bind:open={isOpenDivDialog} closeOnClick={false}>

            ディビジョンを選択してください

            <div class="list">
                {#each config.divisions as div}
                    <ListItemButton headline={div.name} lines={1} on:click={() => onDivisionClick(div.id)}></ListItemButton>
                    <Divider></Divider>
                {/each}
            </div>

            <svelte:fragment slot="buttons">
                <Button type="text" on:click={() => (isOpenDivDialog = false)}>キャンセル</Button>
            </svelte:fragment>

        </Dialog>

    </nav>

    <ViewContainer {...{config, division}}>

    </ViewContainer>

</div>


<style>

    .grid {
        display: grid;
        grid-template-rows: auto minmax(0, 1fr);
        height: 100%;
    }

    .list {
        display: flex;
        flex-direction: column;
        background-color: rgb(var(--m3-scheme-surface-container-high))
    }

</style>