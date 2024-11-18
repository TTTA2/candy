<script lang="ts">
    import { Divider, ListItemButton } from "m3-svelte";


    import type { Config } from "../type";

    const { config, division } : { config: Config, division: string } = $props();

    const div = $derived(config.divisions.find(d => d.id == division));

    let select1 = $state("");
    let select2 = $state("");



</script>

<div class="grid">

    <div class="horizonSplit">

        <div class="listBox">
            <div class="caption">1階層</div>
            <div class="list">    
                {#each div?.templates ?? [] as d}
                    {#if d.parentId == undefined} 
                        <ListItemButton headline={d.name} lines={1}></ListItemButton>
                    {/if}
                {/each}
            </div>
        </div>


        <div class="listBox">
            <div class="caption">1階層</div>
            <div class="list">    
                {#each div?.templates ?? [] as d}
                    {#if d.parentId == undefined} 
                        <ListItemButton headline={d.name} lines={1}></ListItemButton>
                    {/if}
                {/each}
            </div>
        </div>

        
    </div>


    <!-- <div>{div?.name}</div> -->

</div>

<style>

    .grid {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: 0.3fr minmax(0, 0.7fr);
    }

    .horizonSplit {
        height: 100%;
        display: grid;
        grid-template-rows: 0.5fr 0.5fr;
        /* grid-template-rows: minmax(0, 0.5fr) minmax(0, 0.5fr); */
    }

    .list {
        padding: 8px;
        overflow: auto;
        display: flex;
        flex-direction: column;
        background-color: rgb(var(--m3-scheme-surface-container-high))
    }

    .listBox {
        padding: 6px;
        display: grid;
        grid-template-rows: auto 1fr;
    }

    .caption {

    }

</style>