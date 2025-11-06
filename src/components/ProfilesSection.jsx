export default function ProfilesSection() {
  return (
    <section className="profiles-section py-20 bg-white" aria-label="Profil Pengantin">
      <div className="container mx-auto max-w-6xl px-6">
        {/* Ucapan Pembuka */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl text-yellow-800">Bismillahirrahmanirrahim</h2>
          <p className="mt-4 text-stone-600">
            {/* Ganti teks pembuka di sini */}
            Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Dengan penuh syukur, kami mempersembahkan undangan ini untuk berbagi kebahagiaan atas pernikahan putra-putri kami.
          </p>
        </div>

        {/* Profil Pengantin Pria & Wanita */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Pengantin Pria */}
          <div className="rounded-2xl border border-yellow-100 p-6 shadow-sm bg-ivory/30">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-pink-50">
              {/* Ganti foto pria (url) */}
              <img
                src="https://images.unsplash.com/photo-1504814532849-927d3eec2f50?q=80&w=1640&auto=format&fit=crop"
                alt="Foto Pengantin Pria"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="font-serif text-2xl text-yellow-800">Fikri Alamsyah</h3>
              <p className="text-stone-500">Putra dari Bapak Ahmad & Ibu Fatimah</p>
            </div>
          </div>

          {/* Pengantin Wanita */}
          <div className="rounded-2xl border border-yellow-100 p-6 shadow-sm bg-ivory/30">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-pink-50">
              {/* Ganti foto wanita (url) */}
              <img
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1640&auto=format&fit=crop"
                alt="Foto Pengantin Wanita"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="font-serif text-2xl text-yellow-800">Aisyah Rahma</h3>
              <p className="text-stone-500">Putri dari Bapak Yusuf & Ibu Siti</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
