<script lang="ts">
    import {onMount} from 'svelte'

    import Container from './lib/Container.svelte';
    import Renderless from './lib/Renderless.svelte';
    console.log('App: initialized')
    onMount(() => {
        console.log("App: mounted")
    })

</script>

<main>
    <Container>
        <Renderless id='1'/>
        <Renderless id='2'/>
        <Renderless id='3'/>
    </Container>
</main> 