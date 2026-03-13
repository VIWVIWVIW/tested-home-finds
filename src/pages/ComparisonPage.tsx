import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { allTests } from "@/data";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { getAmazonImageUrl } from "@/lib/amazon";

const ComparisonPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const test = allTests.find((t) => t.slug === slug);

  if (!test) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="font-display text-2xl font-bold">Test not found</h1>
          <Link to="/" className="text-accent mt-4 inline-block">← Back home</Link>
        </div>
      </Layout>
    );
  }

  const topThree = test.products.filter((p) => p.badge);
  const sorted = [...test.products].sort((a, b) => b.rating - a.rating);

  return (
    <Layout>
      {/* Header */}
      <div className="border-b bg-card">
        <div className="container py-10">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <Link to={`/category/${test.categorySlug}`} className="hover:text-foreground">{test.category}</Link>
            <span>/</span>
            <span className="text-foreground">{test.title}</span>
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold">{test.title}</h1>
          <p className="text-muted-foreground mt-2 max-w-2xl">{test.description}</p>
          <p className="text-xs text-muted-foreground mt-3">Last updated: {test.lastUpdated}</p>
        </div>
      </div>

      <div className="container py-10">
        {/* Verdict */}
        <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 mb-10">
          <p className="text-xs font-bold uppercase tracking-wider text-accent mb-2">Our Verdict</p>
          <p className="text-foreground font-medium">{test.verdict}</p>
        </div>

        {/* Quick Picks */}
        {topThree.length > 0 && (
          <div className="mb-10">
            <h2 className="font-display text-xl font-bold mb-4">Quick Picks</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {topThree.map((p) => {
                const badge = p.badge === "best-pick" ? "🏆 Best Pick" : p.badge === "runner-up" ? "🥈 Runner-Up" : "💰 Budget Pick";
                return (
                  <div key={p.id} className="border rounded-lg p-4 bg-card text-center">
                    <div className="flex justify-center mb-2">
                      <img
                        src={getAmazonImageUrl(p.amazonUrl, 150)}
                        alt={p.name}
                        className="h-20 object-contain"
                        loading="lazy"
                        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                      />
                    </div>
                    <p className="text-sm font-bold mb-1">{badge}</p>
                    <p className="font-display font-semibold text-sm">{p.name}</p>
                    <div className="inline-flex items-center gap-1 bg-foreground text-background px-2 py-0.5 rounded mt-2 text-xs font-bold">
                      {p.rating}/10
                    </div>
                    <p className="text-sm font-semibold mt-1">{p.price}</p>
                    <Button asChild size="sm" className="mt-3 w-full gap-1">
                      <a href={p.amazonUrl} target="_blank" rel="noopener noreferrer nofollow">
                        View on Amazon <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Comparison Table */}
        <div className="mb-10">
          <h2 className="font-display text-xl font-bold mb-4">Full Rankings</h2>
          <div className="border rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-secondary/50">
                  <TableHead className="w-10">#</TableHead>
                  <TableHead>Product</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead className="text-right">Link</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sorted.map((p, i) => (
                  <TableRow key={p.id}>
                    <TableCell className="font-display font-bold text-muted-foreground">{i + 1}</TableCell>
                    <TableCell>
                      <div>
                        <span className="font-medium text-sm">{p.name}</span>
                        {p.badge && (
                          <Badge className="ml-2 text-[9px]" variant="secondary">
                            {p.badge === "best-pick" ? "Best" : p.badge === "runner-up" ? "Runner-Up" : "Budget"}
                          </Badge>
                        )}
                      </div>
                      <span className="text-xs text-muted-foreground">{p.brand}</span>
                    </TableCell>
                    <TableCell>
                      <span className="font-display font-bold text-sm">{p.rating}</span>
                      <span className="text-xs text-muted-foreground">/10</span>
                    </TableCell>
                    <TableCell className="font-medium text-sm">{p.price}</TableCell>
                    <TableCell className="text-right">
                      <a
                        href={p.amazonUrl}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-accent hover:underline text-xs font-medium"
                      >
                        Amazon →
                      </a>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Detailed Reviews */}
        <h2 className="font-display text-xl font-bold mb-4">Detailed Reviews</h2>
        <div className="space-y-4">
          {sorted.map((p, i) => (
            <ProductCard key={p.id} product={p} rank={i + 1} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ComparisonPage;
