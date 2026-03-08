import Layout from "@/components/Layout";

const EditorialPolicyPage = () => (
  <Layout>
    <div className="border-b bg-card">
      <div className="container py-10">
        <h1 className="font-display text-3xl font-bold">Editorial Policy</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl">
          Transparency and integrity are the foundation of everything we publish at HomeTestLab.
        </p>
      </div>
    </div>
    <div className="container py-10 max-w-3xl">
      <article className="prose prose-neutral dark:prose-invert max-w-none">
        <h2 className="font-display text-xl font-bold mt-0">Editorial Independence</h2>
        <p className="text-muted-foreground">
          HomeTestLab operates with full editorial independence. No manufacturer, retailer, or advertiser has any influence over our test results, ratings, or product recommendations. Our editorial team has final say on all published content, and no external party can review or approve our articles before publication.
        </p>

        <h2 className="font-display text-xl font-bold mt-8">Affiliate Disclosure</h2>
        <p className="text-muted-foreground">
          We participate in the Amazon.de Associates Programme. When you click a product link on our site and make a purchase, we may earn a small affiliate commission. This comes at no additional cost to you. Importantly, affiliate revenue never influences which products we recommend, how we score them, or how we rank them in our comparison tests.
        </p>

        <h2 className="font-display text-xl font-bold mt-8">Product Acquisition</h2>
        <p className="text-muted-foreground">
          We purchase all tested products ourselves through standard retail channels — primarily Amazon.de. We do not accept free samples, review units, or sponsored products from manufacturers. This ensures our experience mirrors exactly what you, the consumer, would receive.
        </p>

        <h2 className="font-display text-xl font-bold mt-8">Corrections & Updates</h2>
        <p className="text-muted-foreground">
          We strive for accuracy in all our content. If we discover an error — whether in product specifications, pricing, or test results — we correct it promptly and transparently. Major corrections are noted at the top of the relevant article. If you spot an error, please contact us so we can investigate and correct it.
        </p>

        <h2 className="font-display text-xl font-bold mt-8">Content Standards</h2>
        <p className="text-muted-foreground">
          All product reviews and comparison tests on HomeTestLab adhere to the following standards:
        </p>
        <ul className="text-muted-foreground space-y-2 list-disc pl-6">
          <li>Every claim is backed by our own hands-on testing or verifiable data</li>
          <li>Product specifications are sourced from official manufacturer information</li>
          <li>Pricing information is regularly verified against Amazon.de listings</li>
          <li>Test methodology is described transparently for each product category</li>
          <li>Both strengths and weaknesses are reported honestly for every product</li>
        </ul>

        <h2 className="font-display text-xl font-bold mt-8">Advertising Policy</h2>
        <p className="text-muted-foreground">
          HomeTestLab does not accept display advertising, sponsored content, or paid product placements. Our sole revenue source is affiliate commissions from Amazon.de. This simple business model ensures our recommendations remain unbiased and trustworthy.
        </p>
      </article>
    </div>
  </Layout>
);

export default EditorialPolicyPage;
