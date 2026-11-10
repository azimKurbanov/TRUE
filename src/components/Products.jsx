import Img from './Img'

const products = [
  {
    n: 'Беговые дорожки',
    d: 'Инновационная амортизация, сенсорные экраны и долговечные двигатели для тренировок любого уровня.',
    img: '/images/prod-treadmill.jpg',
    badge: 'Хит продаж',
  },
  {
    n: 'Эллиптические тренажеры',
    d: 'Мягкая биомеханика без ударной нагрузки на суставы и плавный естественный ход педалей.',
    img: '/images/prod-elliptical.jpg',
    badge: 'Premium',
  },
  {
    n: 'Велотренажеры',
    d: 'Вертикальные и горизонтальные модели с точной регулировкой и эргономичным сиденьем.',
    img: '/images/prod-bike.jpg',
    badge: 'Cardio',
  },
  {
    n: 'Силовое оборудование',
    d: 'Грузоблочные тренажеры, скамьи и рамы премиальной серии для максимальной эффективности.',
    img: '/images/prod-strength.jpg',
    badge: 'Heavy Duty',
  },
]

export default function Products() {
  return (
    <section id="products" className="bg-slate-50 px-6 py-14 sm:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-xl font-bold uppercase text-brand sm:text-2xl">
          Наше оборудование
        </h2>
        <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
          Полная линейка профессиональных тренажеров TRUE FITNESS для фитнес-клубов, отелей, реабилитационных центров и дома.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p) => (
          <article
            key={p.n}
            className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative overflow-hidden">
              <Img
                src={p.img}
                alt={p.n}
                className="h-48 w-full transition duration-500 group-hover:scale-105"
              />
              <span className="absolute right-3 top-3 rounded-full bg-brand/90 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                {p.badge}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-sm font-bold uppercase text-ink">{p.n}</h3>
              <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-600">{p.d}</p>
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-brand">Гарантия 5 лет</span>
                <a
                  href="#showroom"
                  className="rounded bg-brand px-3 py-1.5 text-[11px] font-bold uppercase text-white transition hover:bg-brand/90"
                >
                  Подробнее
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
