import Spline from '@splinetool/react-spline';
import { ArrowRight, Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50 via-white to-white pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-12 md:pt-28 md:pb-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-pink-50 text-pink-700 px-3 py-1 text-xs font-medium ring-1 ring-pink-200">
            <Rocket className="h-4 w-4" />
            Otomasi Undangan untuk Era Digital
          </div>
          <h1 className="mt-6 text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Bangun, kirim, dan lacak undangan profesional secara otomatis
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            InvitationOS adalah platform SaaS untuk membuat undangan digital yang elegan, mengelola tamu, dan mengotomasi pengiriman dengan analitik real-time.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#pricing" className="inline-flex items-center justify-center gap-2 rounded-lg bg-yellow-600 px-5 py-3 text-white font-semibold shadow hover:bg-yellow-700 transition">
              Mulai Gratis
              <ArrowRight className="h-5 w-5" />
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-lg px-5 py-3 font-semibold text-yellow-800 bg-yellow-100 hover:bg-yellow-200 transition">
              Lihat Fitur
            </a>
          </div>
        </div>
        <div className="h-[460px] md:h-[560px] rounded-xl overflow-hidden ring-1 ring-amber-100 bg-white/50 backdrop-blur">
          <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  );
}
