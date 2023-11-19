<script>
  import { onMount } from "svelte";
    console.log('Container: initialized')
    onMount(() => {
        console.log("Container: mounted")
    })

</script>

<h1>The container of things</h1>
<slot/>
<p>invisible things</p>