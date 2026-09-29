export default function Kompas({ className = 'text-accent mt-1 shrink-0' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-4 h-4 ${className}`}>
      {/* Outer circle */}
      <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1.5"/>
      {/* Inner ring */}
      <circle cx="50" cy="50" r="36" stroke="currentColor" strokeWidth="0.75" opacity="0.55"/>

      {/* ── Large cardinal points (N/S/E/W) ── */}
      {/* N – left half dark */}
      <path d="M 50 50 L 44 50 L 50 4 Z" fill="currentColor" opacity="0.85"/>
      {/* N – right half light */}
      <path d="M 50 50 L 50 4 L 56 50 Z" fill="currentColor" opacity="0.38"/>
      {/* S – right half dark */}
      <path d="M 50 50 L 56 50 L 50 96 Z" fill="currentColor" opacity="0.85"/>
      {/* S – left half light */}
      <path d="M 50 50 L 50 96 L 44 50 Z" fill="currentColor" opacity="0.38"/>
      {/* E – top half dark */}
      <path d="M 50 50 L 50 44 L 96 50 Z" fill="currentColor" opacity="0.85"/>
      {/* E – bottom half light */}
      <path d="M 50 50 L 96 50 L 50 56 Z" fill="currentColor" opacity="0.38"/>
      {/* W – bottom half dark */}
      <path d="M 50 50 L 50 56 L 4 50 Z" fill="currentColor" opacity="0.85"/>
      {/* W – top half light */}
      <path d="M 50 50 L 4 50 L 50 44 Z" fill="currentColor" opacity="0.38"/>

      {/* ── Small diagonal points (NE/SE/SW/NW) ── */}
      {/* NE–SW diamond */}
      <path d="M 68 32 L 48 48 L 32 68 Z" fill="currentColor" opacity="0.72"/>
      <path d="M 68 32 L 32 68 L 52 52 Z" fill="currentColor" opacity="0.32"/>
      {/* NW–SE diamond */}
      <path d="M 32 32 L 68 68 L 48 52 Z" fill="currentColor" opacity="0.72"/>
      <path d="M 32 32 L 52 48 L 68 68 Z" fill="currentColor" opacity="0.32"/>

      {/* ── Inner star (smaller, lighter — depth effect) ── */}
      <path d="M 50 50 L 46 50 L 50 22 Z" fill="currentColor" opacity="0.22"/>
      <path d="M 50 50 L 50 22 L 54 50 Z" fill="currentColor" opacity="0.1"/>
      <path d="M 50 50 L 54 50 L 50 78 Z" fill="currentColor" opacity="0.22"/>
      <path d="M 50 50 L 50 78 L 46 50 Z" fill="currentColor" opacity="0.1"/>
      <path d="M 50 50 L 50 46 L 78 50 Z" fill="currentColor" opacity="0.22"/>
      <path d="M 50 50 L 78 50 L 50 54 Z" fill="currentColor" opacity="0.1"/>
      <path d="M 50 50 L 50 54 L 22 50 Z" fill="currentColor" opacity="0.22"/>
      <path d="M 50 50 L 22 50 L 50 46 Z" fill="currentColor" opacity="0.1"/>
      {/* Inner diagonal small points */}
      <path d="M 62 38 L 44 44 L 38 62 Z" fill="currentColor" opacity="0.18"/>
      <path d="M 62 38 L 38 62 L 56 56 Z" fill="currentColor" opacity="0.08"/>
      <path d="M 38 38 L 62 62 L 44 56 Z" fill="currentColor" opacity="0.18"/>
      <path d="M 38 38 L 56 44 L 62 62 Z" fill="currentColor" opacity="0.08"/>

      {/* Center */}
      <circle cx="50" cy="50" r="3.5" fill="currentColor" opacity="0.9"/>
      <circle cx="50" cy="50" r="2" stroke="currentColor" strokeWidth="0.75" fill="none" opacity="0.35"/>
    </svg>
  );
}
