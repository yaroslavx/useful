<script lang="ts">
    import Canvas from "./lib/Canvas.svelte";
    import Line from "./lib/Line.svelte";
</script>

<main>
    <Canvas>
        <Line start={[10, 20]} end={[100, 200]}/>
        <Line start={[20, 30]} end={[200, 300]}/>
    </Canvas>
</main> 