import { Check, Star } from 'lucide-react';

const plans = [
  {
    name: 'Starter Plan',
    price: '₹1499',
    period: 'year',
    description: 'Best for beginners',
    features: [
      '3 WhatsApp Devices',
      'WhatsApp Bulk Messages',
      'Contacts List',
      'Interactive Templates',
      'Send Single Message',
      'Campaign Reports',
      'Opt-Out Management',
      'Auto Reply',
      'Group Grabber',
      'Trust Builder'
    ],
    popular: false
  },
  {
    name: 'Professional Plan',
    price: '₹2499',
    period: 'year',
    description: 'Most Popular',
    features: [
      '10 WhatsApp Devices',
      'WhatsApp Bulk Messages',
      'Contacts List',
      'Interactive Templates',
      'Send Single Message',
      'Campaign Reports',
      'Opt-Out Management',
      'Auto Reply',
      'Chatbot',
      'Group Grabber',
      'Trust Builder',
      'Priority Support',
      'Smart Protection',
      'Keep awake feature'
    ],
    popular: true
  },
  {
    name: 'Enterprise Plan',
    price: '₹3499',
    period: 'year',
    description: 'For power users',
    features: [
      '25 WhatsApp Devices',
      'Multi device support (IOS + Android)',
      'WhatsApp Bulk Messages',
      'Contacts List',
      'Interactive Templates',
      'Send Single Message',
      'Campaign Reports',
      'Opt-Out Management',
      'Auto Reply',
      'Chatbot',
      'Group Grabber',
      'Trust Builder',
      'Priority Support',
      'Advanced Campaign Analytics',
      'Smart Protection',
      'Keep awake feature',
      'Support Fix'
    ],
    popular: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4">
            Simple and Affordable Pricing
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-sm md:max-w-none mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="relative group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="bg-emerald-500 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full flex items-center gap-1 sm:gap-1.5">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 text-white fill-white" />
                    <span className="text-white text-xs sm:text-sm font-semibold">MOST POPULAR</span>
                  </div>
                </div>
              )}

              <div className={`absolute inset-0 bg-emerald-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity ${plan.popular ? 'opacity-50' : ''}`}></div>

              <div className={`relative bg-white/[0.04] backdrop-blur-sm rounded-2xl sm:rounded-3xl border ${plan.popular ? 'border-emerald-400/50' : 'border-white/[0.08]'} p-6 sm:p-8 hover:border-emerald-400/40 transition-all h-full flex flex-col`}>
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-sm sm:text-base text-gray-400">{plan.description}</p>
                </div>

                <div className="mb-4 sm:mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-400">
                      {plan.price}
                    </span>
                    <span className="text-sm sm:text-base text-gray-400">/ {plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 flex-1">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 sm:gap-3">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a href="#download" className={`inline-block py-3 px-8 rounded-lg font-semibold transition-all text-center ${
                  plan.popular
                    ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                    : 'bg-white/[0.05] text-white border border-white/[0.1] hover:bg-white/[0.1]'
                }`}>
                  Download Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
