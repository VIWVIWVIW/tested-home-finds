import { Link } from "react-router-dom";
import { categories } from "@/data";

const Footer = () => (
  <footer className="border-t bg-card mt-16">
    <div className="container py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <Link to="/" className="font-display text-xl font-bold tracking-tight">
            HomeTest<span className="text-accent">Lab</span>
          </Link>
          <p className="mt-3 text-sm text-muted-foreground max-w-md">
            Independent product testing for your home. We buy, test, and review household products so you don't have to guess.
          </p>
          <p className="mt-4 text-xs text-muted-foreground">
            As an Amazon Associate, we earn from qualifying purchases. This doesn't affect our editorial independence.
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold text-sm mb-3">Categories</h4>
          <nav className="flex flex-col gap-2">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                to={`/category/${cat.slug}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {cat.icon} {cat.name}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <h4 className="font-display font-semibold text-sm mb-3">About</h4>
          <nav className="flex flex-col gap-2">
            <span className="text-sm text-muted-foreground">How We Test</span>
            <span className="text-sm text-muted-foreground">Editorial Policy</span>
            <span className="text-sm text-muted-foreground">Contact Us</span>
            <span className="text-sm text-muted-foreground">Privacy Policy</span>
          </nav>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t text-center text-xs text-muted-foreground">
        © 2026 HomeTestLab. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
