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
        margin-bottom: 1em;
    }
    
    .copy-button {
        position: absolute;
        top: 7px;
        right: 7px;
        height: 26px;
        overflow: hidden;
        z-index: 1;
    }
    
    pre {
      overflow: auto;
      padding-right: 32px; 
    }
</style>