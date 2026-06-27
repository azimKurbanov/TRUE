import React, { useState } from 'react'

const Contacts = () => {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Сообщение отправлено!')
    setForm({ name: '', phone: '', email: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <div className="bg-[#01AEE7] py-12 text-center">
        <p className="text-[#FFF500] text-sm font-bold tracking-widest mb-2">TRUE FITNESS</p>
        <h1 className="text-white text-4xl font-bold">КОНТАКТЫ</h1>
        <p className="text-white/80 mt-2 text-lg">Мы всегда на связи</p>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* Info */}
        <div>
          <h2 className="text-xl font-bold text-[#01AEE7] mb-8 uppercase tracking-wide">Информация</h2>

          <div className="space-y-6 text-[14px] text-gray-700">
            <div className="flex gap-4 items-start">
              <span className="text-2xl">📍</span>
              <div>
                <p className="font-bold uppercase text-[12px] text-gray-500 mb-1">Адрес</p>
                <p>г. Ташкент, ул. Амира Темура, 107</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-2xl">📞</span>
              <div>
                <p className="font-bold uppercase text-[12px] text-gray-500 mb-1">Телефон</p>
                <p>+998 (90)-606-66-66</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-2xl">✉️</span>
              <div>
                <p className="font-bold uppercase text-[12px] text-gray-500 mb-1">Email</p>
                <p>info@truefitness.uz</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-2xl">🕐</span>
              <div>
                <p className="font-bold uppercase text-[12px] text-gray-500 mb-1">Режим работы</p>
                <p>Пн–Пт: 07:00 – 22:00</p>
                <p>Сб–Вс: 09:00 – 20:00</p>
              </div>
            </div>
          </div>

          <div className="flex gap-3 mt-10">
            <a href="#" className="bg-[#01AEE7] text-white text-[11px] font-bold px-4 py-2 uppercase hover:bg-sky-600 transition">Instagram</a>
            <a href="#" className="bg-[#01AEE7] text-white text-[11px] font-bold px-4 py-2 uppercase hover:bg-sky-600 transition">Telegram</a>
            <a href="#" className="bg-[#01AEE7] text-white text-[11px] font-bold px-4 py-2 uppercase hover:bg-sky-600 transition">YouTube</a>
          </div>
        </div>

        {/* Form */}
        <div>
          <h2 className="text-xl font-bold text-[#01AEE7] mb-8 uppercase tracking-wide">Написать нам</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-[11px] font-semibold text-gray-500 mb-1 tracking-wide">ИМЯ</label>
              <input
                type="text" name="name" value={form.name} onChange={handleChange}
                placeholder="Ваше имя"
                className="w-full border-b border-gray-300 bg-transparent pb-1 text-[13px] outline-none focus:border-[#01AEE7] transition"
                required
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-gray-500 mb-1 tracking-wide">ТЕЛЕФОН</label>
              <input
                type="tel" name="phone" value={form.phone} onChange={handleChange}
                placeholder="+998 (99)-999-99-99"
                className="w-full border-b border-gray-300 bg-transparent pb-1 text-[13px] outline-none focus:border-[#01AEE7] transition"
                required
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-gray-500 mb-1 tracking-wide">EMAIL</label>
              <input
                type="email" name="email" value={form.email} onChange={handleChange}
                placeholder="email@example.com"
                className="w-full border-b border-gray-300 bg-transparent pb-1 text-[13px] outline-none focus:border-[#01AEE7] transition"
                required
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-gray-500 mb-1 tracking-wide">СООБЩЕНИЕ</label>
              <textarea
                name="message" value={form.message} onChange={handleChange}
                placeholder="Ваш вопрос..."
                rows={4}
                className="w-full border-b border-gray-300 bg-transparent pb-1 text-[13px] outline-none focus:border-[#01AEE7] transition resize-none"
              />
            </div>
            <div className="flex justify-center pt-2">
              <button
                type="submit"
                className="bg-[#01AEE7] hover:bg-sky-600 text-white text-[12px] font-bold px-12 py-[8px] uppercase tracking-widest transition cursor-pointer"
              >
                ОТПРАВИТЬ
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Map placeholder */}
      <div className="bg-gray-100 h-[300px] flex items-center justify-center text-gray-400 text-lg">
        🗺️ Карта — г. Ташкент, ул. Амира Темура, 107
      </div>
    </div>
  )
}

export default Contacts
