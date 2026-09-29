export default function MomtrailMethodeCircle() {
  const cx = 340, cy = 340;

  return (
    <svg viewBox="0 0 680 640" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-xl mx-auto">
      <defs>
        <marker id="mm-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M 0 1.5 L 9 5 L 0 8.5 Z" fill="#c16052" opacity="0.65" />
        </marker>
      </defs>

      {/* Header */}
      <text x={cx} y="38" textAnchor="middle" fontStyle="italic" fontSize="13" fill="#76473a" opacity="0.55" fontFamily="Georgia, serif">een voortdurende cirkel</text>
      <line x1="200" y1="43" x2="252" y2="43" stroke="#c16052" strokeWidth="1" opacity="0.2" strokeDasharray="3 2" />
      <line x1="428" y1="43" x2="480" y2="43" stroke="#c16052" strokeWidth="1" opacity="0.2" strokeDasharray="3 2" />

      {/* Track circle */}
      <circle cx={cx} cy={cy} r="215" fill="none" stroke="#c16052" strokeWidth="2" strokeDasharray="7 5" opacity="0.2" />

      {/* Arrows (clockwise: Reguleren→Voelen→Begrijpen→Kiezen→Reguleren) */}
      <path d="M 397 182 A 225 225 0 0 1 498 283" fill="none" stroke="#c16052" strokeWidth="2" opacity="0.45" markerEnd="url(#mm-arrow)" />
      <path d="M 498 397 A 225 225 0 0 1 397 498" fill="none" stroke="#c16052" strokeWidth="2" opacity="0.45" markerEnd="url(#mm-arrow)" />
      <path d="M 283 498 A 225 225 0 0 1 182 397" fill="none" stroke="#c16052" strokeWidth="2" opacity="0.45" markerEnd="url(#mm-arrow)" />
      <path d="M 182 283 A 225 225 0 0 1 283 182" fill="none" stroke="#c16052" strokeWidth="2" opacity="0.45" markerEnd="url(#mm-arrow)" />

      {/* ── Node 1: REGULEREN (top, teal) ── */}
      <circle cx={cx} cy="125" r="80" fill="#6b9ea0" />
      {/* leaf icon */}
      <g transform="translate(340,84)">
        <path d="M 0 11 C -7 5 -7 -6 0 -11 C 7 -6 7 5 0 11 Z" fill="none" stroke="white" strokeWidth="1.5" opacity="0.85" />
        <line x1="0" y1="8" x2="0" y2="15" stroke="white" strokeWidth="1.5" opacity="0.7" />
      </g>
      <text x={cx} y="113" textAnchor="middle" fontSize="7" fill="white" opacity="0.55">01</text>
      <text x={cx} y="130" textAnchor="middle" fontSize="13" fontWeight="bold" fill="white" letterSpacing="0.5">REGULEREN</text>

      {/* ── Node 2: VOELEN (right, sage green) ── */}
      <circle cx="555" cy={cy} r="80" fill="#8fa084" />
      {/* heart icon */}
      <g transform="translate(555,299)">
        <path d="M 0 11 C -4 7 -11 1 -11 -4 C -11 -9 -6 -12 0 -7 C 6 -12 11 -9 11 -4 C 11 1 4 7 0 11 Z" fill="none" stroke="white" strokeWidth="1.5" opacity="0.85" />
      </g>
      <text x="555" y="333" textAnchor="middle" fontSize="7" fill="white" opacity="0.55">02</text>
      <text x="555" y="350" textAnchor="middle" fontSize="13" fontWeight="bold" fill="white" letterSpacing="0.5">VOELEN</text>

      {/* ── Node 3: BEGRIJPEN (bottom, primair red) ── */}
      <circle cx={cx} cy="555" r="80" fill="#c16052" />
      {/* brain icon */}
      <g transform="translate(340,514)">
        <path d="M -9 2 C -9 -6 -4 -11 0 -8 C 4 -11 9 -6 9 2 C 9 7 5 10 0 10 C -5 10 -9 7 -9 2 Z" fill="none" stroke="white" strokeWidth="1.5" opacity="0.85" />
        <line x1="0" y1="-8" x2="0" y2="10" stroke="white" strokeWidth="1" opacity="0.55" />
        <path d="M -9 2 C -5 2 -5 -2 0 -2 C 5 -2 5 2 9 2" fill="none" stroke="white" strokeWidth="1" opacity="0.55" />
      </g>
      <text x={cx} y="543" textAnchor="middle" fontSize="7" fill="white" opacity="0.55">03</text>
      <text x={cx} y="560" textAnchor="middle" fontSize="13" fontWeight="bold" fill="white" letterSpacing="0.5">BEGRIJPEN</text>

      {/* ── Node 4: KIEZEN (left, warm gold) ── */}
      <circle cx="125" cy={cy} r="80" fill="#c4a96d" />
      {/* signpost icon */}
      <g transform="translate(125,299)">
        <line x1="0" y1="-14" x2="0" y2="14" stroke="white" strokeWidth="1.5" opacity="0.75" />
        <path d="M -12 -11 L 10 -11 L 14 -7 L 10 -3 L -12 -3 Z" fill="none" stroke="white" strokeWidth="1.5" opacity="0.85" />
        <path d="M 12 3 L -10 3 L -14 7 L -10 11 L 12 11 Z" fill="none" stroke="white" strokeWidth="1.5" opacity="0.85" />
      </g>
      <text x="125" y="333" textAnchor="middle" fontSize="7" fill="white" opacity="0.55">04</text>
      <text x="125" y="350" textAnchor="middle" fontSize="13" fontWeight="bold" fill="white" letterSpacing="0.5">KIEZEN</text>

      {/* Center text */}
      <text x={cx} y="314" textAnchor="middle" fontSize="26" fill="#c16052" fontFamily="Georgia, serif" fontStyle="italic">Momtrail</text>
      <text x={cx} y="332" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#76473a" letterSpacing="1">methode</text>
      <text x={cx} y="350" textAnchor="middle" fontSize="13" fill="#c16052" opacity="0.5">♡</text>
      <text x={cx} y="366" textAnchor="middle" fontSize="8.5" fill="#76473a" opacity="0.6">Van automatische reactie</text>
      <text x={cx} y="379" textAnchor="middle" fontSize="8.5" fill="#76473a" opacity="0.6">naar bewuste keuze</text>

      {/* Transition labels */}
      <text x="505" y="182" textAnchor="middle" fontSize="11" fill="#76473a" opacity="0.6" fontStyle="italic">Regulatie creëert</text>
      <text x="505" y="196" textAnchor="middle" fontSize="11" fill="#76473a" opacity="0.6" fontStyle="italic">ruimte om te voelen.</text>

      <text x="500" y="503" textAnchor="middle" fontSize="11" fill="#76473a" opacity="0.6" fontStyle="italic">Lichaamsbewustzijn</text>
      <text x="500" y="517" textAnchor="middle" fontSize="11" fill="#76473a" opacity="0.6" fontStyle="italic">brengt je naar jezelf.</text>

      <text x="172" y="503" textAnchor="middle" fontSize="11" fill="#76473a" opacity="0.6" fontStyle="italic">Bewustzijn creëert</text>
      <text x="172" y="517" textAnchor="middle" fontSize="11" fill="#76473a" opacity="0.6" fontStyle="italic">ruimte om te kiezen.</text>

      <text x="168" y="182" textAnchor="middle" fontSize="11" fill="#76473a" opacity="0.6" fontStyle="italic">Nieuwe keuzes geven</text>
      <text x="168" y="196" textAnchor="middle" fontSize="11" fill="#76473a" opacity="0.6" fontStyle="italic">nieuwe inzichten.</text>
    </svg>
  );
}
