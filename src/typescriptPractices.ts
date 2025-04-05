export function replacingArrayValuesInTheExtremes(
  entries: number[],
  ext: number,
  newVal: number
): number[] {
  return [
    ...new Array(ext).fill(newVal),
    ...entries.slice(ext, ext),
    ...new Array(ext).fill(newVal),
  ];
}

// Same as above but without the memory inefficiency
export function simulate(entries: number[], s: number): number[] {
  return entries.map((entry, index) =>
    index < s || index >= entries.length - s ? -1 : entry
  );
}
