export function calculateTotalPriceRange(min: number, max: number, quality: number): string {
    return `${min*quality} - ${max*quality}`;
  }