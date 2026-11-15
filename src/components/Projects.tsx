
//import Image from "next/image";

export default function Projects() {
  return (
    <section
      id="work"
      className="bg-white px-6 py-28 lg:px-10 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-16">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
            Selected Work
          </p>

          <h2 className="text-5xl font-semibold leading-[1.08] tracking-[-0.065em] text-neutral-950 sm:text-6xl">
            Ideas brought
            <br />
            <span className="text-neutral-400">
              to life.
            </span>
          </h2>

          <p className="mt-7 max-w-xl text-lg leading-8 text-neutral-500">
            A growing collection of digital experiences,
            built with thoughtful design and modern technology.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* The Learning Temple */}
          <article className="group">
            <div className="relative flex min-h-[350px] items-center justify-center overflow-hidden rounded-[30px] bg-[#e9f2ed] p-8 sm:min-h-[440px]">
              <span className="absolute left-8 top-8 z-10 text-xs font-medium tracking-widest text-neutral-600">
                01 / FEATURED PROJECT
              </span>

              {/* Screenshot placeholder */}
              <div className="relative mt-8 flex h-60 w-full max-w-md items-center justify-center overflow-hidden rounded-2xl border border-white/80 bg-white shadow-[0_30px_70px_-30px_rgba(0,0,0,0.25)] transition-transform duration-500 group-hover:-translate-y-2 sm:h-72">
                <div className="text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-emerald-50 text-4xl font-semibold text-emerald-700">
                    L
                  </div>
                  <p className="mt-5 text-lg font-semibold text-neutral-900">
                    The Learning Temple
                  </p>
                  <p className="mt-2 text-xs text-neutral-500">
                    School Website
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h3 className="text-3xl font-semibold tracking-[-0.05em] text-neutral-950">
                The Learning Temple
              </h3>

              <p className="mt-4 max-w-lg text-base leading-7 text-neutral-500">
                A modern school website built with Python
                and Django, designed to present academic
                information, facilities, and institutional identity.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Python", "Django", "HTML", "CSS"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-neutral-200 px-3 py-1.5 text-xs text-neutral-500"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>
          </article>

          {/* Coming Soon */}
          <article className="group">
            <div className="relative flex min-h-[350px] items-center justify-center overflow-hidden rounded-[30px] bg-[#f0f1f5] p-8 sm:min-h-[440px]">
              <span className="absolute left-8 top-8 text-xs font-medium tracking-widest text-neutral-500">
                02 / WHAT'S NEXT
              </span>

              <div className="relative text-center">
                <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-[40px] border border-white bg-white/70 shadow-xl backdrop-blur-md transition-transform duration-500 group-hover:-translate-y-3 group-hover:rotate-6">
                  <span className="text-7xl font-light text-blue-600">
                    +
                  </span>
                </div>

                <p className="mt-9 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
                  Something new is taking shape
                </p>
              </div>

              <span className="absolute bottom-8 right-8 rounded-full bg-white/80 px-4 py-2 text-xs font-medium text-neutral-600">
                Coming Soon
              </span>
            </div>

            <div className="pt-8">
              <h3 className="text-3xl font-semibold tracking-[-0.05em] text-neutral-950">
                The Next Chapter
              </h3>

              <p className="mt-4 max-w-lg text-base leading-7 text-neutral-500">
                We're exploring new ideas and building
                more meaningful digital experiences.
                Stay tuned for what's next.
              </p>

              <div className="mt-6">
                <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-medium text-blue-600">
                  In the Works
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
