import { Mail, BarChart3, ShieldCheck, Zap } from 'lucide-react';

const features = [
  {
    icon: Mail,
    title: 'Pengiriman Otomatis Multi-Channel',
    desc: 'Kirim undangan via email, SMS, dan WhatsApp dalam sekali klik dengan personalisasi nama tamu.',
  },
  {
    icon: BarChart3,
    title: 'Analitik Real-time',
    desc: 'Lihat open rate, click rate, dan konversi RSVP secara langsung untuk optimasi kampanye.',
  },
  {
    icon: ShieldCheck,
    title: 'Keamanan & Privasi',
    desc: 'Tautan unik per tamu, proteksi RSVP, dan kontrol akses yang aman.',
  },
  {
    icon: Zap,
    title: 'Template Profesional',
    desc: 'Koleksi template responsif bergaya modern dengan kustomisasi drag-and-drop.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Satu platform untuk semua kebutuhan undangan</h2>
          <p className="mt-3 text-gray-600">Automasi, personalisasi, dan skalakan undangan Anda tanpa kerumitan.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl bg-white/70 backdrop-blur p-6 ring-1 ring-amber-100 hover:ring-yellow-300 transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-yellow-100 text-yellow-800 flex items-center justify-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
