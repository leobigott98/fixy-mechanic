"use client";

const data = [18, 22, 20, 26, 24, 30, 28, 34, 31, 38, 36, 41, 39, 45];

function toPoints(values: number[], w: number, h: number, pad = 12) {
  const min = Math.min(...values);
  const max = Math.max(...values);
  const dx = (w - pad * 2) / (values.length - 1 || 1);
  return values
    .map((v, i) => {
      const t = max === min ? 0.5 : (v - min) / (max - min);
      const x = pad + i * dx;
      const y = pad + (1 - t) * (h - pad * 2);
      return `${x},${y}`;
    })
    .join(" ");
}

export default function RevenueTrend() {
  const w = 720;
  const h = 220;
  const points = toPoints(data, w, h);

  return (
    <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-base font-semibold text-gray-900">Ingresos (tendencia)</h2>
          <p className="text-sm text-gray-600">Últimos 14 puntos (mock).</p>
        </div>
        <div className="text-sm font-semibold text-blue-600">$4,820</div>
      </div>

      <div className="mt-4 overflow-x-auto">
        <svg width={w} height={h} className="min-w-[720px]">
          <polyline
            points={points}
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            className="text-blue-600"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}