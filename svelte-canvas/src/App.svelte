<script lang="ts">
    import Canvas from "./lib/Canvas.svelte";
    import Line from "./lib/Line.svelte";
  import type { TPoint } from "./types";

    function followMouse(e: any) {
        let rect = e.target.getBoundingClientRect()
        end = [e.clientX - rect.left, e.clientY - rect.top]
    }

    let start = [0, 0] as TPoint
    let end = [0, 0] as TPoint
</script>

<main>
    <Canvas on:mousemove={followMouse} on:mouseleave={() => {
        end = [0, 0]
    }}>
        <Line {start} {end}/>
    </Canvas>
</main> 