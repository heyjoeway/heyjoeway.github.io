<script>import { currentTheme } from "./Theming";
export let value;
function rgba2rgb(rgba) {
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