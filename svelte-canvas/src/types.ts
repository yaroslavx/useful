export type TPoint = [number, number];
export type TDrawFn = (ctx: CanvasRenderingContext2D) => void;
export type TCanvasContext = {
  addDrawFn: (fn: TDrawFn) => void;
  removeDrawFn: (fn: TDrawFn) => void;
};
