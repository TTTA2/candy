<script lang="ts">

const { content } : { content: string } = $props();

</script>

<div class="view">
    {content}
</div>

<style>

    .view {
        width: 100%;
        height: 100%;
        background-color: var(--background-color2);
        border: 1px solid var(--border-color1);
        white-space: pre;
        box-sizing: border-box;
        padding: 8px;
        overflow: auto;
    }

</style>


