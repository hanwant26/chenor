
export default function About() {
  return (
    <section
      id="about"
      className="overflow-hidden bg-[#f5f5f7] px-6 py-28 lg:px-10 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
              The Story Behind CHENOR
            </p>

            <h2 className="text-5xl font-semibold leading-[1.08] tracking-[-0.065em] text-neutral-950 sm:text-6xl">
              Rooted in strength.
              <br />
              <span className="text-neutral-400">
                Driven by innovation.
              </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-neutral-600">
              Inspired by the Chenab River, CHENOR represents
              resilience, continuous progress, and the power
              of moving forward.
            </p>

            <p className="mt-5 text-base leading-8 text-neutral-500">
              We believe technology should be thoughtfully
              designed, carefully engineered, and built
              around real human needs.
            </p>

            <div className="mt-10 border-t border-neutral-200 pt-8">
              <p className="text-xs font-medium uppercase tracking-widest text-neutral-400">
                Founded by
              </p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-950">
                Hanwant Singh
              </h3>
              <p className="mt-2 text-sm text-neutral-500">
                Developer · Technology Enthusiast · Founder
              </p>
            </div>
          </div>

          <div className="relative flex min-h-[430px] items-center justify-center overflow-hidden rounded-[36px] bg-[#101827] p-10 sm:min-h-[550px]">
            <div className="absolute -top-28 -right-24 h-80 w-80 rounded-full bg-blue-600/30 blur-[90px]" />
            <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-cyan-400/20 blur-[90px]" />

            <div className="relative z-10 text-center">
              <div className="mx-auto flex h-44 w-44 items-center justify-center rounded-[44px] border border-white/15 bg-white/10 shadow-2xl backdrop-blur-xl">
                <span className="text-8xl font-semibold tracking-[-0.12em] text-white">
                  C
                </span>
              </div>

              <p className="mt-12 text-4xl font-semibold tracking-[-0.07em] text-white sm:text-5xl">
                chenor<span className="text-blue-400">.</span>
              </p>

              <p className="mt-4 text-sm tracking-[0.15em] text-white/50">
                DESIGN · DEVELOPMENT · INNOVATION
              </p>
            </div>

            <span className="absolute bottom-8 left-8 text-xs font-medium tracking-widest text-white/30">
              EST. 2026
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
