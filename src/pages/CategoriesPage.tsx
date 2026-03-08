import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { categories, allTests } from "@/data";

const CategoriesPage = () => (
  <Layout>
    <div className="border-b bg-card">
      <div className="container py-10">
        <h1 className="font-display text-3xl font-bold">All Categories</h1>
        <p className="text-muted-foreground mt-1">{allTests.length} tests across {categories.length} categories</p>
      </div>
    </div>
    <div className="container py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            to={`/category/${cat.slug}`}
            className="group flex items-center gap-4 p-6 rounded-lg border bg-card hover:border-accent hover:shadow-sm transition-all"
          >
            <span className="text-4xl">{cat.icon}</span>
            <div>
              <h2 className="font-display font-semibold">{cat.name}</h2>
              <p className="text-sm text-muted-foreground">{cat.description}</p>
              <p className="text-xs text-accent mt-1 font-medium">{cat.testCount} tests →</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </Layout>
);

export default CategoriesPage;
