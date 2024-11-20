<script lang="ts">

    import type { Config, IdTextPair } from "../type";
    import ListBox from "./components/ListBox.svelte";
    import TextView from "./components/TextView.svelte";

    const { config, division } : { config: Config, division: string } = $props();

    const div = $derived(config.divisions.find(d => d.id == division));

    let select1 = $state("");
    let select2 = $state("");
    let select3 = $state("");

    let currentSelect = $state("");

    const items1: IdTextPair[] | undefined = 
    $derived(div?.templates.filter(t => t.parentId == undefined).map(t => ({ id: t.id, text: t.name })));

    const items2: IdTextPair[] | undefined = 
    $derived(div?.templates.filter(t => t.parentId == select1).map(t => ({ id: t.id, text: t.name })));

    const items3: IdTextPair[] | undefined = 
    $derived(div?.templates.filter(t => t.parentId == select2).map(t => ({ id: t.id, text: t.name })));

    const content = $derived(div?.templates.find(t => t.id == currentSelect));

    const onItemClick1 = (id: string) => { 
        currentSelect = id;
        select1 = id;
        select2 = "";
        select3 = "";
    }

    const onItemClick2 = (id: string) => { 
        currentSelect = id;
        select2 = id;
        select3 = "";
    }

    const onItemClick3 = (id: string) => { 
        currentSelect = id;
        select3 = id;
    }

</script>

<div class="grid">

    <div class="horizonSplit">

        <div class="listbox">
            <span class="caption list-tab">1階層</span>
            <ListBox selected={select1} items={items1} onItemClick={onItemClick1}></ListBox>
        </div>

        <div class="listbox">
            <span class="caption list-tab">2階層</span>
            <ListBox selected={select2} items={items2} onItemClick={onItemClick2}></ListBox>
        </div>
        
    </div>

    <div class="single">

        <div class="listbox">
            <span class="caption list-tab">3階層</span>
            <ListBox selected={select3} items={items3} onItemClick={onItemClick3}></ListBox>
        </div>

    </div>

    <TextView content={content?.text ?? ""}></TextView>


    <!-- <div>{div?.name}</div> -->

</div>

<style>

    .grid {
        width: 100%;
        height: 100%;
        padding: 8px;
        display: grid;
        grid-template-columns: 200px 200px 1fr;
        /* grid-template-columns: 0.15fr minmax(0, 0.15fr) 0.7fr; */
        box-sizing: border-box;
        gap: 6px;
    }

    .horizonSplit {
        gap: 6px;
        height: 100%;
        display: grid;
        grid-template-rows: 0.5fr 0.5fr;
        overflow: hidden;
    }

    .single {
        height: 100%;
        overflow: hidden;
    }

    .list-tab {
        background-color: var(--background-color2);
        border: 1px solid var(--border-color1);
        border-bottom: none;
        padding: 2px 16px 2px 16px;
        font-size: 80%;
        border-radius: 4px 4px 0px 0px;
        width: fit-content;
        margin-bottom: -1px;
        z-index: 1;
    }

    .listbox {
        height: 100%;
        overflow: auto;
        display: grid;
        grid-template-rows: auto 1fr;



    }

    .listbox .caption {
        /* padding: 8px 4px 8px 4px; */
        /* color: var(--text-muted); */
        /* border-bottom: 2px solid var(--border-color1); */
    }


    .list-item span {
        cursor: pointer;
    }

    .se {
        display: flex;
        flex-direction: column;
        background-color: currentColor;
        opacity: 0;
        transition: opacity 200ms;

        /* opacity: 0.12; */

        /* box-shadow: var(--m3-util-elevation-2); */

    }

 

</style>