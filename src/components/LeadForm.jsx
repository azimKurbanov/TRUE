import { useState } from 'react'

export default function LeadForm() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget))
    console.log('Заявка:', data) // bu yerga o'zingizning API/Telegram bot so'rovingizni qo'shing
    setSent(true)
  }

  const field = 'h-10 w-full bg-slate-200 px-3 text-xs font-semibold text-ink placeholder:text-ink outline-none focus:ring-2 focus:ring-brand'

  return (
    <section
      id="order"
      className="relative bg-slate-800 bg-cover bg-center px-6 py-16 text-center text-white sm:px-8"
      style={{ backgroundImage: "url('/images/form-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-slate-900/70" />
      <div className="relative">
        <p className="text-[10px] font-semibold uppercase text-accent">True Fitness</p>
        <h2 className="mx-auto mt-5 max-w-md text-2xl font-bold uppercase leading-tight sm:text-3xl">
          Получите <span className="text-brand">эксклюзивное предложение</span> на тренажеры <span className="text-brand">True Fitness</span>
        </h2>
        <p className="mt-4 text-[10px] font-bold uppercase text-accent">Мы будем рады проконсультировать вас и помочь с подбором оборудования</p>

        {sent ? (
          <p className="mx-auto mt-10 max-w-md bg-brand p-4 text-sm font-semibold">Спасибо! Мы свяжемся с вами в ближайшее время.</p>
        ) : (
          <form onSubmit={onSubmit} className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-[1fr_1.3fr_1fr_auto]">
            <input name="name" required placeholder="ИМЯ" className={field} />
            <input name="phone" required type="tel" defaultValue="+998 " placeholder="+998 (99) 999-99-99" className={field} />
            <input name="email" type="email" placeholder="E-MAIL" className={field} />
            <button type="submit" className="h-10 bg-brand px-8 text-xs font-bold uppercase transition hover:brightness-110">
              Отправить
            </button>
          </form>
        )}
        <p className="mx-auto mt-5 max-w-sm text-[10px] font-semibold leading-snug">
          «Нажимая на кнопку, Вы даете согласие на обработку персональных данных и соглашаетесь с политикой конфиденциальности»
        </p>
      </div>
    </section>
  )
}
