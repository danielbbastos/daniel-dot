export default function WaveSep({ flip = false }: { flip?: boolean }) {
  return (
    <div className={`wave-sep${flip ? " flip" : ""}`} aria-hidden="true">
      <svg viewBox="0 0 1440 50" preserveAspectRatio="none">
        <path
          d="M0 25 C 120 50 240 0 360 25 S 600 50 720 25 960 0 1080 25 1320 50 1440 25"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
