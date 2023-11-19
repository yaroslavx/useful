<script lang='ts'>
  import { getContext, onDestroy, onMount } from 'svelte';
    import type { TCanvasContext, TPoint } from '../types'

    export let start: TPoint
    export let end: TPoint

    let canvasContext = getContext("canvas") as TCanvasContext

    onMount(() => {
        canvasContext.addDrawFn(draw)
    })

    onDestroy(() => {
        canvasContext.removeDrawFn(draw)
    })

    function draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.moveTo(...start);
        ctx.lineTo(...end);
        ctx.stroke();
    }
</script>