import { useEffect, useState } from 'react';

export default function AppLoader() {
  const [show, setShow] = useState(true);
  const [fade, setFade] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulasi progress agar terasa hidup sebelum event 'load'
    const interval = setInterval(() => {
      setProgress((p) => Math.min(92, p + Math.random() * 7));
    }, 70);

    const onLoad = () => {
      clearInterval(interval);
      setProgress(100);
      // Sedikit jeda agar transisi tidak mendadak, lalu fade-out & unmount
      setTimeout(() => setFade(true), 150);
      setTimeout(() => setShow(false), 600);
    };

    if (document.readyState === 'complete') onLoad();
    else window.addEventListener('load', onLoad);

    return () => {
      clearInterval(interval);
      window.removeEventListener('load', onLoad);
    };
  }, []);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden transition-opacity duration-500 ${fade ? 'opacity-0 pointer-events-none' : 'opacity-100'} bg-slate-900/80`}
    >
      <Style />

      {/* Glow blobs latar untuk nuansa premium */}
      <div className="absolute -top-24 -left-20 w-72 h-72 rounded-full bg-indigo-500/25 blur-3xl" />
      <div className="absolute -bottom-24 -right-20 w-72 h-72 rounded-full bg-fuchsia-500/25 blur-3xl" />
      <div className="absolute inset-0 animated-grid opacity-20" />

      <div className="relative flex flex-col items-center gap-6 select-none">
        {/* Swirl ring + orbit dot yang unik */}
        <div className="relative">
          <div className="swirl-ring" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="core-glow" />
          </div>
          <div className="orbit">
            <div className="orbit-dot" />
          </div>
        </div>

        {/* Progress shimmer ala CTA biru-ungu */}
        <div className="w-64 h-[6px] rounded-full overflow-hidden bg-white/10">
          <div className="h-full rounded-full shimmer" style={{ width: `${progress}%` }} />
        </div>

        {/* Teks status */}
        <div className="text-white/90 text-sm tracking-wide animate-[textFade_1.8s_ease-in-out_infinite]">
          <span className="font-medium gradient-text">Memuat halaman…</span>
        </div>
      </div>
    </div>
  );
}

function Style() {
  return (
    <style>{`
      .swirl-ring{
        width: 112px; height: 112px; border-radius: 9999px;
        background: conic-gradient(from 0deg, #6366F1, #A855F7, #EC4899, #6366F1);
        mask: radial-gradient(circle, transparent 56%, black 58%);
        animation: spin 3s linear infinite;
        box-shadow: 0 0 16px rgba(99,102,241,.35), inset 0 0 8px rgba(168,85,247,.25);
        filter: saturate(1.15);
      }
      .core-glow{
        width: 36px; height: 36px; border-radius: 9999px;
        background: radial-gradient(circle at 30% 30%, #fff, #c7d2fe 40%, transparent 70%);
        box-shadow: 0 0 24px rgba(255,255,255,.45);
        filter: blur(.4px);
        animation: pulse 2s ease-in-out infinite;
      }
      .orbit{
        position: absolute; inset: 0; transform-origin: center; animation: spin 3s linear infinite;
      }
      .orbit-dot{
        position: absolute; top: -5px; left: 50%; width: 10px; height: 10px;
        transform: translateX(-50%);
        border-radius: 9999px; background: #fff;
        box-shadow: 0 0 12px rgba(255,255,255,.7), 0 0 32px rgba(99,102,241,.6);
      }
      .shimmer{
        background: linear-gradient(90deg, rgba(99,102,241,.15), rgba(99,102,241,.9), rgba(168,85,247,.9), rgba(99,102,241,.15));
        background-size: 200% 100%;
        animation: shimmer 2.4s ease-in-out infinite;
      }
      .gradient-text{
        background: linear-gradient(90deg, #c7d2fe, #e9d5ff, #ffd1e5);
        -webkit-background-clip: text; background-clip: text; color: transparent;
        filter: drop-shadow(0 0 0.35px rgba(255,255,255,.4));
      }
      .animated-grid{
        background-image:
          radial-gradient(circle at 20% 20%, rgba(99,102,241,.25), transparent 25%),
          radial-gradient(circle at 80% 80%, rgba(168,85,247,.25), transparent 25%);
      }
      @keyframes spin{ to{ transform: rotate(360deg); } }
      @keyframes pulse{ 0%,100%{ transform: scale(1); } 50%{ transform: scale(1.08); } }
      @keyframes shimmer{ 0%{ background-position: 0% 50%; } 100%{ background-position: 200% 50%; } }
      @keyframes textFade{ 0%,100%{ opacity:.85 } 50%{ opacity:1 } }
    `}</style>
  );
}