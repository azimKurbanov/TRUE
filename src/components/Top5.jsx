export default function Top5() {
  return (
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
  )
}
