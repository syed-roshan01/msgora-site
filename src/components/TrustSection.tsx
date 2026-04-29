import { useEffect, useState } from 'react';

function Counter({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return (
    <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-400">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function TrustSection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-base sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto px-4">
            Built for marketers, agencies, and businesses who rely on WhatsApp.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <div className="relative group">
            <div className="absolute inset-0 bg-emerald-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative bg-white/[0.04] backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/[0.08] p-6 sm:p-8 text-center hover:border-emerald-400/40 transition-colors">
              <Counter end={50000} suffix="+" />
              <p className="mt-2 sm:mt-3 text-gray-400 text-sm sm:text-base md:text-lg">Campaigns Sent</p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-emerald-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative bg-white/[0.04] backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/[0.08] p-6 sm:p-8 text-center hover:border-emerald-400/40 transition-colors">
              <Counter end={2000} suffix="+" />
              <p className="mt-2 sm:mt-3 text-gray-400 text-sm sm:text-base md:text-lg">Connected Devices</p>
            </div>
          </div>

          <div className="relative group sm:col-span-2 md:col-span-1">
            <div className="absolute inset-0 bg-emerald-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative bg-white/[0.04] backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/[0.08] p-6 sm:p-8 text-center hover:border-emerald-400/40 transition-colors">
              <Counter end={5000000} suffix="+" />
              <p className="mt-2 sm:mt-3 text-gray-400 text-sm sm:text-base md:text-lg">Messages Delivered</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
