import { useState } from 'react'

export default function Img({ src, alt = '', className = '' }) {
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
