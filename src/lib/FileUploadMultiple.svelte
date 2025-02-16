<script lang="ts">
    import { humanReadableSize } from "./Utils";

    export let name: string;
    export let files: FileList | null = null;

    function handleFileChange(event: Event) {
        const input = event.target as HTMLInputElement;
        files = input.files;
    }
    
    function removeFile(fileToRemove: File) {
        if (files) {
            const dataTransfer = new DataTransfer();
            Array.from(files).forEach(file => {
                if (file !== fileToRemove) {
                    dataTransfer.items.add(file);
                }
            });
            files = dataTransfer.files;
        }
    }
</script>


<div class="container">
    {#if files}
        <div class="items">
            {#each Array.from(files) as file}
                <div>
                    <!-- svelte-ignore a11y_click_events_have_key_events -->
                    <!-- svelte-ignore a11y_no_static_element_interactions -->
                    <div class="item" on:click={() => removeFile(file)}>
                        {#if file.type.startsWith('image/')}
                            <img src={URL.createObjectURL(file)} alt={file.name} width="48" height="48">
                        {/if}
                        <div>
                            <div>
                                {file.name}
                            </div>
                            <div class="size">
                                {humanReadableSize(file.size)}
                            </div>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    {/if}
    <div class="filedrop">
        <div>
            📄 Drag files here, or click to select.
        </div>
        <input type="file" name={name} multiple on:change={handleFileChange}>
    </div>
</div>

<style lang="scss">
    .filedrop { 
        position: relative;
    }
    
    input {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0;
        
    }
    
    .items {
        font-size: 10px;
        
        & > div {
            display: inline-block;
            margin: 8px;
        }
    }

    .item {
        position: relative;
        
        ::after {
            content: "🗑️";
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 24px;
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            opacity: 0;
            transition: opacity 0.1s;
        }
        :hover::after {
            opacity: 1;
            background: rgba(32,8,8,0.5);
            border-radius: 8px;
            backdrop-filter: blur(8px);
        }
        
        
        display: flex;
        
        border: none;
        padding: 8px;
        border-radius: 8px;
        backdrop-filter: blur(32px);
        box-sizing: border-box;
        gap: 8px;
        align-items: center;
        
        img {
            border-radius: 8px;
            object-fit: cover;
        }
        
        & > div {
            display: flex;
            flex-direction: column;
            // align-items: center;
            justify-content: center;
            
            .size {
                opacity: .5;
                font-weight: bold;
            }
        }
    }
</style>