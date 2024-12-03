<style>.clickable {
  cursor: pointer;
  transform: scale(100%);
  transition: opacity 0.1s, scale 0.05s;
  transition-timing-function: cubic-bezier(0, 0.55, 0.45, 1);
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

.clickable:hover {
  opacity: 100%;
  background-color: rgba(255, 255, 255, 0.1);
}

.clickable:active {
  transform: scale(90%);
  opacity: 90%;
  background-color: rgba(255, 255, 255, 0.05);
}

a {
  color: white;
  text-decoration: none;
}

a:hover {
  color: white;
}</style>

<script>export let width = "default";
export let height = "default";
export let onClick = void 0;
export let onContextMenu = void 0;
export let style = "";
function handleClick(event) {
  if (typeof onClick === "function")
    onClick(event);
}
function handleContextMenu(event) {
  if (typeof onContextMenu === "function") {
    event.preventDefault();
    onContextMenu(event);
  }
}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
    class="clickable"
    on:click={handleClick}
    on:contextmenu={handleContextMenu}
    style={style}
    style:width={width}
    style:height={height}
>
    {#if typeof onClick === 'string'}
        <a href={onClick}><slot></slot></a>
    {:else}
        <slot></slot>
    {/if}
</div>
