import { useState } from 'react';

export default function CoverSection() {
  const [opened, setOpened] = useState(false);

  return (
    <header className="cover-section relative min-h-screen flex items-center justify-center bg-gradient-to-b from-amber-50 to-pink-50" aria-label="Sampul Undangan">
      {/* Background decorative gradient */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-pink-200/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-yellow-200/30 blur-3xl" />
      </div>

      <div className="relative z-10 text-center px-6">
        {/* Judul & Nama Pasangan */}
        <p className="text-sm tracking-widest text-yellow-700/80 uppercase">Undangan Pernikahan</p>
        <h1 className="mt-4 font-serif text-4xl sm:text-6xl text-yellow-800">
          {/* Ganti nama pasangan di bawah ini */}
          Aisyah & Fikri
        </h1>
        {/* Tanggal Acara */}
        <p className="mt-3 text-base sm:text-lg text-stone-600">Sabtu, 23 November 2025</p>

        {/* Tombol Buka Undangan */}
        <button
          onClick={() => setOpened(true)}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-yellow-600 px-8 py-3 text-white shadow-lg hover:bg-yellow-700 transition"
          aria-expanded={opened}
        >
          Buka Undangan
        </button>

        {/* Ucapan pembuka (muncul setelah tombol ditekan) */}
        {opened && (
          <p className="mt-6 max-w-2xl mx-auto text-stone-700">
            {/* Ganti teks ucapan pembuka di sini */}
            Dengan memohon rahmat dan ridha Allah SWT, kami bermaksud menyelenggarakan akad dan resepsi pernikahan. Dengan segala hormat, kami mengundang Bapak/Ibu/Saudara(i) untuk hadir dan memberikan doa restu.
          </p>
        )}
      </div>
    </header>
  );
}
