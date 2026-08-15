import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/inquisitors-logo.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-outline-variant/60 bg-surface-container-low">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <img
          src={logoAsset.url}
          alt="Inquisitors Society logo"
          className="h-14 w-auto max-w-[210px] object-contain"
        />
        <p className="text-sm text-on-surface-variant">
          © 2024 Inquisitors Society. Learn • Innovate • Create.
        </p>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-on-surface-variant">
          <Link to="/about" className="hover:text-primary">
            About
          </Link>
          <Link to="/opportunities" className="hover:text-primary">
            Opportunities
          </Link>
          <span className="cursor-default">Academic Integrity</span>
          <span className="cursor-default">Privacy Policy</span>
          <span className="cursor-default">Terms of Service</span>
          <span className="cursor-default">Contact Us</span>
        </nav>
      </div>
    </footer>
  );
}