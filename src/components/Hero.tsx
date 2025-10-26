import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="mx-auto max-w-6xl px-4 sm:px-6 pt-4 md:pt-6">
      <div className="relative min-h-[85vh] rounded-3xl bg-slate-900 text-slate-100 shadow-xl">
        <div className="grid min-h-[85vh] items-center gap-10 p-6 sm:p-10 md:grid-cols-2 md:p-12">
          <div>
            <p className="mb-3 text-sm text-slate-300">Hey, there 👋</p>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              I'm <span className="text-white">Akshay Bhawar</span>
            </h1>
            <h2 className="mt-2 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              a Design Engineer
            </h2>
            <p className="mt-4 max-w-prose text-slate-300">
              who works across the stack to deliver websites and web apps that drive business growth forward.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-full bg-amber-500 px-5 py-2 text-slate-900 transition hover:bg-amber-400"
              >
                Hire Me
              </a>
              <a
                href="#projects"
                className="rounded-full border border-white/20 px-5 py-2 text-white transition hover:bg-white/10"
              >
                View Work
              </a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative -rotate-3 md:-rotate-6 rounded-2xl border border-white/10 bg-slate-100 p-1.5 shadow-2xl">
              <div className="overflow-hidden rounded-xl bg-white">
                <Image
                  src="/my%20pic/my%20pic%201.png"
                  alt="Akshay Bhawar profile"
                  width={320}
                  height={380}
                  className="w-48 md:w-72 h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        <span
          aria-hidden
          className="pointer-events-none absolute bottom-6 right-8 hidden h-6 w-6 rounded-full bg-amber-300/80 md:block"
        />
      </div>
    </section>
  );
}
