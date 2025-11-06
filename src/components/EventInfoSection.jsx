export default function EventInfoSection() {
  return (
    <section className="event-info-section py-20 bg-pink-50/50" aria-label="Informasi Acara">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-yellow-800">Informasi Acara</h2>
          <p className="mt-2 text-stone-600">Mohon kehadiran Bapak/Ibu/Saudara(i) pada rangkaian acara berikut:</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Akad Nikah */}
          <div className="rounded-2xl border border-yellow-100 bg-white p-6 shadow-sm">
            <h3 className="font-serif text-2xl text-yellow-800">Akad Nikah</h3>
            <ul className="mt-4 space-y-1 text-stone-600">
              <li>Hari/Tanggal: Sabtu, 23 November 2025</li>
              <li>Waktu: 09.00 - 10.00 WIB</li>
              <li>Tempat: Masjid Al-Ikhlas, Jakarta</li>
            </ul>
          </div>

          {/* Resepsi */}
          <div className="rounded-2xl border border-yellow-100 bg-white p-6 shadow-sm">
            <h3 className="font-serif text-2xl text-yellow-800">Resepsi</h3>
            <ul className="mt-4 space-y-1 text-stone-600">
              <li>Hari/Tanggal: Sabtu, 23 November 2025</li>
              <li>Waktu: 11.00 - 14.00 WIB</li>
              <li>Tempat: Gedung Serbaguna Nusantara, Jakarta</li>
            </ul>
          </div>
        </div>

        {/* Peta Lokasi (Embed Google Maps) */}
        <div className="mt-12">
          <h3 className="text-center font-serif text-2xl text-yellow-800">Peta Lokasi</h3>
          <div className="mt-6 aspect-video w-full overflow-hidden rounded-2xl border border-yellow-100 shadow-sm">
            {/* Ganti src embed maps sesuai lokasi acara */}
            <iframe
              title="Peta Lokasi"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.541241331277!2d106.827153!3d-6.193104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5c5b6a3b3fd%3A0x4a0f5eb9c1d7a47!2sMonumen%20Nasional!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
