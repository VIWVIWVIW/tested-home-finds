import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { categories, allTests } from "@/data";
import { getAmazonImageUrl } from "@/lib/amazon";

const CategoriesPage = () => {
  const getCategoryImage = (slug: string) => {
    const test = allTests.find((t) => t.categorySlug === slug);
    const bestPick = test?.products.find((p) => p.badge === "best-pick");
    return bestPick ? getAmazonImageUrl(bestPick.amazonUrl, 150) : "";
  };

  return (
    <Layout>
      <div className="border-b bg-card">
        <div className="container py-10">
          <h1 className="font-display text-3xl font-bold">All Categories</h1>
          <p className="text-muted-foreground mt-1">{allTests.length} tests across {categories.length} categories</p>
        </div>
      </div>
      <div className="container py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat) => {
            const imgUrl = getCategoryImage(cat.slug);
            return (
              <Link
                key={cat.slug}
                to={`/category/${cat.slug}`}
                className="group flex items-center gap-4 p-6 rounded-lg border bg-card hover:border-accent hover:shadow-sm transition-all"
              >
                {imgUrl ? (
                  <img
                    src={imgUrl}
                    alt={cat.name}
                    className="h-16 w-16 object-contain shrink-0"
                    loading="lazy"
                    onError={(e) => { (e.target as HTMLImageElement).replaceWith(Object.assign(document.createElement('span'), { className: 'text-4xl', textContent: cat.icon })); }}
                  />
                ) : (
                  <span className="text-4xl">{cat.icon}</span>
                )}
                <div>
                  <h2 className="font-display font-semibold">{cat.name}</h2>
                  <p className="text-sm text-muted-foreground">{cat.description}</p>
                  <p className="text-xs text-accent mt-1 font-medium">{cat.testCount} tests →</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default CategoriesPage;
