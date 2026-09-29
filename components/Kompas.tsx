export default function Kompas({ className = 'text-accent mt-1 shrink-0' }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-4 h-4 ${className}`}>
      <circle cx="10" cy="10" r="8.5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M10 3 L12 10 L10 8.5 L8 10 Z" fill="currentColor"/>
      <path d="M10 17 L8 10 L10 11.5 L12 10 Z" fill="currentColor" opacity="0.35"/>
      <circle cx="10" cy="10" r="1.5" fill="currentColor"/>
    </svg>
  );
}
