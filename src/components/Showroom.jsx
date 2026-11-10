export default function Showroom() {
  return (
    <section id="showroom" className="bg-slate-100 px-6 py-16 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Showroom Image with badges */}
          <div className="relative overflow-hidden rounded-2xl shadow-xl">
            <img
              src="/images/showroom.jpg"
              alt="TRUE FITNESS Showroom"
              className="h-[380px] w-full object-cover transition duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="rounded bg-brand px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
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

          {/* Showroom Information */}
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
                <span>Позвонить прямо сейчас</span>
              </a>
              <a
                href="https://t.me"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-xs font-bold uppercase text-slate-700 shadow-sm transition hover:bg-slate-50"
              >
                <span>Написать в Telegram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
