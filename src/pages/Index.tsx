import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import TestCard from "@/components/TestCard";
import { Button } from "@/components/ui/button";
import { allTests, categories } from "@/data";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const featured = allTests.slice(0, 8);

  return (
    <Layout>
      {/* Hero */}
      <section className="border-b bg-card">
        <div className="container py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-4">Independent Product Testing for German Households</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
              We test household products so you don't have to.
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-lg">
              {allTests.length} hands-on comparison tests across {categories.length} categories — from kitchen essentials to air quality. Real testing, honest verdicts, zero sponsored picks. All products available on Amazon.de.
            </p>
            <div className="flex gap-3 mt-8">
              <Button asChild size="lg">
                <Link to="/categories">Browse All Tests</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/how-we-test">How We Test →</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container py-12">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="font-display text-2xl font-bold">Categories</h2>
            <p className="text-sm text-muted-foreground mt-1">Browse by room or need</p>
          </div>
          <Link to="/categories" className="text-sm text-accent font-medium hover:underline">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              to={`/category/${cat.slug}`}
              className="group flex flex-col items-center gap-2 p-4 rounded-lg border bg-card hover:border-accent hover:shadow-sm transition-all text-center"
            >
              <span className="text-3xl">{cat.icon}</span>
              <span className="font-display text-xs font-semibold">{cat.name}</span>
              <span className="text-[10px] text-muted-foreground">{cat.testCount} tests</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Tests */}
      <section className="container py-12">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="font-display text-2xl font-bold">Latest Tests</h2>
            <p className="text-sm text-muted-foreground mt-1">Fresh from our lab</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featured.map((test) => (
            <TestCard key={test.id} test={test} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Button asChild variant="outline">
            <Link to="/categories">
              See all {allTests.length} tests <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-t bg-card">
        <div className="container py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="font-display text-3xl font-bold">{allTests.length}</p>
              <p className="text-xs text-muted-foreground mt-1">Comparison Tests</p>
            </div>
            <div>
              <p className="font-display text-3xl font-bold">{allTests.length * 10}</p>
              <p className="text-xs text-muted-foreground mt-1">Products Reviewed</p>
            </div>
            <div>
              <p className="font-display text-3xl font-bold">{categories.length}</p>
              <p className="text-xs text-muted-foreground mt-1">Categories</p>
            </div>
            <div>
              <p className="font-display text-3xl font-bold">100%</p>
              <p className="text-xs text-muted-foreground mt-1">Independent</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
