export function repeatUntilMinLength<T>(arr: T[], min: number): T[] {
  let output = [...arr];
  while (output.length < min) {
    output = [...output, ...arr];
  }
  return output.slice(0, min);
}
