import Layout from "@/components/Layout";
import { allTests, categories } from "@/data";

const HowWeTestPage = () => (
  <Layout>
    <div className="border-b bg-card">
      <div className="container py-10">
        <h1 className="font-display text-3xl font-bold">How We Test Products</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl">
          Our rigorous, multi-step testing methodology ensures every product recommendation is backed by real-world performance data — not marketing claims.
        </p>
      </div>
    </div>
    <div className="container py-10 max-w-3xl">
      <article className="prose prose-neutral dark:prose-invert max-w-none">
        <h2 className="font-display text-xl font-bold mt-0">Our Testing Philosophy</h2>
        <p className="text-muted-foreground">
          At HomeTestLab, we believe the best product recommendations come from hands-on experience. We purchase every product we review with our own money — no manufacturer samples, no sponsored placements, no editorial interference. With over {allTests.length} comparison tests across {categories.length} categories, our goal is to help German households make smarter purchasing decisions.
        </p>

        <h2 className="font-display text-xl font-bold mt-8">Step 1: Market Research & Product Selection</h2>
        <p className="text-muted-foreground">
          Before testing begins, our team analyses the German market on Amazon.de to identify the most popular, highest-rated, and best-value products in each category. We select 8–12 products per test to cover a range of price points — from budget-friendly options to premium picks — so every reader finds a match for their needs.
        </p>

        <h2 className="font-display text-xl font-bold mt-8">Step 2: Real-World Performance Testing</h2>
        <p className="text-muted-foreground">
          Every product is tested in real household conditions — not a sterile lab. We use standardised testing protocols specific to each product category. A non-stick pan gets tested with eggs, pancakes, and delicate fish over 50+ cooking sessions. A vacuum cleaner faces pet hair, fine dust, cereal crumbs, and deep carpet fibres. We measure what matters: actual performance, durability, ease of use, and noise levels.
        </p>

        <h2 className="font-display text-xl font-bold mt-8">Step 3: Scoring & Ranking</h2>
        <p className="text-muted-foreground">
          Each product receives scores across multiple criteria weighted by importance. A kitchen knife, for example, is scored on sharpness (30%), edge retention (25%), comfort (20%), build quality (15%), and value for money (10%). Our overall ratings range from 1.0 to 10.0, and only products scoring 7.0 or above earn our recommendation.
        </p>

        <h2 className="font-display text-xl font-bold mt-8">Step 4: Ongoing Re-Testing</h2>
        <p className="text-muted-foreground">
          Products change over time — manufacturers update designs, materials shift, and new competitors enter the market. We revisit our most popular tests regularly to ensure our recommendations remain accurate and up to date. Every test page shows the last update date so you always know how current our data is.
        </p>

        <h2 className="font-display text-xl font-bold mt-8">Our Independence Guarantee</h2>
        <p className="text-muted-foreground">
          HomeTestLab earns revenue through Amazon.de affiliate links. When you purchase a product through our links, we receive a small commission at no extra cost to you. This commission never influences our ratings, rankings, or editorial decisions. Products that perform poorly receive low scores regardless of affiliate potential. Our readers' trust is our most valuable asset.
        </p>

        <div className="mt-10 p-6 rounded-lg border bg-card">
          <h3 className="font-display font-bold text-lg">Testing by the Numbers</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 text-center">
            <div>
              <p className="font-display text-2xl font-bold text-accent">{allTests.length}</p>
              <p className="text-xs text-muted-foreground">Tests Conducted</p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-accent">{allTests.length * 10}+</p>
              <p className="text-xs text-muted-foreground">Products Tested</p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-accent">{categories.length}</p>
              <p className="text-xs text-muted-foreground">Categories</p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-accent">0</p>
              <p className="text-xs text-muted-foreground">Sponsored Picks</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  </Layout>
);

export default HowWeTestPage;
