import Layout from "@/components/Layout";
import { Mail, MessageSquare } from "lucide-react";

const ContactPage = () => (
  <Layout>
    <div className="border-b bg-card">
      <div className="container py-10">
        <h1 className="font-display text-3xl font-bold">Contact Us</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl">
          Have a question, suggestion, or correction? We'd love to hear from you.
        </p>
      </div>
    </div>
    <div className="container py-10 max-w-3xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        <div className="p-6 rounded-lg border bg-card">
          <Mail className="h-6 w-6 text-accent mb-3" />
          <h2 className="font-display font-bold text-lg">Email Us</h2>
          <p className="text-sm text-muted-foreground mt-2">
            For general enquiries, corrections, or partnership requests.
          </p>
          <a href="mailto:hello@hometestlab.de" className="text-sm text-accent font-medium mt-3 inline-block hover:underline">
            hello@hometestlab.de
          </a>
        </div>
        <div className="p-6 rounded-lg border bg-card">
          <MessageSquare className="h-6 w-6 text-accent mb-3" />
          <h2 className="font-display font-bold text-lg">Product Suggestions</h2>
          <p className="text-sm text-muted-foreground mt-2">
            Want us to test a specific product or category? Let us know.
          </p>
          <a href="mailto:tests@hometestlab.de" className="text-sm text-accent font-medium mt-3 inline-block hover:underline">
            tests@hometestlab.de
          </a>
        </div>
      </div>

      <article className="prose prose-neutral dark:prose-invert max-w-none">
        <h2 className="font-display text-xl font-bold">Frequently Asked Questions</h2>

        <h3 className="font-display font-bold mt-6">Do you accept products for review?</h3>
        <p className="text-muted-foreground">
          No. We purchase all products ourselves to maintain our editorial independence. We do not accept free samples, review units, or sponsored products from manufacturers or retailers.
        </p>

        <h3 className="font-display font-bold mt-6">I found an error in one of your tests. How can I report it?</h3>
        <p className="text-muted-foreground">
          We appreciate corrections! Please email us at hello@hometestlab.de with the specific test page and the error you found. We'll investigate and update our content promptly.
        </p>

        <h3 className="font-display font-bold mt-6">Can I use your content on my website?</h3>
        <p className="text-muted-foreground">
          Our content is protected by copyright. If you'd like to reference our test results, please link back to the original article on HomeTestLab. For any other use, please contact us first.
        </p>

        <h3 className="font-display font-bold mt-6">How do you make money?</h3>
        <p className="text-muted-foreground">
          We earn small affiliate commissions when you purchase products through our Amazon.de links. This costs you nothing extra and does not affect our ratings or recommendations.
        </p>
      </article>
    </div>
  </Layout>
);

export default ContactPage;
