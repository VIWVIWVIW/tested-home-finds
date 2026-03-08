import { Category } from "./types";

export const categories: Category[] = [
  { name: "Kitchen", slug: "kitchen", icon: "🍳", description: "Cookware, appliances & kitchen essentials", testCount: 8 },
  { name: "Cleaning", slug: "cleaning", icon: "🧹", description: "Vacuums, mops & cleaning products", testCount: 7 },
  { name: "Bathroom", slug: "bathroom", icon: "🚿", description: "Towels, organizers & bathroom accessories", testCount: 6 },
  { name: "Bedroom", slug: "bedroom", icon: "🛏️", description: "Pillows, sheets & sleep essentials", testCount: 6 },
  { name: "Laundry", slug: "laundry", icon: "👕", description: "Detergents, irons & laundry tools", testCount: 6 },
  { name: "Storage", slug: "storage", icon: "📦", description: "Organizers, bins & storage solutions", testCount: 6 },
  { name: "Air Quality", slug: "air-quality", icon: "💨", description: "Purifiers, humidifiers & dehumidifiers", testCount: 6 },
];
