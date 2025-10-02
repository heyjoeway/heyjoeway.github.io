<script lang="ts">
    import ExpItem from "./ExpItem";
    import Citation from "./Citation.svelte";
    
    export let item: ExpItem;
</script>

<li>
    {#if item.citation && typeof item.citation === 'string'}
        <a href={item.citation}>
            {@html item.text}
        </a>
    {:else if item.citation && typeof item.citation === 'object'}
        <Citation post={item.citation}>
            {@html item.text}
        </Citation>
    {:else}
        {@html item.text}
    {/if}
</li>

{#each item.children as child}
    <ul>
        <!--
        I don't know why you'd ever want to create a recursive item list
        but if you did this is where it would crash the compiler
        -->
        <svelte:self item={child} />
    </ul>
{/each}

<style lang="scss">
    a {
        &::before {
            content: "🔗 ";
        }
    }
    
    @media print {
        a {
            color: inherit;
            &::before {
                content: "";
            }
        }
    }
</style>