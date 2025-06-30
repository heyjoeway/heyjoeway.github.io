<!--
  This is only for code in articles, not the feed.
  And I'm gonna be honest, the only reason I'm doing this is to add a copy button.
-->

<script lang="ts">
    import { highlightCode } from "$lib/JSUtils.js";
    import Button from "$joeysvelte/Button.svelte";
    
    export let lang: string;
    export let code: string;
</script>

<div class="code-container">
    <div class="copy-button">
      <Button
        height="26px"
        copyOnClick={code}
      >
        📋
      </Button>
    </div>
    <pre><code>{@html highlightCode(code, lang)}</code></pre>
</div>

<style>
    .code-container {
        position: relative;
        margin: 1em 0;
    }
    code {
      padding-right: 32px;
    }
    .copy-button {
        position: absolute;
        top: 4px;
        right: 4px;
        height: 26px;
        overflow: hidden;
        z-index: 1;
    }
</style>