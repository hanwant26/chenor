
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-6 pt-24 pb-20 sm:pt-32 lg:px-10 lg:pt-40">
      <div className="mx-auto max-w-7xl">
        {/* Intro */}
        <div className="mx-auto max-w-5xl text-center">
          <div className="chenor-fade-up inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            <span className="text-xs font-medium tracking-wide text-neutral-600">
              Independent Digital Development Studio
            </span>
          </div>

          <h1 className="chenor-fade-up chenor-delay-1 mt-9 text-[clamp(3.5rem,8vw,7.5rem)] leading-[1.02] font-semibold tracking-[-0.075em] text-neutral-950">
            Technology,
            <br />
            <span className="text-neutral-400">
              thoughtfully built.
            </span>
          </h1>

          <p className="chenor-fade-up chenor-delay-2 mx-auto mt-8 max-w-2xl text-base leading-8 text-neutral-500 sm:text-xl">
            We design and develop exceptional digital experiences,
            from beautiful websites to powerful applications
            and intelligent Python-powered solutions.
          </p>

          <div className="chenor-fade-up chenor-delay-3 mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="#work"
              className="inline-flex w-full items-center justify-center rounded-full bg-neutral-950 px-8 py-4 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-600 sm:w-auto"
            >
              Explore Our Work
              <span className="ml-3">↗</span>
            </Link>

            <Link
              href="#contact"
              className="inline-flex w-full items-center justify-center rounded-full border border-neutral-200 bg-white px-8 py-4 text-sm font-medium text-neutral-900 transition-all duration-300 hover:border-neutral-400 sm:w-auto"
            >
              Start a Project
            </Link>
          </div>
        </div>

        {/* Product-style visual */}
        <div className="chenor-fade-up chenor-delay-3 relative mx-auto mt-24 max-w-5xl">
          <div className="absolute inset-x-12 -top-10 h-48 rounded-full bg-blue-100/70 blur-3xl" />

          <div className="relative overflow-hidden rounded-[28px] border border-neutral-200 bg-[#f5f5f7] p-4 shadow-[0_30px_100px_-45px_rgba(0,0,0,0.25)] sm:p-8">
            <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
              {/* Mock browser toolbar */}
              <div className="flex h-12 items-center gap-2 border-b border-neutral-100 px-5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff605c]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd44]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#00ca4e]" />
                <span className="mx-auto hidden rounded-md bg-neutral-100 px-12 py-1 text-[10px] text-neutral-400 sm:block">
                  chenor / digital experiences
                </span>
              </div>

              <div className="grid min-h-72 items-center gap-8 p-8 sm:p-12 md:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                    Built for what's next
                  </p>

                  <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.06em] text-neutral-950 sm:text-5xl">
                    Ideas deserve
                    <br />
                    better technology.
                  </h2>

                  <p className="mt-5 max-w-sm text-sm leading-7 text-neutral-500">
                    Design-led thinking. Engineering-driven execution.
                    Digital experiences with purpose.
                  </p>
                </div>

                <div className="relative flex min-h-64 items-center justify-center">
                  <div className="chenor-float absolute h-52 w-52 rounded-[44px] bg-gradient-to-br from-[#111827] via-[#294b8d] to-[#80b5ff] shadow-[0_35px_65px_-25px_rgba(37,99,235,0.45)] sm:h-60 sm:w-60">
                    <div className="flex h-full items-center justify-center">
                      <span className="text-8xl font-semibold tracking-[-0.12em] text-white/90">
                        C
                      </span>
                    </div>
                  </div>
                  <div className="absolute right-0 bottom-2 rounded-2xl border border-white/70 bg-white/90 px-5 py-4 shadow-xl backdrop-blur-md">
                    <p className="text-[10px] font-medium uppercase tracking-widest text-neutral-400">
                      CHENOR
                    </p>
                    <p className="mt-1 text-sm font-semibold text-neutral-900">
                      Design × Engineering
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology strip */}
        <div className="mx-auto mt-16 flex max-w-4xl flex-wrap items-center justify-center gap-x-9 gap-y-5 text-sm font-medium text-neutral-400">
          <span>Next.js</span>
          <span>TypeScript</span>
          <span>Python</span>
          <span>Django</span>
          <span>FastAPI</span>
          <span>PostgreSQL</span>
        </div>
      </div>
    </section>
  );
}
