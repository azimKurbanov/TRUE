import { NavLink, Link } from 'react-router-dom'

// Umumiy menyu: sahifalarni bir-biriga bog'laydi (Figma: react-router-dom-figma).
// Har bir sahifani o'quvchi o'zi qilgan:
//   /           — Asad (heder.jsx)
//   /open-club  — Kamron (kamron.jsx)
//   /contacts   — Mubina (Contacts.jsx)
const links = [
  { to: '/', label: 'О бренде' },
  { to: '/open-club', label: 'Открыть клуб' },
  { to: '/contacts', label: 'Контакты' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xs">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-2" aria-label="TRUE — главная">
          <span
            className="h-0 w-0 border-b-[22px] border-l-[30px] border-b-brand border-l-transparent"
            aria-hidden="true"
          />
          <span className="text-2xl font-extrabold tracking-[.2em] text-ink">TRUE</span>
        </Link>

        <nav className="flex flex-wrap items-center gap-x-6 gap-y-1 text-xs font-bold uppercase">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                isActive ? 'text-brand' : 'text-ink transition hover:text-brand'
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/open-club"
          className="rounded-sm bg-brand px-4 py-2 text-[11px] font-bold uppercase text-white transition hover:bg-brand/90"
        >
          Оставить заявку
        </Link>
      </div>
    </header>
  )
}
