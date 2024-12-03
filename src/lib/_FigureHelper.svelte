<style lang="scss">

figure {
    display: inline-block;
    width: 100%;
    margin-top: 8px;
    margin-bottom: 8px;
    --item-min-width: 195px;
    
    &.has-frame {
        margin: 0px;
    }
    
    // Contents
    & > .contents {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
        gap: 16px;

        // Individual items
        & > :global(*) {
            flex-basis: var(--item-min-width);
            min-width: var(--item-min-width);
            flex-grow: 1;
            max-height: 512px;
            height: auto;
        }
    }
    
    // Caption
    .caption {
        text-align: center;
        margin: 8px;
    }
    
    @media (min-width: 600px) {
        &.float-right, &.float-left {
            width: 350px;
        }
    }
    
    &.figure-original > div > * {
        flex-basis: unset;
        min-width: 0;
        flex-grow: 0;
        max-height: none;
    }
}

.fig-right, .fig-left {
    padding: 8px;
    text-align: center;
    display: block;
    
    & > *:not(:last-child) {
        padding-bottom: 8px;
    }
}

@media (min-width: 600px) {
    .fig-right, .fig-left {
        width: var(--item-min-width);
    }
    
    .fig-right {
        margin-right: 0;
    }
    
    .fig-left {
        margin-right: 0;
    }
}

.fig-right {
    float: right;
}

.fig-left {
    float: left;
}

</style>

<script lang="ts">

export let itemMinWidth = '300px';
export let align: 'left' | 'right' | undefined = undefined;
export let hasFrame = false;

</script>

<figure
    class:fig-right={align === 'right'}
    class:fig-left={align === 'left'}
    class:figure-original={true}
    class:has-frame={hasFrame}
    style="--item-min-width:{itemMinWidth}"
>
    <div class="contents">
        <slot></slot>
    </div>
    <div class="caption">
        <slot name="caption"></slot>
    </div>
</figure>



    