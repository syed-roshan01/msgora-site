import { ArrowRight, BarChart3, CheckCircle2, MessageCircle, Zap, TrendingUp, Users, ShoppingBag, Store, Target, Shield, Send, Layers, Monitor, DollarSign } from 'lucide-react';

const highlights = [
  {
    icon: Shield,
    title: 'No WhatsApp API Needed',
    subtitle: 'Works directly with WhatsApp Web',
    accent: 'cyan',
  },
  {
    icon: Send,
    title: 'Message Unsaved Numbers',
    subtitle: 'Reach any number instantly',
    accent: 'blue',
  },
  {
    icon: Layers,
    title: 'Interactive Templates',
    subtitle: 'Buttons, lists & rich media',
    accent: 'teal',
  },
  {
    icon: Monitor,
    title: 'Multi-Device Automation',
    subtitle: 'Run multiple accounts at once',
    accent: 'cyan',
  },
  {
    icon: DollarSign,
    title: 'No Per-Message Charges',
    subtitle: 'Unlimited sends, flat pricing',
    accent: 'emerald',
  },
];

const audiences = [
  {
    icon: TrendingUp,
    title: 'Digital Marketers',
    desc: 'Scale outreach & boost conversions',
    gradient: 'from-cyan-500 to-blue-500',
    borderHover: 'hover:border-cyan-400/60',
    shadowHover: 'hover:shadow-[0_0_40px_rgba(6,182,212,0.25)]',
  },
  {
    icon: Users,
    title: 'Agencies',
    desc: 'Manage clients at scale',
    gradient: 'from-blue-500 to-sky-500',
    borderHover: 'hover:border-blue-400/60',
    shadowHover: 'hover:shadow-[0_0_40px_rgba(59,130,246,0.25)]',
  },
  {
    icon: ShoppingBag,
    title: 'Ecommerce Stores',
    desc: 'Recover carts & drive repeat sales',
    gradient: 'from-teal-500 to-cyan-500',
    borderHover: 'hover:border-teal-400/60',
    shadowHover: 'hover:shadow-[0_0_40px_rgba(20,184,166,0.25)]',
  },
  {
    icon: Store,
    title: 'Local Businesses',
    desc: 'Fill appointments & grow loyalty',
    gradient: 'from-emerald-500 to-green-500',
    borderHover: 'hover:border-emerald-400/60',
    shadowHover: 'hover:shadow-[0_0_40px_rgba(52,211,153,0.25)]',
  },
  {
    icon: Target,
    title: 'Lead Gen Teams',
    desc: 'Qualify & nurture leads faster',
    gradient: 'from-sky-500 to-blue-500',
    borderHover: 'hover:border-sky-400/60',
    shadowHover: 'hover:shadow-[0_0_40px_rgba(56,189,248,0.25)]',
  },
];

const accentColors: Record<string, { icon: string; bg: string; ring: string; check: string }> = {
  cyan: { icon: 'text-cyan-400', bg: 'bg-cyan-500/10', ring: 'ring-cyan-500/20', check: 'text-cyan-400' },
  blue: { icon: 'text-blue-400', bg: 'bg-blue-500/10', ring: 'ring-blue-500/20', check: 'text-blue-400' },
  teal: { icon: 'text-teal-400', bg: 'bg-teal-500/10', ring: 'ring-teal-500/20', check: 'text-teal-400' },
  emerald: { icon: 'text-emerald-400', bg: 'bg-emerald-500/10', ring: 'ring-emerald-500/20', check: 'text-emerald-400' },
};

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-black to-black"></div>

      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 px-2 animate-scale-in">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent animate-gradient-shift">
              Automate WhatsApp
            </span>
            <br />
            <span className="text-white">Messaging with Zyqora</span>
          </h1>

          <p className="text-base sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10 sm:mb-12 px-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Run campaigns, automate conversations, and manage customer communication with powerful messaging automation.
          </p>

          <div className="max-w-5xl mx-auto mb-10 sm:mb-12 px-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {highlights.map((item, i) => {
                const Icon = item.icon;
                const colors = accentColors[item.accent];
                return (
                  <div
                    key={i}
                    className="group relative rounded-xl bg-white/[0.04] border border-white/[0.08] p-4 transition-all duration-300 hover:bg-white/[0.07] hover:border-white/[0.16] hover:-translate-y-1 animate-fade-in-up"
                    style={{ animationDelay: `${0.35 + i * 0.07}s` }}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`shrink-0 p-2 rounded-lg ${colors.bg} ring-1 ${colors.ring} group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`w-4 h-4 ${colors.icon}`} />
                      </div>
                      <div className="text-left min-w-0">
                        <span className="block text-sm font-semibold text-white leading-tight">{item.title}</span>
                        <span className="block text-xs text-gray-500 mt-0.5 leading-snug">{item.subtitle}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            <a href="#download" className="group relative px-8 sm:px-12 py-4 sm:py-5 rounded-xl overflow-hidden animate-glow-pulse flex-1 sm:flex-none sm:min-w-[300px]">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative flex items-center justify-center gap-2 text-white font-semibold text-base sm:text-lg">
                Download Software
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            <a href="#pricing" className="group px-8 sm:px-12 py-4 sm:py-5 rounded-xl border border-white/30 hover:border-white/50 transition-all bg-transparent hover:bg-white/5 flex-1 sm:flex-none sm:min-w-[200px] flex items-center justify-center">
              <span className="text-white font-semibold text-base sm:text-lg">View Pricing</span>
            </a>
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto animate-scale-in px-4" style={{ animationDelay: '0.8s' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-2xl animate-pulse-slow"></div>

          <div className="relative bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/20 p-4 sm:p-6 shadow-2xl animate-float hover:border-cyan-400/30 transition-colors">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-1 sm:gap-1.5">
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-400"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-400"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="flex-1 bg-white/5 rounded px-2 sm:px-3 py-1 text-xs sm:text-sm text-gray-400">
                Zyqora Dashboard
              </div>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/10 hover:border-cyan-400/50 transition-all hover:scale-105 hover:bg-white/10 group">
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <div className="p-1.5 sm:p-2 bg-cyan-500/10 rounded-lg group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                  </div>
                  <span className="text-white font-semibold text-sm sm:text-base">Campaigns</span>
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">1,247</div>
                <div className="text-xs sm:text-sm text-gray-400">Active campaigns</div>
                <div className="mt-2 sm:mt-3 h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000"></div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/10 hover:border-cyan-400/50 transition-all hover:scale-105 hover:bg-white/10 group">
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <div className="p-1.5 sm:p-2 bg-blue-500/10 rounded-lg group-hover:scale-110 transition-transform">
                    <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                  </div>
                  <span className="text-white font-semibold text-sm sm:text-base">Analytics</span>
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">98.4%</div>
                <div className="text-xs sm:text-sm text-gray-400">Delivery rate</div>
                <div className="mt-2 sm:mt-3 space-y-1">
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>Sent</span>
                    <span>98%</span>
                  </div>
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-[98%] bg-cyan-500 rounded-full transition-all duration-1000"></div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/10 hover:border-cyan-400/50 transition-all hover:scale-105 hover:bg-white/10 sm:col-span-2 md:col-span-1 group">
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <div className="p-1.5 sm:p-2 bg-teal-500/10 rounded-lg group-hover:scale-110 transition-transform">
                    <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-teal-400" />
                  </div>
                  <span className="text-white font-semibold text-sm sm:text-base">Automation</span>
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">24/7</div>
                <div className="text-xs sm:text-sm text-gray-400">Auto-reply active</div>
                <div className="mt-2 sm:mt-3 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                  <span className="text-xs text-green-400 group-hover:text-green-300 transition-colors">Online</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-16 sm:mt-24 px-4 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-sm font-semibold tracking-widest uppercase text-cyan-400 mb-3">Who it's for</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
              Built For Teams That Sell
            </h2>
            <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
              From solo marketers to enterprise teams -- Zyqora adapts to your workflow
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {audiences.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className={`group relative rounded-2xl bg-white/[0.03] border border-white/[0.07] p-5 sm:p-6 transition-all duration-300 hover:-translate-y-2 ${item.borderHover} ${item.shadowHover} ${i === 4 ? 'col-span-2 sm:col-span-3 lg:col-span-1' : ''} animate-scale-in`}
                  style={{ animationDelay: `${1 + i * 0.06}s` }}
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative flex flex-col items-center text-center gap-3">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${item.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <span className="block text-sm sm:text-base font-semibold text-white">{item.title}</span>
                      <span className="block text-xs text-gray-500 mt-1 leading-snug">{item.desc}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
