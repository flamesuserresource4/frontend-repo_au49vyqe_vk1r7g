import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: 'Gratis',
    period: '',
    highlight: false,
    features: [
      '100 undangan/bulan',
      '1 template dasar',
      'RSVP dasar',
      'Analitik ringkas',
    ],
  },
  {
    name: 'Pro',
    price: 'Rp149.000',
    period: '/bulan',
    highlight: true,
    features: [
      'Tak terbatas undangan',
      'Template premium',
      'Custom domain',
      'Automasi pengingat',
      'Analitik mendalam',
    ],
  },
  {
    name: 'Business',
    price: 'Hubungi Kami',
    period: '',
    highlight: false,
    features: [
      'Akses tim & SSO',
      'Prioritas support',
      'Integrasi API',
      'Onboarding khusus',
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Harga sederhana, manfaat maksimal</h2>
          <p className="mt-3 text-gray-600">Pilih paket sesuai kebutuhan Anda dan tingkatkan kapan saja.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`rounded-2xl p-6 ring-1 backdrop-blur bg-white/70 ${
                t.highlight ? 'ring-yellow-400 shadow-lg' : 'ring-amber-100'
              }`}
            >
              <h3 className="text-lg font-semibold text-gray-900">{t.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-3xl font-bold text-gray-900">{t.price}</span>
                <span className="text-sm text-gray-500">{t.period}</span>
              </div>
              <ul className="mt-6 space-y-2">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="h-5 w-5 rounded-full bg-yellow-100 text-yellow-800 flex items-center justify-center">
                      <Check className="h-3 w-3" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#cta"
                className={`mt-6 inline-flex w-full items-center justify-center rounded-lg px-4 py-2 font-semibold transition ${
                  t.highlight
                    ? 'bg-yellow-600 text-white hover:bg-yellow-700'
                    : 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'
                }`}
              >
                Pilih Paket
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
