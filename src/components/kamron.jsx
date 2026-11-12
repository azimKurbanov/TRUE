import { useState } from 'react'

export function Header() {
  return (
    <header>
      <div className="mx-auto flex min-h-[82px] max-w-[1160px] items-center justify-between gap-6 px-6 max-sm:min-h-[68px] max-sm:px-4">
        <a href="#top" className="flex items-center gap-2" aria-label="TRUE — на главную">
          <span className="relative block h-8 w-8" aria-hidden="true">
            <span className="absolute left-0 top-0 h-0 w-0 border-b-[23px] border-r-[29px] border-b-transparent border-r-[#13bdd0]" />
            <span className="absolute bottom-0 left-0 h-0 w-0 border-b-[13px] border-r-[20px] border-b-transparent border-r-[#18313c]" />
            <span className="absolute bottom-0 right-0 h-0 w-0 border-b-[10px] border-l-[12px] border-b-[#9ed9d9] border-l-transparent" />
          </span>
          <span>
            <span className="block text-[24px] leading-none font-bold tracking-[.17em]">TRUE</span>
            <span className="mt-1 block text-[7px] tracking-[.12em] text-slate-500">АРХИТЕКТУРА ПРОСТРАНСТВА</span>
          </span>
        </a>

        <nav className="ml-auto flex items-center gap-8 text-xs max-md:hidden" aria-label="Основная навигация">
          <a className="transition-colors hover:text-cyan-600" href="#project">Проект</a>
          <a className="transition-colors hover:text-cyan-600" href="#about">О компании</a>
          <a className="transition-colors hover:text-cyan-600" href="#contacts">Контакты</a>
        </nav>

        <a className="whitespace-nowrap text-xs max-sm:hidden" href="tel:+74951234567">
          +7 495 123-45-67
        </a>
        <a
          className="whitespace-nowrap bg-[#18313c] px-4 py-3 text-[11px] text-white transition-colors hover:bg-cyan-700 max-sm:px-3 max-sm:py-2.5 max-sm:text-[10px]"
          href="#request"
        >
          Оставить заявку
        </a>
      </div>

      <div className="bg-[#13bfd0] text-white" id="project">
        <div className="mx-auto flex min-h-[104px] max-w-[1160px] items-center justify-between px-6 max-sm:min-h-[86px] max-sm:px-4">
          <div>
            <p className="mb-2 text-[9px] font-semibold tracking-[.18em]">ПРОЕКТ TRUE</p>
            <h1 className="text-[clamp(23px,3vw,32px)] font-medium tracking-tight">Планировочное решение</h1>
          </div>
          <p className="text-right text-[11px] leading-relaxed max-sm:hidden">
            Продуманное пространство
            <br />
            для вашей новой жизни
          </p>
        </div>
      </div>
    </header>
  )
}

function FloorPlan() {
  return (
    <svg
      className="mx-auto block h-auto w-full max-w-[780px]"
      viewBox="0 0 900 500"
      role="img"
      aria-label="Изометрический план квартиры с мебелью"
    >
      <defs>
        <filter id="plan-shadow" x="-20%" y="-20%" width="140%" height="160%">
          <feDropShadow dx="0" dy="15" stdDeviation="12" floodColor="#253746" floodOpacity=".15" />
        </filter>
      </defs>
      <g filter="url(#plan-shadow)">
        <path d="M92 205 450 26 808 205 450 384Z" fill="#d9d4c9" />
        <path d="M92 205 450 384V423L92 244Z" fill="#c4b8a5" />
        <path d="M450 384 808 205V244L450 423Z" fill="#b9aa96" />
        <path d="M106 204 450 34 794 204 450 375Z" fill="#f3eee4" />
        <path d="m113 204 111-55 115 57-111 55Z" fill="#dfd5c6" />
        <path d="m228 147 111-55 116 57-112 55Z" fill="#e7ddcd" />
        <path d="m343 92 105-52 115 57-108 53Z" fill="#e1d7c8" />
        <path d="m449 40 112 56-3 116-113-57Z" fill="#e9dfcf" />
        <path d="m561 96 114 56-1 116-115-58Z" fill="#e6dccd" />
        <path d="m676 153 104 52-113 57-107-54Z" fill="#ded4c5" />
        <path d="m113 204 115 57v115l-115-58Z" fill="#e8dfd1" />
        <path d="m228 261 112 56v114l-112-55Z" fill="#e2d8ca" />
        <path d="m340 317 111 56-111 55-112-55Z" fill="#e9e0d3" />
        <path d="m451 373 111-56 114-57v115l-114 57Z" fill="#dfd5c7" />
        <g fill="none" stroke="#fffdf8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="9">
          <path d="m224 149 1 112m115-170v226m112-277v218m112-162v220m115-164v108" />
          <path d="m113 204 115 57 112-56 111 56 113-57 115 57" />
          <path d="m224 261 116 56 111-56 112 56 113-57" />
          <path d="m339 91 109 55 113-57m-1 114 115 58" />
          <path d="m451 373 1-112m111 56v112" />
        </g>
        <g fill="none" stroke="#c1b6a5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
          <path d="m224 149 1 112m115-170v226m112-277v218m112-162v220m115-164v108" />
          <path d="m113 204 115 57 112-56 111 56 113-57 115 57" />
          <path d="m224 261 116 56 111-56 112 56 113-57" />
        </g>
        <g stroke="#c9bda9" strokeWidth="2">
          <path d="m140 196 48-24 47 24-48 24Z" fill="#c7a982" />
          <path d="m145 195 42-21 41 21-42 21Z" fill="#eee2cf" />
          <path d="m155 191 20-10 29 15-20 10Z" fill="#d9c6a9" />
          <path d="m261 139 44-22 52 26-44 22Z" fill="#b7c5bf" />
          <path d="m268 137 37-18 43 22-37 18Z" fill="#e6e9df" />
          <path d="m285 132 17-9 24 12-17 9Z" fill="#b8c5bd" />
          <path d="m375 75 54-27 53 26-54 28Z" fill="#c4aa86" />
          <path d="m382 74 46-23 42 21-46 23Z" fill="#eee4d5" />
          <path d="m394 69 25-13 22 11-25 13Z" fill="#d7c4a8" />
          <path d="m593 130 44 22 1 51-45-23Z" fill="#b9c9c4" />
          <path d="m598 137 34 17v38l-34-17Z" fill="#edf0e7" />
          <path d="m613 154 12 6v19l-12-6Z" fill="#b4c5bf" />
          <path d="m677 186 45 22-47 24-45-23Z" fill="#d1bea2" />
          <path d="m683 190 31 16-36 18-31-16Z" fill="#eee5d7" />
          <path d="m651 281 50-25 1 46-50 25Z" fill="#b6c5c1" />
          <path d="m658 283 35-18v34l-35 18Z" fill="#e8ebe4" />
          <path d="m583 318 39-20 45 22-40 20Z" fill="#c7ad88" />
          <path d="m590 318 32-16 32 16-32 16Z" fill="#efe5d6" />
          <path d="m497 363 44-22 1 37-44 22Z" fill="#c5b194" />
          <path d="m503 363 31-16v24l-31 16Z" fill="#eee3d2" />
          <path d="m262 311 45 22v49l-45-22Z" fill="#bdc9c3" />
          <path d="m269 319 31 16v31l-31-16Z" fill="#eff0e7" />
          <path d="m145 249 46 23v48l-46-23Z" fill="#c8b18f" />
          <path d="m152 258 32 16v30l-32-16Z" fill="#f1e7d8" />
          <path d="m371 310 43 22-1 38-43-22Z" fill="#c3b292" />
          <path d="m377 318 30 15v23l-30-15Z" fill="#eee4d5" />
        </g>
        <g fill="#8a9b91" opacity=".8">
          <circle cx="181" cy="235" r="8" />
          <circle cx="337" cy="104" r="7" />
          <circle cx="544" cy="97" r="8" />
          <circle cx="723" cy="226" r="7" />
          <circle cx="237" cy="348" r="8" />
          <circle cx="560" cy="355" r="7" />
        </g>
      </g>
    </svg>
  )
}

export function Main() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main id="top">
      <section
        className="mx-auto w-[calc(100%-64px)] max-w-[1080px] py-10 max-sm:w-[calc(100%-32px)] max-sm:py-6"
        aria-label="План квартиры"
      >
        <div className="flex items-center justify-between">
          <span className="text-[9px] font-semibold tracking-[.16em] text-slate-500 max-sm:text-[8px]">
            01 / ПРОСТРАНСТВО
          </span>
          <span className="text-[11px] text-slate-600 max-sm:text-[9px]">План квартиры · 86,4 м²</span>
        </div>
        <FloorPlan />
        <div className="mx-auto flex max-w-[780px] items-center gap-2.5 border-t border-slate-200 pt-4">
          <span className="h-[7px] w-[7px] shrink-0 rounded-full bg-cyan-500" />
          <p className="m-0 text-[11px] leading-relaxed text-slate-600 max-sm:text-[10px]">
            Функциональная планировка с отдельной кухней-гостиной и двумя спальнями
          </p>
        </div>
      </section>

      <section
        className="grid grid-cols-2 gap-16 bg-[#f7f5ef] px-[max(32px,calc((100vw-1080px)/2))] py-16 max-md:gap-8 max-md:px-8 max-md:py-12 max-sm:grid-cols-1 max-sm:gap-8 max-sm:px-5 max-sm:py-10"
        id="request"
      >
        <div className="max-w-[440px] self-center">
          <p className="mb-2 text-[9px] font-semibold tracking-[.16em] text-cyan-700">СЛЕДУЮЩИЙ ШАГ</p>
          <h2 className="m-0 text-[clamp(26px,3.5vw,39px)] leading-tight font-medium tracking-tight">
            Получите подробную
            <br />
            информацию о проекте
          </h2>
          <p className="mt-5 max-w-[370px] text-[13px] leading-7 text-slate-600">
            Оставьте контакты — наш специалист ответит на ваши вопросы и поможет выбрать удобное время для встречи.
          </p>
          <div className="mt-7 flex items-center gap-2.5 text-[11px] text-slate-700">
            <span className="grid h-[26px] w-[26px] place-items-center rounded-full border border-cyan-200 text-cyan-700">↗</span>
            <span>Ответим в течение рабочего дня</span>
          </div>
        </div>

        <form className="grid content-center gap-4" onSubmit={handleSubmit}>
          <label className="grid gap-2 text-[10px] font-medium text-slate-700">
            Ваше имя
            <input
              className="w-full border border-slate-200 bg-white/80 px-3 py-3 text-[11px] font-normal outline-none placeholder:text-slate-400 focus:border-cyan-500"
              name="name"
              type="text"
              placeholder="Как к вам обращаться"
              required
            />
          </label>
          <label className="grid gap-2 text-[10px] font-medium text-slate-700">
            Телефон
            <input
              className="w-full border border-slate-200 bg-white/80 px-3 py-3 text-[11px] font-normal outline-none placeholder:text-slate-400 focus:border-cyan-500"
              name="phone"
              type="tel"
              placeholder="+7 (___) ___-__-__"
              required
            />
          </label>
          <label className="grid gap-2 text-[10px] font-medium text-slate-700">
            Электронная почта
            <input
              className="w-full border border-slate-200 bg-white/80 px-3 py-3 text-[11px] font-normal outline-none placeholder:text-slate-400 focus:border-cyan-500"
              name="email"
              type="email"
              placeholder="name@example.ru"
            />
          </label>
          <label className="grid gap-2 text-[10px] font-medium text-slate-700">
            Ваш вопрос <span className="text-[9px] font-normal text-slate-400">необязательно</span>
            <textarea
              className="min-h-[76px] w-full resize-y border border-slate-200 bg-white/80 px-3 py-3 text-[11px] font-normal outline-none placeholder:text-slate-400 focus:border-cyan-500"
              name="message"
              rows="3"
              placeholder="Расскажите, что вас интересует"
            />
          </label>
          <label className="flex cursor-pointer items-start gap-2 text-[9px] leading-5 text-slate-500">
            <input className="mt-1 h-[13px] w-[13px] shrink-0 accent-cyan-600" type="checkbox" required />
            <span>Я согласен(на) на обработку персональных данных</span>
          </label>
          <button
            className="flex min-h-11 items-center justify-between bg-cyan-500 px-4 text-left text-[11px] text-white transition-colors hover:bg-cyan-700"
            type="submit"
          >
            Отправить заявку <span className="text-base" aria-hidden="true">↗</span>
          </button>
          {submitted && (
            <p className="text-[11px] leading-relaxed text-emerald-700" role="status">
              Спасибо! Ваша заявка принята. Мы скоро с вами свяжемся.
            </p>
          )}
        </form>
      </section>
    </main>
  )
}

export function Footer() {
  return (
    <footer
      className="grid grid-cols-4 gap-8 bg-[#13b9c8] px-[max(32px,calc((100vw-1080px)/2))] pt-10 pb-6 text-white max-sm:grid-cols-2 max-sm:gap-x-5 max-sm:gap-y-6 max-sm:px-5 max-sm:pt-8"
      id="contacts"
    >
      <a className="self-start text-2xl font-bold tracking-[.14em]" href="#top">
        TRUE<span className="ml-1 align-top text-[9px] tracking-normal">®</span>
      </a>
      <p className="mt-1 text-xs leading-relaxed" id="about">
        Пространство, в котором
        <br />
        хочется быть.
      </p>
      <nav className="grid content-start justify-items-start gap-2.5 text-[10px]" aria-label="Ссылки в подвале">
        <a className="transition-opacity hover:opacity-70" href="#project">Проект</a>
        <a className="transition-opacity hover:opacity-70" href="#about">О компании</a>
        <a className="transition-opacity hover:opacity-70" href="#request">Оставить заявку</a>
      </nav>
      <div className="grid content-start justify-items-start gap-2.5 text-[10px]">
        <span className="mb-1 text-[8px] tracking-[.13em] opacity-75">БУДЕМ НА СВЯЗИ</span>
        <a className="transition-opacity hover:opacity-70" href="tel:+74951234567">+7 495 123-45-67</a>
        <a className="transition-opacity hover:opacity-70" href="mailto:hello@true.ru">hello@true.ru</a>
      </div>
      <span className="col-span-full border-t border-white/30 pt-4 text-[8px] opacity-75">© TRUE, 2025</span>
    </footer>
  )
}