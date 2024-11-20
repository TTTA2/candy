<script lang="ts">

    import type { IdTextPair } from "../../type";

    const { items, selected, onItemClick } : { 
        items: IdTextPair[] | undefined,
        selected: string,
        onItemClick: (id: string, text: string) => void,
    } = $props();

    const handleItemClick = (id: string, text: string) => {
        onItemClick?.call(undefined, id, text);
    }

</script>


<div class="list">

    {#each items ?? [] as item}
        <div class:selected={item.id == selected} class="list-item" onclick={() => handleItemClick(item.id, item.text)}>
            <span>{item.text}</span>
        </div>
    {/each}
</div>

<style>
        
    .list {
        padding: 8px;
        overflow: auto;
        border: 1px solid var(--border-color1);
        background-color: var(--background-color2);
        /* border-radius: 4px; */

    }

    .list-item {
        cursor: pointer;
        padding: 10px;
        border: solid 2px transparent;
        /* height: 40px; */
    }

    .list-item.selected {
        border: solid 2px var(--border-active);
        transition: border-color 0.3s;
        /* transition: outline-color 1s; */
    }

    .list-item:hover {
        background-color: var(--background-selected);
    }

</style>