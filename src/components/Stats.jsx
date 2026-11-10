const stats = [
  { v: '1982', l: 'год основания компании' },
  { v: '5 лет', l: 'гарантии на каркас' },
  { v: '100+', l: 'стран, где работает TRUE' },
  { v: '24/7', l: 'техническая поддержка' },
]

export default function Stats() {
  return (
    <section className="bg-brand px-6 py-12 text-white sm:px-8">
      <dl className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.l}>
            <dt className="text-3xl font-extrabold sm:text-4xl">{s.v}</dt>
            <dd className="mt-2 text-[11px] font-medium uppercase">{s.l}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
