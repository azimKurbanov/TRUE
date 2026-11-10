import Img from './Img'

const items = [
  {
    img: '/images/adv-1.jpg',
    t: 'Лучшие характеристики в классе',
    d: 'Наши тренажеры имеют самые совершенные характеристики в классе, надежные технические показатели и расширенные функциональные возможности.'
  },
  {
    img: '/images/adv-2.jpg',
    t: 'Высокая надежность оборудования',
    d: 'Высокое качество тренажеров TRUE. Кроме того, TRUE предоставляет до 5 лет полной гарантии на каркас тренажеров.'
  },
  {
    img: '/images/adv-3.jpg',
    t: 'Низкая стоимость владения',
    d: 'Тренажеры способны выдерживать огромную эксплуатационную нагрузку, снижая затраты на обслуживание и обеспечивая минимальную стоимость владения.'
  },
  {
    img: '/images/adv-4.jpg',
    t: 'Качественный и оперативный сервис',
    d: 'Оборудование должно работать бесперебойно. Поэтому мы держим в наличии все необходимые запчасти и гарантируем быстрые сроки технического реагирования.'
  },
  {
    img: '/images/adv-5.jpg',
    t: 'Цены ниже, чем у аналогов',
    d: 'Стоимость тренажеров TRUE приятно удивит. При премиальном американском качестве наши цены выгодно отличаются от конкурентов.'
  },
  {
    img: '/images/adv-6.jpg',
    t: 'Совершенная производительность',
    d: 'Тренажеры TRUE обеспечивают непревзойденный уровень тренировок для достижения самых высоких спортивных результатов.'
  },
  {
    img: '/images/adv-7.jpg',
    t: 'Лидеры по количеству инноваций',
    d: 'Интерактивные консоли, запатентованная система амортизации Soft System и интеллектуальный контроль биомеханики.'
  },
  {
    img: '/images/adv-8.jpg',
    t: 'Максимальное удобство и эргономика',
    d: 'Компания TRUE делает каждый тренажер интуитивно понятным, эргономичным и безопасным для пользователей любого уровня подготовки.'
  },
]

export default function Advantages() {
  return (
    <section id="advantages" className="px-6 py-12 sm:px-8">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => (
          <article
            key={it.t}
            className="group flex flex-col overflow-hidden rounded-lg border border-slate-100 bg-white p-3 text-center shadow-sm transition hover:shadow-md"
          >
            <div className="overflow-hidden rounded-md">
              <Img
                src={it.img}
                alt={it.t}
                className="h-44 w-full transition duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="mt-4 text-xs font-bold uppercase leading-snug text-brand sm:text-sm">
              {it.t}
            </h3>
            <p className="mt-2 text-[11px] leading-relaxed text-slate-600 sm:text-xs">
              {it.d}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
