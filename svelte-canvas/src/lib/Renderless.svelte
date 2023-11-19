<script lang='ts'>
    import {onMount} from 'svelte'
    export let id:string = 'NoId'
    console.log(`Renderless ${id}: initialized`)
    onMount(() => {
        console.log(`Renderless ${id}: mounted`)
    })
</script>