export function styleStringToInteger(value: string | number): number {
  if (!["string", "number"].includes(typeof value)) {
    throw new TypeError(
      `styleStringToInteger expects a string or number, got ${typeof value}`
    );
  }

  if (typeof value === "number") {
    return Math.trunc(value);
  }

  const num = value.replace(/\D/g, "");

  if (num.length > 0) {
    return Number(num);
  }

  return 0;
}
