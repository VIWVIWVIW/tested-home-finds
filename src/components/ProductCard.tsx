import { Product } from "@/data/types";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, ThumbsUp, ThumbsDown } from "lucide-react";

const badgeConfig = {
  "best-pick": { label: "Best Pick", className: "bg-accent text-accent-foreground" },
  "runner-up": { label: "Runner-Up", className: "bg-muted text-foreground" },
  "budget-pick": { label: "Budget Pick", className: "bg-rating text-rating-foreground" },
};

interface ProductCardProps {
  product: Product;
  rank: number;
}

const ProductCard = ({ product, rank }: ProductCardProps) => {
  const badge = product.badge ? badgeConfig[product.badge] : null;

  return (
    <Card className="group overflow-hidden transition-shadow hover:shadow-md" id={product.id}>
      <CardContent className="p-0">
        <div className="flex flex-col sm:flex-row">
          {/* Rank + Image */}
          <div className="relative flex items-center justify-center bg-secondary/50 p-6 sm:w-48 sm:min-h-[180px]">
            <span className="absolute top-3 left-3 font-display text-3xl font-bold text-muted-foreground/30">
              #{rank}
            </span>
            <div className="text-4xl opacity-60">📦</div>
            {badge && (
              <Badge className={`absolute top-3 right-3 ${badge.className} text-[10px] uppercase tracking-wider font-bold`}>
                {badge.label}
              </Badge>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{product.brand}</p>
                <h3 className="font-display font-semibold text-base mt-0.5">{product.name}</h3>
              </div>
              <div className="text-right shrink-0">
                <div className="inline-flex items-center gap-1.5 bg-foreground text-background px-2.5 py-1 rounded-md">
                  <span className="font-display text-sm font-bold">{product.rating}</span>
                  <span className="text-[10px] opacity-70">/10</span>
                </div>
                <p className="text-sm font-semibold mt-1">{product.price}</p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mt-2">{product.summary}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
              <div>
                <div className="flex items-center gap-1 text-xs font-medium text-rating mb-1">
                  <ThumbsUp className="h-3 w-3" /> Pros
                </div>
                <ul className="space-y-0.5">
                  {product.pros.map((p, i) => (
                    <li key={i} className="text-xs text-muted-foreground">• {p}</li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="flex items-center gap-1 text-xs font-medium text-destructive mb-1">
                  <ThumbsDown className="h-3 w-3" /> Cons
                </div>
                <ul className="space-y-0.5">
                  {product.cons.map((c, i) => (
                    <li key={i} className="text-xs text-muted-foreground">• {c}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-4">
              <Button asChild size="sm" className="gap-1.5">
                <a href={product.amazonUrl} target="_blank" rel="noopener noreferrer nofollow">
                  Check Price on Amazon <ExternalLink className="h-3 w-3" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
