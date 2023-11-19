<script lang='ts'>
    import { onDestroy, onMount, setContext } from "svelte";
    import type { TDrawFn} from '../types'

    export let clearFrames: boolean = true

    let canvasElement: HTMLCanvasElement
    let fnsToDraw = [] as TDrawFn[]
    let frameId: number

    setContext("canvas", {
        addDrawFn: (fn: TDrawFn) => {
            fnsToDraw.push(fn)
        },

        removeDrawFn: (fn: TDrawFn) => {
            let index = fnsToDraw.indexOf(fn)
            if (index > -1) {
                fnsToDraw.splice(index, 1)
            }
        }
    })

    onMount(() => {
        let ctx = canvasElement.getContext('2d')
        frameId = requestAnimationFrame(() => ctx && draw(ctx))
    })

    onDestroy(() => {
        if (frameId) {
            cancelAnimationFrame(frameId)
        }
    })

    function draw(ctx: CanvasRenderingContext2D) {
        if (clearFrames) {
            ctx.clearRect(0, 0, canvasElement.width, canvasElement.width)
        }

        fnsToDraw.forEach(fn => fn(ctx))
        frameId = requestAnimationFrame(() => draw(ctx))
    }
</script>

<canvas on:mousemove on:mouseleave bind:this={canvasElement}/>
<slot/>