import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import TestCard from "@/components/TestCard";
import { allTests, categories } from "@/data";

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = categories.find((c) => c.slug === slug);
  const tests = allTests.filter((t) => t.categorySlug === slug);

  if (!category) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="font-display text-2xl font-bold">Category not found</h1>
          <Link to="/" className="text-accent mt-4 inline-block">← Back home</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="border-b bg-card">
        <div className="container py-10">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <span className="text-foreground">{category.name}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-5xl">{category.icon}</span>
            <div>
              <h1 className="font-display text-3xl font-bold">{category.name}</h1>
              <p className="text-muted-foreground mt-1">{category.description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-10">
        <p className="text-sm text-muted-foreground mb-6">{tests.length} comparison tests</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tests.map((test) => (
            <TestCard key={test.id} test={test} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default CategoryPage;
