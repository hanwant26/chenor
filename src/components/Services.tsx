
const services = [
  {
    number: "01",
    title: "Website Development",
    description:
      "Beautiful, responsive, and high-performance websites built to create lasting digital impressions.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    icon: "◈",
  },
  {
    number: "02",
    title: "Web Applications",
    description:
      "Scalable web applications designed around real-world needs, seamless experiences, and reliable performance.",
    tags: ["TypeScript", "APIs", "Databases"],
    icon: "⌘",
  },
  {
    number: "03",
    title: "Python & Backend",
    description:
      "Thoughtful backend solutions, APIs, and data-driven systems built for reliability and growth.",
    tags: ["Python", "Django", "FastAPI"],
    icon: "◇",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#f5f5f7] px-6 py-28 lg:px-10 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-3xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
            What We Do
          </p>

          <h2 className="text-5xl font-semibold leading-[1.08] tracking-[-0.065em] text-neutral-950 sm:text-6xl">
            Digital solutions.
            <br />
            <span className="text-neutral-400">
              Built with purpose.
            </span>
          </h2>

          <p className="mt-7 max-w-xl text-lg leading-8 text-neutral-500">
            From the first idea to the final experience,
            we bring design and engineering together
            to build technology that matters.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.number}
              className="group flex min-h-[390px] flex-col rounded-[28px] border border-neutral-200/70 bg-white p-9 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_70px_-35px_rgba(0,0,0,0.2)]"
            >
              <div className="flex items-start justify-between">
                <span className="text-xs font-medium text-neutral-400">
                  {service.number} / SERVICE
                </span>

                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-3xl text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  {service.icon}
                </span>
              </div>

              <div className="mt-16">
                <h3 className="text-2xl font-semibold tracking-[-0.04em] text-neutral-950">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-neutral-500">
                  {service.description}
                </p>
              </div>

              <div className="mt-auto flex flex-wrap gap-2 pt-8">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-neutral-100 px-3 py-1.5 text-[11px] font-medium text-neutral-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
