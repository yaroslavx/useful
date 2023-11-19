<script lang='ts'>
    import { onMount } from "svelte";
    let canvasElement: HTMLCanvasElement

    onMount(() => {
        let ctx = canvasElement.getContext('2d')

        ctx && drawLine(ctx, [10, 20], [150, 200])

        ctx && drawLine(ctx, [10, 40], [150, 120])
    });

    type Point = [number, number]
    function drawLine(ctx: CanvasRenderingContext2D, start: Point, end: Point) {
        ctx.beginPath()
        ctx.moveTo(...start)
        ctx.lineTo(...end)
        ctx.stroke()
    }
</script>

<canvas bind:this={canvasElement}/>