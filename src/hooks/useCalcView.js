export function useCalcView(view) {
  if (!view) return "";
  if (view < 1_000) return `${view}회`;
  else if (view < 10_000) return `${(view / 1_000).toFixed(1)}천회`;
  else if (view < 100_000) return `${(view / 10_000).toFixed(1)}만회`;
  else return `${Math.trunc(view / 10_000)}만회`;
}
