const reviews = [
  {
    name: 'Rahul Gupta',
    role: 'Digital Marketing Agency',
    business: 'Leads India Digital',
    content: 'Managing 8 client WhatsApp accounts from one dashboard is insane. Msgora saved us literally 3 hours per day. Campaigns go out on time, every time.',
    rating: 5,
    avatar: 'RG',
    color: 'bg-emerald-600',
  },
  {
    name: 'Priya Singh',
    role: 'E-commerce Store Owner',
    business: 'StyleHaven.in',
    content: 'Sent a bulk campaign to 4,000 contacts for our Diwali sale. Orders started pouring in within the hour. Msgora paid for itself in one campaign.',
    rating: 5,
    avatar: 'PS',
    color: 'bg-teal-600',
  },
  {
    name: 'Arjun Sharma',
    role: 'Real Estate Agent',
    business: 'PropConnect Realty',
    content: 'I send new property listings to my entire database instantly. The interactive button templates get way more responses than plain texts ever did.',
    rating: 5,
    avatar: 'AS',
    color: 'bg-emerald-700',
  },
  {
    name: 'Neha Patel',
    role: 'Online Coaching Business',
    business: 'SkillBoost Academy',
    content: 'Enrollment season used to mean hours of manual messaging. Now I blast the entire waitlist in minutes. The chatbot handles FAQs so I don\'t have to.',
    rating: 5,
    avatar: 'NP',
    color: 'bg-teal-700',
  },
  {
    name: 'Vikram Reddy',
    role: 'Restaurant Chain Owner',
    business: 'SpiceRoute Dhaba',
    content: 'Daily specials reach 2,000+ loyal customers every morning. Footfall noticeably increased after we started WhatsApp campaigns through Msgora.',
    rating: 5,
    avatar: 'VR',
    color: 'bg-zinc-600',
  },
  {
    name: 'Meera Joshi',
    role: 'Travel Agency Owner',
    business: 'WanderLust Holidays',
    content: 'Booking reminders and package offers on WhatsApp convert 10x better than emails. The multi-device support means our whole team runs it simultaneously.',
    rating: 5,
    avatar: 'MJ',
    color: 'bg-teal-500',
  },
  {
    name: 'Sanjay Iyer',
    role: 'Insurance Broker',
    business: 'SafeShield Finance',
    content: 'Policy renewal reminders via WhatsApp get opened, emails don\'t. Renewals are up 35% since we switched to Msgora. No API, no complications.',
    rating: 5,
    avatar: 'SI',
    color: 'bg-emerald-500',
  },
  {
    name: 'Anita Verma',
    role: 'Salon Chain Owner',
    business: 'GlowUp Studios',
    content: 'Auto reply handles appointment booking 24/7 and the Group Grabber built us a 3,000-contact list in one afternoon. This tool is underpriced.',
    rating: 5,
    avatar: 'AV',
    color: 'bg-zinc-500',
  },
  {
    name: 'Aakash Malhotra',
    role: 'Car Dealership Owner',
    business: 'DriveFirst Motors',
    content: 'Follow-up messages for test drive enquiries used to get lost. Now the auto reply keeps leads warm and our show-up rate improved dramatically.',
    rating: 5,
    avatar: 'AM',
    color: 'bg-teal-600',
  },
  {
    name: 'Pooja Bhatt',
    role: 'Nutritionist & Health Coach',
    business: 'FitLife Clinic',
    content: 'I send weekly diet tips and appointment slots to clients. Msgora\'s templates look polished and professional. Clients love the personal feel.',
    rating: 5,
    avatar: 'PB',
    color: 'bg-emerald-500',
  },
  {
    name: 'Dev Kapoor',
    role: 'SaaS Startup Founder',
    business: 'TechPulse App',
    content: 'Feature launch announcements on WhatsApp get 4x more engagement than our push notifications. Onboarding messages via chatbot now run themselves.',
    rating: 5,
    avatar: 'DK',
    color: 'bg-emerald-700',
  },
  {
    name: 'Kavya Nair',
    role: 'Textile Wholesale Business',
    business: 'SilkRoute Fabrics',
    content: 'New stock alerts go to 1,500 retailers instantly. Orders used to come after 2-3 days of calls. Now we get confirmations within hours of sending.',
    rating: 5,
    avatar: 'KN',
    color: 'bg-teal-700',
  },
  {
    name: 'Rohan Tiwari',
    role: 'Event Management Company',
    business: 'EventCraft India',
    content: 'Event invites, RSVPs, and reminders all automated. The button templates make RSVP collection effortless. Attendance at our events is up 40%.',
    rating: 5,
    avatar: 'RT',
    color: 'bg-zinc-600',
  },
  {
    name: 'Simran Kaur',
    role: 'Network Marketing Leader',
    business: 'GrowthNexus Team',
    content: 'Following up with 500 leads manually was killing me. Msgora changed everything. The Trust Builder keeps accounts safe and the results are real.',
    rating: 5,
    avatar: 'SK',
    color: 'bg-emerald-600',
  },
  {
    name: 'Suresh Pillai',
    role: 'FMCG Distributor',
    business: 'QuickDeliver Co',
    content: 'Order confirmations and delivery updates go out automatically per campaign. Zero manual work, zero complaints from retailers. Absolute must-have.',
    rating: 5,
    avatar: 'SP',
    color: 'bg-teal-500',
  },
];

const row1 = reviews.slice(0, 8);
const row2 = reviews.slice(8);

function StarIcon() {
  return (
    <svg className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function ReviewCard({ r }: { r: typeof reviews[0] }) {
  return (
    <div
      className="w-72 shrink-0 mx-3 rounded-2xl bg-white/[0.04] border border-white/[0.08] p-5 hover:border-emerald-400/30 hover:bg-white/[0.06] transition-colors">
      <div className="flex items-center gap-1 mb-3">
        {Array.from({ length: r.rating }).map((_, j) => <StarIcon key={j} />)}
      </div>
      <p className="text-gray-300 leading-relaxed mb-5 text-sm">"{r.content}"</p>
      <div className="flex items-center gap-3">
        <div className={`w-9 h-9 rounded-full ${r.color} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
          {r.avatar}
        </div>
        <div>
          <p className="font-semibold text-white text-sm">{r.name}</p>
          <p className="text-gray-500 text-xs">{r.role} · {r.business}</p>
        </div>
      </div>
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-black"></div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 mb-12 sm:mb-16 text-center">
        <p className="text-xs font-semibold tracking-widest uppercase text-emerald-400 mb-3">Testimonials</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          Loved by Businesses Across India
        </h2>
        <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
          Real results from real users — marketers, agencies, and store owners growing with Msgora.
        </p>
      </div>

      <ul className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 space-y-8">
        {reviews.slice(0, 8).map((r, i) => (
          <li key={i} className="flex items-start gap-4">
            <div className={`flex-none w-12 h-12 rounded-full ${r.color} flex items-center justify-center text-white text-lg font-bold`}>
              {r.avatar}
            </div>
            <div className="text-left">
              <p className="text-gray-200 text-base mb-2">“{r.content}”</p>
              <div className="text-sm text-gray-400 font-semibold">{r.name} <span className="font-normal">· {r.role}, {r.business}</span></div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
