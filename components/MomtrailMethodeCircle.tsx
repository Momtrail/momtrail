export default function MomtrailMethodeCircle() {
  const cx = 340, cy = 340;

  return (
    <svg viewBox="0 0 680 680" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-xl mx-auto">
      <defs>
        <marker id="mm-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M 0 1.5 L 9 5 L 0 8.5 Z" fill="#c16052" opacity="0.65" />
        </marker>
      </defs>

      {/* Header */}
      <text x={cx} y="36" textAnchor="middle" fontStyle="italic" fontSize="18" fill="#76473a" opacity="0.65" fontFamily="Georgia, serif">een voortdurende cirkel</text>

      {/* Track circle */}
      <circle cx={cx} cy={cy} r="215" fill="none" stroke="#c16052" strokeWidth="2" strokeDasharray="7 5" opacity="0.2" />

      {/* Arrows */}
      <path d="M 397 182 A 225 225 0 0 1 498 283" fill="none" stroke="#c16052" strokeWidth="2.5" opacity="0.45" markerEnd="url(#mm-arrow)" />
      <path d="M 498 397 A 225 225 0 0 1 397 498" fill="none" stroke="#c16052" strokeWidth="2.5" opacity="0.45" markerEnd="url(#mm-arrow)" />
      <path d="M 283 498 A 225 225 0 0 1 182 397" fill="none" stroke="#c16052" strokeWidth="2.5" opacity="0.45" markerEnd="url(#mm-arrow)" />
      <path d="M 182 283 A 225 225 0 0 1 283 182" fill="none" stroke="#c16052" strokeWidth="2.5" opacity="0.45" markerEnd="url(#mm-arrow)" />

      {/* ── Node 1: REGULEREN (top, teal) ── */}
      <circle cx={cx} cy="125" r="85" fill="#6b9ea0" />
      <g transform="translate(340,86)">
        <path d="M 0 13 C -8 6 -8 -7 0 -13 C 8 -7 8 6 0 13 Z" fill="none" stroke="white" strokeWidth="2" opacity="0.85" />
        <line x1="0" y1="10" x2="0" y2="18" stroke="white" strokeWidth="2" opacity="0.7" />
      </g>
      <text x={cx} y="114" textAnchor="middle" fontSize="11" fill="white" opacity="0.6">01</text>
      <text x={cx} y="138" textAnchor="middle" fontSize="20" fontWeight="bold" fill="white" letterSpacing="1">REGULEREN</text>

      {/* ── Node 2: VOELEN (right, sage green) ── */}
      <circle cx="555" cy={cy} r="85" fill="#8fa084" />
      <g transform="translate(555,300)">
        <path d="M 0 13 C -5 8 -13 1 -13 -5 C -13 -11 -7 -14 0 -8 C 7 -14 13 -11 13 -5 C 13 1 5 8 0 13 Z" fill="none" stroke="white" strokeWidth="2" opacity="0.85" />
      </g>
      <text x="555" y="328" textAnchor="middle" fontSize="11" fill="white" opacity="0.6">02</text>
      <text x="555" y="352" textAnchor="middle" fontSize="20" fontWeight="bold" fill="white" letterSpacing="1">VOELEN</text>

      {/* ── Node 3: BEGRIJPEN (bottom, primair red) ── */}
      <circle cx={cx} cy="555" r="85" fill="#c16052" />
      <g transform="translate(340,516)">
        <path d="M -10 2 C -10 -7 -5 -13 0 -10 C 5 -13 10 -7 10 2 C 10 8 6 12 0 12 C -6 12 -10 8 -10 2 Z" fill="none" stroke="white" strokeWidth="2" opacity="0.85" />
        <line x1="0" y1="-10" x2="0" y2="12" stroke="white" strokeWidth="1.2" opacity="0.5" />
        <path d="M -10 2 C -6 2 -6 -3 0 -3 C 6 -3 6 2 10 2" fill="none" stroke="white" strokeWidth="1.2" opacity="0.5" />
      </g>
      <text x={cx} y="544" textAnchor="middle" fontSize="11" fill="white" opacity="0.6">03</text>
      <text x={cx} y="568" textAnchor="middle" fontSize="20" fontWeight="bold" fill="white" letterSpacing="1">BEGRIJPEN</text>

      {/* ── Node 4: KIEZEN (left, warm gold) ── */}
      <circle cx="125" cy={cy} r="85" fill="#c4a96d" />
      <g transform="translate(125,300)">
        <line x1="0" y1="-16" x2="0" y2="16" stroke="white" strokeWidth="2" opacity="0.75" />
        <path d="M -14 -13 L 11 -13 L 16 -8 L 11 -3 L -14 -3 Z" fill="none" stroke="white" strokeWidth="2" opacity="0.85" />
        <path d="M 14 3 L -11 3 L -16 8 L -11 13 L 14 13 Z" fill="none" stroke="white" strokeWidth="2" opacity="0.85" />
      </g>
      <text x="125" y="328" textAnchor="middle" fontSize="11" fill="white" opacity="0.6">04</text>
      <text x="125" y="352" textAnchor="middle" fontSize="20" fontWeight="bold" fill="white" letterSpacing="1">KIEZEN</text>

      {/* Center text */}
      <text x={cx} y="310" textAnchor="middle" fontSize="30" fill="#c16052" fontFamily="Georgia, serif" fontStyle="italic">Momtrail</text>
      <text x={cx} y="332" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#76473a" letterSpacing="2">methode</text>
      <text x={cx} y="352" textAnchor="middle" fontSize="15" fill="#c16052" opacity="0.5">♡</text>
      <text x={cx} y="372" textAnchor="middle" fontSize="12" fill="#76473a" opacity="0.6">Van automatische reactie</text>
      <text x={cx} y="388" textAnchor="middle" fontSize="12" fill="#76473a" opacity="0.6">naar bewuste keuze</text>

      {/* Transition labels */}
      <text x="510" y="178" textAnchor="middle" fontSize="17" fill="#76473a" opacity="0.65" fontStyle="italic">Regulatie creëert</text>
      <text x="510" y="198" textAnchor="middle" fontSize="17" fill="#76473a" opacity="0.65" fontStyle="italic">ruimte om te voelen.</text>

      <text x="506" y="510" textAnchor="middle" fontSize="17" fill="#76473a" opacity="0.65" fontStyle="italic">Lichaamsbewustzijn</text>
      <text x="506" y="530" textAnchor="middle" fontSize="17" fill="#76473a" opacity="0.65" fontStyle="italic">brengt je naar jezelf.</text>

      <text x="166" y="510" textAnchor="middle" fontSize="17" fill="#76473a" opacity="0.65" fontStyle="italic">Bewustzijn creëert</text>
      <text x="166" y="530" textAnchor="middle" fontSize="17" fill="#76473a" opacity="0.65" fontStyle="italic">ruimte om te kiezen.</text>

      <text x="162" y="178" textAnchor="middle" fontSize="17" fill="#76473a" opacity="0.65" fontStyle="italic">Nieuwe keuzes geven</text>
      <text x="162" y="198" textAnchor="middle" fontSize="17" fill="#76473a" opacity="0.65" fontStyle="italic">nieuwe inzichten.</text>
    </svg>
  );
}
