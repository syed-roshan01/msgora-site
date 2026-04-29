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
    gradient: 'from-emerald-500 to-teal-500',
    borderHover: 'hover:border-emerald-400/60',
    shadowHover: 'hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]',
  },
  {
    icon: Users,
    title: 'Agencies',
    desc: 'Manage clients at scale',
    gradient: 'from-teal-500 to-emerald-500',
    borderHover: 'hover:border-teal-400/60',
    shadowHover: 'hover:shadow-[0_0_30px_rgba(20,184,166,0.2)]',
  },
  {
    icon: ShoppingBag,
    title: 'Ecommerce Stores',
    desc: 'Recover carts & drive repeat sales',
    gradient: 'from-emerald-600 to-teal-600',
    borderHover: 'hover:border-emerald-400/60',
    shadowHover: 'hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]',
  },
  {
    icon: Store,
    title: 'Local Businesses',
    desc: 'Fill appointments & grow loyalty',
    gradient: 'from-teal-500 to-emerald-500',
    borderHover: 'hover:border-teal-400/60',
    shadowHover: 'hover:shadow-[0_0_30px_rgba(20,184,166,0.2)]',
  },
  {
    icon: Target,
    title: 'Lead Gen Teams',
    desc: 'Qualify & nurture leads faster',
    gradient: 'from-emerald-500 to-teal-500',
    borderHover: 'hover:border-emerald-400/60',
    shadowHover: 'hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]',
  },
];

const accentColors: Record<string, { icon: string; bg: string; ring: string; check: string }> = {
  cyan: { icon: 'text-emerald-400', bg: 'bg-emerald-500/10', ring: 'ring-emerald-500/20', check: 'text-emerald-400' },
  blue: { icon: 'text-teal-400', bg: 'bg-teal-500/10', ring: 'ring-teal-500/20', check: 'text-teal-400' },
  teal: { icon: 'text-teal-400', bg: 'bg-teal-500/10', ring: 'ring-teal-500/20', check: 'text-teal-400' },
  emerald: { icon: 'text-emerald-400', bg: 'bg-emerald-500/10', ring: 'ring-emerald-500/20', check: 'text-emerald-400' },
};

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      <div className="absolute inset-0 bg-black"></div>

      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/[0.06] rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 px-2 animate-scale-in">
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Automate WhatsApp
            </span>
            <br />
            <span className="text-white">Messaging with Msgora</span>
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
            <a href="#download" className="group relative px-8 sm:px-12 py-4 sm:py-5 rounded-xl bg-emerald-500 hover:bg-emerald-600 transition-colors flex-1 sm:flex-none sm:min-w-[300px] flex items-center justify-center gap-2">
              <span className="text-white font-semibold text-base sm:text-lg">Download Software</span>
              <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
            </a>

            <a href="#pricing" className="group px-8 sm:px-12 py-4 sm:py-5 rounded-xl border border-white/30 hover:border-white/50 transition-all bg-transparent hover:bg-white/5 flex-1 sm:flex-none sm:min-w-[200px] flex items-center justify-center">
              <span className="text-white font-semibold text-base sm:text-lg">View Pricing</span>
            </a>
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto animate-scale-in px-4" style={{ animationDelay: '0.8s' }}>
          <div className="absolute inset-0 bg-emerald-500/[0.06] rounded-2xl blur-2xl"></div>

          <div className="relative bg-white/[0.04] backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/[0.1] p-4 sm:p-6 shadow-2xl hover:border-emerald-400/20 transition-colors">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-1 sm:gap-1.5">
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-400"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-400"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="flex-1 bg-white/5 rounded px-2 sm:px-3 py-1 text-xs sm:text-sm text-gray-400">
                Msgora Dashboard
              </div>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
              <div className="bg-white/[0.04] backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/[0.08] hover:border-emerald-400/40 transition-all hover:scale-105 hover:bg-white/[0.07] group">
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <div className="p-1.5 sm:p-2 bg-emerald-500/10 rounded-lg group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
                  </div>
                  <span className="text-white font-semibold text-sm sm:text-base">Campaigns</span>
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">128</div>
                <div className="text-xs sm:text-sm text-gray-400">Active campaigns</div>
                <div className="mt-2 sm:mt-3 h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-emerald-500 rounded-full transition-all duration-1000"></div>
                </div>
              </div>

              <div className="bg-white/[0.04] backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/[0.08] hover:border-emerald-400/40 transition-all hover:scale-105 hover:bg-white/[0.07] group">
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <div className="p-1.5 sm:p-2 bg-teal-500/10 rounded-lg group-hover:scale-110 transition-transform">
                    <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 text-teal-400" />
                  </div>
                  <span className="text-white font-semibold text-sm sm:text-base">Analytics</span>
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">96%</div>
                <div className="text-xs sm:text-sm text-gray-400">Delivery rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
