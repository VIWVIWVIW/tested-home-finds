export interface Product {
  id: string;
  name: string;
  brand: string;
  price: string;
  rating: number; // 1-10
  amazonUrl: string;
  imageUrl: string;
  pros: string[];
  cons: string[];
  badge?: "best-pick" | "runner-up" | "budget-pick";
  summary: string;
}

export interface ComparisonTest {
  id: string;
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  description: string;
  lastUpdated: string;
  heroImage: string;
  verdict: string;
  products: Product[];
}

export interface Category {
  name: string;
  slug: string;
  icon: string;
  description: string;
  testCount: number;
}
