<style>div {
  display: flex;
  flex-direction: column;
  position: relative;
  user-select: none;
  gap: 8px;
  box-sizing: border-box;
}

.entry {
  display: flex;
  flex-direction: row;
  gap: 8px;
}
.entry > div {
  flex: 1;
}</style>

<script>import Fa from "svelte-fa";
import { faTrash, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button.svelte";
import Textfield from "./Textfield.svelte";
export let value;
</script>

<div>
    {#each value as text, i}
        <div class="entry">
            <div>
                <Textfield bind:value={text} />
            </div>
            <Button onClick={() => {
                value.splice(i, 1);
                value = value; // trigger reactivity
            }}>
                <Fa icon={faTrash} />
            </Button>
        </div>
    {/each}
    <Button onClick={() => {
        value.push("");
        value = value; // trigger reactivity
    }}>
        <Fa icon={faPlusCircle} />&nbsp;New Item
    </Button>
</div>
