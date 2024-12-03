<script lang="ts">

import { currentTheme } from "./Theming";

export let value: string;

function rgba2rgb(rgba: string) {
    // Discard the alpha value
    let [r, g, b] = rgba.replace("rgba(", "").replace(")", "").split(",").map((x) => parseInt(x));
    return `rgb(${r}, ${g}, ${b})`;
}

</script>

<option
    value={value}
    style:color={$currentTheme.text.primary.color}
    style:background-color={rgba2rgb($currentTheme.textfield.background.color)}
>
    <slot></slot>
</option>