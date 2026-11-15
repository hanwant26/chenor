
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#101827] px-6 pb-10 text-white lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 border-t border-white/15 pt-8 sm:flex-row sm:items-center">
          <Link
            href="/"
            className="text-2xl font-semibold tracking-[-0.06em]"
          >
            chenor<span className="text-blue-400">.</span>
          </Link>

          <p className="text-sm text-white/40">
            © 2026 CHENOR. All rights reserved.
          </p>

          <a
            href="#"
            className="text-sm text-white/50 transition-colors hover:text-white"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
