<script lang="ts">

export let type : "default" | "filled" | "outline" | undefined = undefined;



</script>


<button class="button"><slot></slot></button>

<style>

    .button {
        padding: 5px 16px;
        background-color: var(--background-color1);
        border: 1px solid var(--border-color1);
        border-radius: 6px;
        cursor: pointer;
        user-select: none;
    }

    .button:hover {
        background-color: var(--background-highlight);
    }

</style>