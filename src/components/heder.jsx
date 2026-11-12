import { useState } from 'react'

// 1. Rasm yuklash va xatolik yuz berganda fallback ko'rsatish
function Img({ src, alt = '', className = '' }) {
  const [error, setError] = useState(false)

  if (src && !error) {
    return (
      <img
        src={src}
        alt={alt}
        className={`object-cover ${className}`}
        loading="lazy"
        onError={() => setError(true)}
      />
    )
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={`flex items-center justify-center bg-gradient-to-br from-slate-200 to-slate-400 text-slate-500 ${className}`}
    >
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <circle cx="9" cy="10" r="1.5" />
        <path d="M21 16l-5-5-8 8" />
      </svg>
    </div>
  )
}

// 2. Afzalliklar ro'yxati
const advantagesList = [
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

// 3. Mahsulotlar ro'yxati
const productsList = [
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

// 4. Statistika
const statsList = [
  { v: '1982', l: 'год основания компании' },
  { v: '5 лет', l: 'гарантии на каркас' },
  { v: '100+', l: 'стран, где работает TRUE' },
  { v: '24/7', l: 'техническая поддержка' },
]

// 5. Tez-tez so'raladigan savollar (FAQ)
const faqList = [
  { q: 'Какая гарантия на тренажеры TRUE?', a: 'До 5 лет полной гарантии на каркас и до 2 лет на электронику и комплектующие.' },
  { q: 'Есть ли доставка и установка?', a: 'Да, мы доставляем, собираем и настраиваем оборудование в вашем зале.' },
  { q: 'Можно ли получить консультацию по подбору оборудования?', a: 'Конечно. Оставьте заявку, и специалист поможет подобрать модели под ваш бюджет и площадь.' },
  { q: 'Где купить запчасти и пройти обслуживание?', a: 'Запчасти есть на складе, а сервисная служба выезжает в оперативные сроки.' },
]

export default function Heder() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <div className="mx-auto max-w-[1200px] overflow-hidden bg-white shadow-xl">
      {/* 1. HERO QISMI */}
      <section className="relative overflow-hidden bg-slate-900 px-6 py-20 text-center text-white sm:px-8 sm:py-28">
        <img
          src="/images/hero-bg.jpg"
          alt="TRUE FITNESS Background"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />

        <div className="relative z-10 mx-auto max-w-3xl">
          <span className="inline-block rounded-full border border-accent/40 bg-accent/10 px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-accent backdrop-blur-xs">
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
              className="rounded-sm bg-brand px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-brand/30 transition hover:bg-brand/90 hover:shadow-brand/50"
            >
              Каталог тренажеров
            </a>
            <a
              href="#showroom"
              className="rounded-sm border border-white/20 bg-white/10 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-xs transition hover:bg-white/20"
            >
              Наш Шоурум
            </a>
          </div>
        </div>
      </section>

      {/* 2. ADVANTAGES QISMI */}
      <section id="advantages" className="px-6 py-12 sm:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {advantagesList.map((it) => (
            <article
              key={it.t}
              className="group flex flex-col overflow-hidden rounded-lg border border-slate-100 bg-white p-3 text-center shadow-xs transition hover:shadow-md"
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

      {/* 3. TOP 5 BANNERI */}
      <section className="px-6 py-14 text-center sm:px-8">
        <div className="relative border-t border-brand">
          <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-brand px-8 py-1 text-[10px] font-bold uppercase text-white">
            Top 5
          </span>
        </div>
        <p className="mx-auto max-w-2xl py-10 text-lg font-medium uppercase leading-snug sm:text-xl">
          Бренд TRUE FITNESS входит в топ 5 крупнейших производителей фитнес оборудования
        </p>
        <div className="border-t border-brand" />
      </section>

      {/* 4. PRODUCTS (MAHSULOTLAR) */}
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
          {productsList.map((p) => (
            <article
              key={p.n}
              className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-xs transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative overflow-hidden">
                <Img
                  src={p.img}
                  alt={p.n}
                  className="h-48 w-full transition duration-500 group-hover:scale-105"
                />
                <span className="absolute right-3 top-3 rounded-full bg-brand/90 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-xs">
                  {p.badge}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-sm font-bold uppercase text-ink">{p.n}</h3>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-600">{p.d}</p>
                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-3">
                  <span className="text-[11px] font-semibold text-brand">Гарантия 5 лет</span>
                  <a
                    href="#showroom"
                    className="rounded-sm bg-brand px-3 py-1.5 text-[11px] font-bold uppercase text-white transition hover:bg-brand/90"
                  >
                    Подробнее
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 5. STATS (STATISTIKA) */}
      <section className="bg-brand px-6 py-12 text-white sm:px-8">
        <dl className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
          {statsList.map((s) => (
            <div key={s.l}>
              <dt className="text-3xl font-extrabold sm:text-4xl">{s.v}</dt>
              <dd className="mt-2 text-[11px] font-medium uppercase">{s.l}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* 6. FAQ (SAVOL-JAVOBLAR) */}
      <section id="faq" className="px-6 py-14 sm:px-8">
        <h2 className="text-center text-xl font-bold uppercase sm:text-2xl">Частые вопросы</h2>
        <div className="mx-auto mt-8 max-w-3xl divide-y divide-slate-200 border-y border-slate-200">
          {faqList.map((f, i) => (
            <div key={f.q}>
              <button
                type="button"
                onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                aria-expanded={openFaq === i}
                className="flex w-full items-center justify-between gap-4 py-4 text-left text-sm font-semibold"
              >
                {f.q}
                <span className="text-xl text-brand">{openFaq === i ? '−' : '+'}</span>
              </button>
              {openFaq === i && <p className="pb-4 text-xs leading-relaxed text-slate-600">{f.a}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* 7. SHOWROOM (SHOURUM VA ALOQA) */}
      <section id="showroom" className="bg-slate-100 px-6 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src="/images/showroom.jpg"
                alt="TRUE FITNESS Showroom"
                className="h-[380px] w-full object-cover transition duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="rounded-sm bg-brand px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                  Флагманский шоурум в Ташкенте
                </span>
                <h3 className="mt-2 text-xl font-bold uppercase sm:text-2xl">
                  Более 50 тренажеров в наличии
                </h3>
                <p className="mt-1 text-xs text-slate-200">
                  Приходите на бесплатный тест-драйв в удобное для вас время
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <span className="text-xs font-bold uppercase tracking-wider text-brand">
                Официальное представительство
              </span>
              <h2 className="mt-2 text-2xl font-extrabold uppercase text-ink sm:text-3xl">
                Приглашаем в наш <span className="text-brand">Шоурум</span>
              </h2>
              <p className="mt-4 text-xs leading-relaxed text-slate-600 sm:text-sm">
                Оцените эргономику, биомеханику и премиальное качество американских тренажеров лично. Наши сертифицированные эксперты помогут подобрать комплект оборудования и разработают 3D-проект вашего фитнес-клуба.
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase text-ink">Адрес шоурума</h4>
                    <p className="text-xs text-slate-600">г. Ташкент, Юнусабадский район, ул. Амира Темура, 107B</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase text-ink">Режим работы</h4>
                    <p className="text-xs text-slate-600">Понедельник — Суббота: с 09:00 до 20:00 (Воскресенье по записи)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase text-ink">Контакты для записи</h4>
                    <p className="text-xs text-slate-600">+998 (71) 200-05-55 • +998 (90) 123-45-67</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="tel:+998712000555"
                  className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-2.5 text-xs font-bold uppercase text-white shadow-md transition hover:bg-brand/90"
                >
                  <span>Позвонить</span>
                </a>
                <a
                  href="https://t.me"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-xs font-bold uppercase text-slate-700 shadow-xs transition hover:bg-slate-50"
                >
                  <span>Написать в Telegram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
