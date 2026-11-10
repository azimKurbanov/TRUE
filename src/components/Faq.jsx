import { useState } from 'react'

const faq = [
  { q: 'Какая гарантия на тренажеры TRUE?', a: 'До 5 лет полной гарантии на каркас и до 2 лет на электронику и комплектующие.' },
  { q: 'Есть ли доставка и установка?', a: 'Да, мы доставляем, собираем и настраиваем оборудование в вашем зале.' },
  { q: 'Можно ли получить консультацию по подбору оборудования?', a: 'Конечно. Оставьте заявку, и специалист поможет подобрать модели под ваш бюджет и площадь.' },
  { q: 'Где купить запчасти и пройти обслуживание?', a: 'Запчасти есть на складе, а сервисная служба выезжает в оперативные сроки.' },
]

export default function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" className="px-6 py-14 sm:px-8">
      <h2 className="text-center text-xl font-bold uppercase sm:text-2xl">Частые вопросы</h2>
      <div className="mx-auto mt-8 max-w-3xl divide-y divide-slate-200 border-y border-slate-200">
        {faq.map((f, i) => (
          <div key={f.q}>
            <button
              type="button"
              onClick={() => setOpen(open === i ? -1 : i)}
              aria-expanded={open === i}
              className="flex w-full items-center justify-between gap-4 py-4 text-left text-sm font-semibold"
            >
              {f.q}
              <span className="text-xl text-brand">{open === i ? '−' : '+'}</span>
            </button>
            {open === i && <p className="pb-4 text-xs leading-relaxed text-slate-600">{f.a}</p>}
          </div>
        ))}
      </div>
    </section>
  )
}
