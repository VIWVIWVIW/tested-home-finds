import { kitchenTests } from "./tests/kitchen";
import { cleaningTests } from "./tests/cleaning";
import { bathroomTests } from "./tests/bathroom";
import { bedroomTests } from "./tests/bedroom";
import { laundryTests } from "./tests/laundry";
import { storageTests } from "./tests/storage";
import { airQualityTests } from "./tests/air-quality";
import { categories } from "./categories";
import { ComparisonTest } from "./types";

export const allTests: ComparisonTest[] = [
  ...kitchenTests,
  ...cleaningTests,
  ...bathroomTests,
  ...bedroomTests,
  ...laundryTests,
  ...storageTests,
  ...airQualityTests,
];

export { categories };
export type { ComparisonTest, Product, Category } from "./types";
