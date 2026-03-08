import Layout from "@/components/Layout";

const PrivacyPolicyPage = () => (
  <Layout>
    <div className="border-b bg-card">
      <div className="container py-10">
        <h1 className="font-display text-3xl font-bold">Privacy Policy</h1>
        <p className="text-muted-foreground mt-2">Last updated: March 2026</p>
      </div>
    </div>
    <div className="container py-10 max-w-3xl">
      <article className="prose prose-neutral dark:prose-invert max-w-none">
        <h2 className="font-display text-xl font-bold mt-0">1. Overview</h2>
        <p className="text-muted-foreground">
          HomeTestLab ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website hometestlab.de (the "Site"). By using the Site, you agree to the practices described in this policy.
        </p>

        <h2 className="font-display text-xl font-bold mt-8">2. Information We Collect</h2>
        <p className="text-muted-foreground">
          We collect minimal data to provide and improve our service:
        </p>
        <ul className="text-muted-foreground space-y-2 list-disc pl-6">
          <li><strong>Usage Data:</strong> Pages visited, time spent on pages, referral source, browser type, device type, and operating system. This data is collected anonymously through analytics tools.</li>
          <li><strong>Cookies:</strong> We use essential cookies to ensure the Site functions properly and analytics cookies to understand how visitors use our Site.</li>
          <li><strong>Contact Information:</strong> If you email us, we collect your email address and message content solely to respond to your enquiry.</li>
        </ul>

        <h2 className="font-display text-xl font-bold mt-8">3. How We Use Your Information</h2>
        <p className="text-muted-foreground">We use collected information to:</p>
        <ul className="text-muted-foreground space-y-2 list-disc pl-6">
          <li>Operate and maintain the Site</li>
          <li>Analyse usage patterns to improve our content and user experience</li>
          <li>Respond to your enquiries and requests</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2 className="font-display text-xl font-bold mt-8">4. Amazon.de Affiliate Links</h2>
        <p className="text-muted-foreground">
          Our Site contains affiliate links to Amazon.de. When you click these links, Amazon may place cookies on your device to track the referral. Amazon's use of cookies is governed by <a href="https://www.amazon.de/gp/help/customer/display.html?nodeId=201909010" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Amazon's Privacy Policy</a>. We do not receive any personal information about your Amazon purchases — only aggregated, anonymised commission reports.
        </p>

        <h2 className="font-display text-xl font-bold mt-8">5. Third-Party Services</h2>
        <p className="text-muted-foreground">
          We may use third-party services (such as analytics providers) that collect, monitor, and analyse usage data. These services have their own privacy policies governing the use of your information.
        </p>

        <h2 className="font-display text-xl font-bold mt-8">6. Data Retention</h2>
        <p className="text-muted-foreground">
          Analytics data is retained for a maximum of 26 months. Contact enquiry data is retained only as long as necessary to resolve your request and is then deleted.
        </p>

        <h2 className="font-display text-xl font-bold mt-8">7. Your Rights (GDPR)</h2>
        <p className="text-muted-foreground">
          Under the General Data Protection Regulation (GDPR), you have the right to:
        </p>
        <ul className="text-muted-foreground space-y-2 list-disc pl-6">
          <li>Access the personal data we hold about you</li>
          <li>Request correction of inaccurate data</li>
          <li>Request deletion of your personal data</li>
          <li>Object to or restrict processing of your data</li>
          <li>Data portability</li>
          <li>Withdraw consent at any time</li>
        </ul>
        <p className="text-muted-foreground">
          To exercise any of these rights, please contact us at <a href="mailto:privacy@hometestlab.de" className="text-accent hover:underline">privacy@hometestlab.de</a>.
        </p>

        <h2 className="font-display text-xl font-bold mt-8">8. Children's Privacy</h2>
        <p className="text-muted-foreground">
          Our Site is not directed at children under 16. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us so we can promptly delete it.
        </p>

        <h2 className="font-display text-xl font-bold mt-8">9. Changes to This Policy</h2>
        <p className="text-muted-foreground">
          We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
        </p>

        <h2 className="font-display text-xl font-bold mt-8">10. Contact</h2>
        <p className="text-muted-foreground">
          If you have questions about this Privacy Policy, please contact us at <a href="mailto:privacy@hometestlab.de" className="text-accent hover:underline">privacy@hometestlab.de</a>.
        </p>
      </article>
    </div>
  </Layout>
);

export default PrivacyPolicyPage;
