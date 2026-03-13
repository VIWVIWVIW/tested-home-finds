/**
 * Extract ASIN from an Amazon URL and build a product image URL.
 * Pattern: https://www.amazon.de/dp/{ASIN}
 */
export function getAsinFromUrl(url: string): string | null {
  const match = url.match(/\/dp\/([A-Z0-9]{10})/);
  return match ? match[1] : null;
}

export function getAmazonImageUrl(amazonUrl: string, size: number = 300): string {
  const asin = getAsinFromUrl(amazonUrl);
  if (!asin) return "";
  // Amazon's standard product image endpoint
  return `https://m.media-amazon.com/images/P/${asin}.01._SCLZZZZZZZ_SX${size}_.jpg`;
}
