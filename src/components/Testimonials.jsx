import { Star } from 'lucide-react';

const data = [
  {
    name: 'Rani & Faris',
    role: 'Wedding Client',
    quote:
      'Workflow undangan jadi super cepat. RSVPs rapi, reminder otomatis, dan desainnya elegan!'
  },
  {
    name: 'Studio Laris',
    role: 'Event Organizer',
    quote:
      'Skalabel dan mudah dipakai tim. Analitik realtime membantu kami memahami tamu.'
  },
  {
    name: 'Bima',
    role: 'Marketing Lead',
    quote:
      'Integrasi email & WhatsApp membuat konversi naik. Sungguh menghemat waktu.'
  }
];

function Stars() {
  return (
    <div className="flex items-center gap-1 text-yellow-600">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-yellow-500" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Dipercaya brand dan event profesional</h2>
          <p className="mt-3 text-gray-600">Cerita singkat dari mereka yang sudah mengotomasi undangan.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {data.map((t) => (
            <figure key={t.name} className="rounded-2xl bg-white/70 backdrop-blur p-6 ring-1 ring-amber-100">
              <Stars />
              <blockquote className="mt-3 text-gray-700">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-gray-600">
                <span className="font-semibold text-gray-900">{t.name}</span> • {t.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
