<!--
  This is only for code in articles, not the feed.
  And I'm gonna be honest, the only reason I'm doing this is to add a copy button.
-->

<script lang="ts">
    import { highlightCode } from "$lib/JSUtils.js";
    
    export let lang: string;
    export let code: string;
</script>

{@html highlightCode(code, lang)}