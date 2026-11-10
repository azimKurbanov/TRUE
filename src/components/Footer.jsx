export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
      {/* Top Banner inside Footer */}
      <div className="border-b border-slate-800/80 bg-slate-900/50 px-6 py-8 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <div>
            <h4 className="text-base font-bold uppercase text-white sm:text-lg">
              Нужен персональный расчет или 3D-проект клуба?
            </h4>
            <p className="mt-1 text-xs text-slate-400">
              Свяжитесь с нами сегодня и получите специальное предложение для вашего бизнеса
            </p>
          </div>
          <a
            href="tel:+998712000555"
            className="shrink-0 rounded-lg bg-brand px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-brand/20 transition hover:bg-brand/90 hover:scale-105"
          >
            Получить консультацию
          </a>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="mx-auto max-w-6xl px-6 py-12 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Col 1: Brand */}
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-extrabold uppercase tracking-tight text-white">
                TRUE <span className="text-brand">FITNESS</span>
              </span>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-slate-400">
              Мировой лидер в производстве премиального фитнес-оборудования с 1982 года. Инновации, долговечность и комфорт в каждой детали.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://t.me"
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition hover:bg-brand hover:text-white"
                title="Telegram"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.37.74-.56 2.92-1.27 4.86-2.11 5.83-2.52 2.77-1.16 3.35-1.36 3.73-1.37.08 0 .27.02.39.12.1.08.13.2.14.28-.01.07-.01.22-.03.36z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition hover:bg-brand hover:text-white"
                title="Instagram"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition hover:bg-brand hover:text-white"
                title="YouTube"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Навигация</h4>
            <ul className="mt-4 space-y-2 text-xs text-slate-400">
              <li><a href="#" className="transition hover:text-brand">Главная</a></li>
              <li><a href="#products" className="transition hover:text-brand">Каталог оборудования</a></li>
              <li><a href="#showroom" className="transition hover:text-brand">Наш Шоурум</a></li>
              <li><a href="#faq" className="transition hover:text-brand">Частые вопросы</a></li>
              <li><a href="#advantages" className="transition hover:text-brand">Преимущества TRUE</a></li>
            </ul>
          </div>

          {/* Col 3: Products */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Категории</h4>
            <ul className="mt-4 space-y-2 text-xs text-slate-400">
              <li><a href="#products" className="transition hover:text-brand">Беговые дорожки серии Alpine</a></li>
              <li><a href="#products" className="transition hover:text-brand">Эллиптические тренажеры Spectrum</a></li>
              <li><a href="#products" className="transition hover:text-brand">Велотренажеры с консолью Envision</a></li>
              <li><a href="#products" className="transition hover:text-brand">Силовые комплексы Palladium</a></li>
              <li><a href="#products" className="transition hover:text-brand">Аксессуары и свободные веса</a></li>
            </ul>
          </div>

          {/* Col 4: Contacts & Support */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Контакты</h4>
            <div className="mt-4 space-y-2.5 text-xs text-slate-400">
              <p className="flex items-center gap-2">
                <span className="font-semibold text-white">Телефон:</span>
                <a href="tel:+998712000555" className="text-brand hover:underline">+998 (71) 200-05-55</a>
              </p>
              <p className="flex items-center gap-2">
                <span className="font-semibold text-white">Email:</span>
                <a href="mailto:info@truefitness.uz" className="hover:text-white">info@truefitness.uz</a>
              </p>
              <p className="flex items-start gap-2">
                <span className="font-semibold text-white">Адрес:</span>
                <span>г. Ташкент, ул. Амира Темура, 107B</span>
              </p>
              <p className="pt-2 text-[11px] text-accent">
                ✓ Собственный сервисный центр и склад оригинальных запчастей в Ташкенте
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800/80 pt-6 text-[11px] text-slate-500 sm:flex-row">
          <p>© 2026 TRUE FITNESS UZBEKISTAN. Все права защищены.</p>
          <p className="flex gap-4">
            <span className="hover:text-slate-300">Политика конфиденциальности</span>
            <span>•</span>
            <span className="hover:text-slate-300">Сертификаты соответствия</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
