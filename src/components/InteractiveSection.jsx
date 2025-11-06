import { useState } from 'react';

export default function InteractiveSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  const gallery = [
    // Ganti URL foto galeri di sini
    'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1640&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1640&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519222970733-f546218fa6d7?q=80&w=1640&auto=format&fit=crop',
  ];

  const stories = [
    // Ganti cerita singkat di sini
    { year: '2019', title: 'Pertemuan Pertama', desc: 'Dipertemukan pada sebuah acara kampus dan mulai bertukar cerita.' },
    { year: '2021', title: 'Berkomitmen', desc: 'Memutuskan untuk saling menjaga dan melangkah bersama.' },
    { year: '2025', title: 'Menuju Akad', desc: 'Dengan niat baik dan restu orang tua, kami siap membangun keluarga.' },
  ];

  return (
    <section className="interactive-section py-20 bg-white" aria-label="Galeri, Cerita, RSVP">
      <div className="container mx-auto max-w-6xl px-6">
        {/* Galeri Foto (Slider) */}
        <div>
          <h2 className="text-center font-serif text-3xl sm:text-4xl text-yellow-800">Galeri Foto</h2>
          <div className="mt-6 relative overflow-hidden rounded-2xl border border-yellow-100 shadow-sm">
            <img src={gallery[activeSlide]} alt={`Foto ${activeSlide + 1}`} className="h-[420px] w-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-between px-4">
              <button
                aria-label="Sebelumnya"
                onClick={() => setActiveSlide((s) => (s - 1 + gallery.length) % gallery.length)}
                className="rounded-full bg-white/80 px-3 py-2 text-stone-700 shadow hover:bg-white"
              >
                ‹
              </button>
              <button
                aria-label="Berikutnya"
                onClick={() => setActiveSlide((s) => (s + 1) % gallery.length)}
                className="rounded-full bg-white/80 px-3 py-2 text-stone-700 shadow hover:bg-white"
              >
                ›
              </button>
            </div>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
              {gallery.map((_, i) => (
                <span
                  key={i}
                  className={`h-2 w-2 rounded-full ${i === activeSlide ? 'bg-yellow-600' : 'bg-white/70 border border-yellow-500/30'}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Timeline Cerita Cinta */}
        <div className="mt-16">
          <h2 className="text-center font-serif text-3xl sm:text-4xl text-yellow-800">Cerita Cinta</h2>
          <ol className="mt-8 relative border-l-2 border-yellow-200 pl-6 space-y-8">
            {stories.map((item, idx) => (
              <li key={idx} className="">
                <div className="absolute -left-2.5 mt-1 h-5 w-5 rounded-full border-2 border-white bg-yellow-500 shadow" />
                <div className="rounded-xl bg-ivory/50 p-4 shadow-sm">
                  <p className="text-xs uppercase tracking-wide text-yellow-700/80">{item.year}</p>
                  <h3 className="font-serif text-xl text-yellow-800">{item.title}</h3>
                  <p className="text-stone-600">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* RSVP Form */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="rounded-2xl border border-yellow-100 bg-white p-6 shadow-sm">
            <h2 className="font-serif text-2xl text-yellow-800">Konfirmasi Kehadiran</h2>
            <p className="mt-2 text-stone-600">Mohon isi formulir berikut untuk konfirmasi kehadiran Anda.</p>
            <form className="mt-6 grid grid-cols-1 gap-4">
              {/* Ganti action handler sesuai backend Anda */}
              <input type="text" placeholder="Nama Lengkap" className="w-full rounded-lg border border-stone-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
              <input type="tel" placeholder="Nomor WhatsApp" className="w-full rounded-lg border border-stone-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
              <select className="w-full rounded-lg border border-stone-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400">
                <option>Hadir</option>
                <option>Tidak Hadir</option>
                <option>Masih Ragu</option>
              </select>
              <textarea placeholder="Ucapan atau pesan" rows={4} className="w-full rounded-lg border border-stone-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
              <button type="button" className="mt-2 inline-flex justify-center rounded-full bg-yellow-600 px-6 py-3 text-white shadow hover:bg-yellow-700">Kirim Konfirmasi</button>
            </form>
          </div>

          {/* Doa & Ucapan Tamu + E-Angpao */}
          <div className="space-y-10">
            <div className="rounded-2xl border border-yellow-100 bg-ivory/30 p-6 shadow-sm">
              <h2 className="font-serif text-2xl text-yellow-800">Doa & Ucapan</h2>
              <p className="mt-2 text-stone-600">Tulis ucapan terbaik Anda untuk kedua mempelai.</p>
              {/* Contoh placeholder ucapan */}
              <div className="mt-4 space-y-3">
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <p className="font-medium text-stone-800">Nadia</p>
                  <p className="text-stone-600">Selamat menempuh hidup baru! Semoga menjadi keluarga sakinah, mawaddah, warahmah.</p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <p className="font-medium text-stone-800">Rizky</p>
                  <p className="text-stone-600">Barakallah! Lancar sampai hari H.</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-yellow-100 bg-white p-6 shadow-sm">
              <h2 className="font-serif text-2xl text-yellow-800">E-Angpao</h2>
              <p className="mt-2 text-stone-600">Bagi yang berkenan berbagi kebahagiaan, berikut informasi rekening.</p>
              {/* Ganti info rekening & QR di bawah ini */}
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
                <div>
                  <p className="text-stone-700"><span className="font-medium">Bank BCA</span> a.n. Aisyah Rahma</p>
                  <p className="text-stone-700">No. Rekening: 1234567890</p>
                  <p className="mt-2 text-xs text-stone-500">Mohon sertakan nama saat transfer agar mudah diidentifikasi.</p>
                </div>
                <div className="justify-self-center rounded-xl border border-stone-200 p-3 bg-white">
                  <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=Contoh-QR-Transfer" alt="QR Transfer" className="h-40 w-40 object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
