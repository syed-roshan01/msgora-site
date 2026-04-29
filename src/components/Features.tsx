import { MessageSquare, Smartphone, BarChart2, FileText, Bot, UserX, Users, TrendingUp, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: MessageSquare,
    title: 'WhatsApp Bulk Messaging',
    description: 'Send personalized messages to thousands of contacts in one click. Schedule, segment, and track delivery in real time.',
    gradient: 'from-emerald-500 to-teal-500',
    iconBg: 'bg-emerald-500/10',
    iconRing: 'ring-emerald-500/20',
    iconColor: 'text-emerald-400',
    borderHover: 'hover:border-emerald-400/40',
    stat: '5k+',
    statLabel: 'msgs / hour',
  },
  {
    icon: Smartphone,
    title: 'Multi Device Support',
    description: 'Connect and manage multiple WhatsApp accounts from a single dashboard. Perfect for teams and agencies.',
    gradient: 'from-teal-500 to-emerald-500',
    iconBg: 'bg-teal-500/10',
    iconRing: 'ring-teal-500/20',
    iconColor: 'text-teal-400',
    borderHover: 'hover:border-teal-400/40',
    stat: '25+',
    statLabel: 'accounts',
  },
  {
    icon: BarChart2,
    title: 'Campaign Management',
    description: 'Launch, monitor, and optimize marketing campaigns with detailed analytics and A/B testing built in.',
    gradient: 'from-emerald-500 to-teal-500',
    iconBg: 'bg-emerald-500/10',
    iconRing: 'ring-emerald-500/20',
    iconColor: 'text-emerald-400',
    borderHover: 'hover:border-emerald-400/40',
    stat: '98%',
    statLabel: 'delivery rate',
  },
  {
    icon: FileText,
    title: 'Interactive Templates',
    description: 'Create engaging messages with buttons, lists, and rich media. Pre-built templates to get started instantly.',
    gradient: 'from-teal-500 to-emerald-500',
    iconBg: 'bg-teal-500/10',
    iconRing: 'ring-teal-500/20',
    iconColor: 'text-teal-400',
    borderHover: 'hover:border-teal-400/40',
    stat: '50+',
    statLabel: 'templates',
  },
  {
    icon: Bot,
    title: 'Auto Reply & Chatbot',
    description: 'Automate responses 24/7 with intelligent chatbot flows. Handle FAQs, appointments, and lead qualification.',
    gradient: 'from-emerald-500 to-teal-500',
    iconBg: 'bg-emerald-500/10',
    iconRing: 'ring-emerald-500/20',
    iconColor: 'text-emerald-400',
    borderHover: 'hover:border-emerald-400/40',
    stat: '24/7',
    statLabel: 'auto-pilot',
  },
  {
    icon: UserX,
    title: 'Opt-Out Management',
    description: 'Automatically handle unsubscribe requests and maintain clean contact lists for better deliverability.',
    gradient: 'from-teal-500 to-emerald-500',
    iconBg: 'bg-teal-500/10',
    iconRing: 'ring-teal-500/20',
    iconColor: 'text-teal-400',
    borderHover: 'hover:border-teal-400/40',
    stat: '100%',
    statLabel: 'compliant',
  },
  {
    icon: Users,
    title: 'Group Grabber',
    description: 'Extract contacts from WhatsApp groups with one click. Build targeted lists for hyper-focused campaigns.',
    gradient: 'from-emerald-500 to-teal-500',
    iconBg: 'bg-emerald-500/10',
    iconRing: 'ring-emerald-500/20',
    iconColor: 'text-emerald-400',
    borderHover: 'hover:border-emerald-400/40',
    stat: '1-click',
    statLabel: 'extraction',
  },
  {
    icon: TrendingUp,
    title: 'Trust Builder',
    description: 'Gradually warm new accounts with intelligent sending patterns to build trust and reduce ban risks.',
    gradient: 'from-teal-500 to-emerald-500',
    iconBg: 'bg-teal-500/10',
    iconRing: 'ring-teal-500/20',
    iconColor: 'text-teal-400',
    borderHover: 'hover:border-teal-400/40',
    stat: '0%',
    statLabel: 'ban risk',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-black"></div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14 sm:mb-20">
          <p className="text-sm font-semibold tracking-widest uppercase text-emerald-400 mb-4">Features</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 px-4">
            Everything You Need to
            <br />
            <span className="text-emerald-400">Dominate WhatsApp Marketing</span>
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto px-4">
            A complete toolkit built for marketers who want results -- not complexity
          </p>
        </div>

        <ul className="space-y-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <li key={index} className="flex items-start gap-5">
                <span className="flex-none p-3 rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/10">
                  <Icon className="w-6 h-6 text-emerald-400" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{feature.title}</h3>
                  <p className="text-gray-400 mb-1">{feature.description}</p>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span className="font-bold text-emerald-400">{feature.stat}</span>
                    <span>{feature.statLabel}</span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
