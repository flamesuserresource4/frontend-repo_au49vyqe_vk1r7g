import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#" className="font-extrabold tracking-tight text-xl">
            InvitationOS <span className="text-yellow-600">•</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            <a href="#features" className="hover:text-gray-900">Fitur</a>
            <a href="#pricing" className="hover:text-gray-900">Harga</a>
            <a href="#cta" className="hover:text-gray-900">Demo</a>
            <a href="#" className="rounded-lg bg-yellow-600 text-white px-4 py-2 font-semibold hover:bg-yellow-700">Masuk</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />

        <section id="cta" className="py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Siap mengotomasi undangan Anda?</h2>
            <p className="mt-3 text-gray-600">Mulai gratis, tanpa kartu kredit. Upgrade kapan pun sesuai kebutuhan.</p>
            <form className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <input
                type="email"
                required
                placeholder="Alamat email kerja"
                className="w-full sm:w-96 rounded-lg border border-amber-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button
                type="submit"
                className="rounded-lg bg-yellow-600 text-white px-5 py-3 font-semibold hover:bg-yellow-700"
              >
                Dapatkan Akses
              </button>
            </form>
            <p className="mt-3 text-xs text-gray-500">Dengan mendaftar Anda menyetujui Kebijakan Privasi kami.</p>
          </div>
        </section>
      </main>

      <footer className="border-t border-amber-100 bg-amber-50/50">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} InvitationOS. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900">Kebijakan Privasi</a>
            <a href="#" className="hover:text-gray-900">Syarat Layanan</a>
            <a href="#" className="hover:text-gray-900">Bantuan</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
