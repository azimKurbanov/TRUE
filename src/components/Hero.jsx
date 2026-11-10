export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-900 px-6 py-20 text-center text-white sm:px-8 sm:py-28">
      {/* Background image with overlay */}
      <img
        src="/images/hero-bg.jpg"
        alt="TRUE FITNESS Background"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl">
        <span className="inline-block rounded-full border border-accent/40 bg-accent/10 px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-accent backdrop-blur-sm">
          ★ Мировой лидер с 1982 года
        </span>
        <h1 className="mt-6 text-3xl font-extrabold uppercase tracking-tight sm:text-5xl">
          Преимущества <span className="text-brand">TRUE FITNESS</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-xs font-medium uppercase leading-relaxed tracking-wide text-slate-300 sm:text-sm">
          Благодаря инновационным технологиям и безупречной надежности мы создаем лучшие тренажеры премиального класса
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#products"
            className="rounded bg-brand px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-brand/30 transition hover:bg-brand/90 hover:shadow-brand/50"
          >
            Каталог тренажеров
          </a>
          <a
            href="#showroom"
            className="rounded border border-white/20 bg-white/10 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm transition hover:bg-white/20"
          >
            Наш Шоурум
          </a>
        </div>
      </div>
    </section>
  )
}
