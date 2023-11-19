<script lang='ts'>
    import { onMount, setContext } from "svelte";
    import type { TDrawFn} from '../types'

    let canvasElement: HTMLCanvasElement
    let fnsToDraw = [] as TDrawFn[]

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
        ctx && draw(ctx)
    })

    function draw(ctx: CanvasRenderingContext2D) {
        fnsToDraw.forEach(fn => fn(ctx))
    }
</script>

<canvas bind:this={canvasElement}/>
<slot/>