<script lang="ts">
    import {onMount} from 'svelte'
    import Canvas from './lib/Canvas.svelte';
    
    console.log('App: initialized')
    onMount(() => {
        console.log("App: mounted")
    })

</script>

<main>
    <Canvas/>
</main> 