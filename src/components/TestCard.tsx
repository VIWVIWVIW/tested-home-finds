import { Link } from "react-router-dom";
import { ComparisonTest } from "@/data/types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface TestCardProps {
  test: ComparisonTest;
}

const TestCard = ({ test }: TestCardProps) => {
  const bestPick = test.products.find((p) => p.badge === "best-pick");

  return (
    <Link to={`/test/${test.slug}`}>
      <Card className="group h-full overflow-hidden transition-all hover:shadow-md hover:-translate-y-0.5">
        <div className="bg-secondary/50 p-6 flex items-center justify-center h-32">
          <span className="text-4xl opacity-50">🔬</span>
        </div>
        <CardContent className="p-4">
          <Badge variant="secondary" className="text-[10px] uppercase tracking-wider mb-2">
            {test.category}
          </Badge>
          <h3 className="font-display font-semibold text-sm leading-tight line-clamp-2">
            {test.title}
          </h3>
          {bestPick && (
            <p className="text-xs text-muted-foreground mt-2">
              Winner: <span className="text-foreground font-medium">{bestPick.name}</span>
            </p>
          )}
          <div className="flex items-center justify-between mt-3 pt-3 border-t">
            <span className="text-[10px] text-muted-foreground">{test.products.length} products tested</span>
            <ArrowRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-accent transition-colors" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default TestCard;
