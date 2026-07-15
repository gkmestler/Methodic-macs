// Display helpers. Every figure on screen traces back to site-data.ts;
// these only format, they never compute new numbers.

// 848000 -> "$848K", 1500000 -> "$1.5M"
export function usdShort(n: number): string {
  if (Math.abs(n) >= 1_000_000) {
    const m = n / 1_000_000;
    const str = Number.isInteger(m) ? m.toString() : m.toFixed(1);
    return `$${str}M`;
  }
  if (Math.abs(n) >= 1_000) {
    return `$${Math.round(n / 1_000)}K`;
  }
  return `$${n}`;
}

// 925633 -> "$925,633"
export function usdFull(n: number): string {
  return `$${n.toLocaleString("en-US")}`;
}

// 188800000000 -> "$188.8B", 6800000000 -> "$6.8B"
export function usdBillions(n: number): string {
  const b = n / 1_000_000_000;
  const str = Number.isInteger(b) ? b.toString() : b.toFixed(1);
  return `$${str}B`;
}
