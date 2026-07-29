function Hero() {

    return (
        <section className="bg-[#FAF7F2] py-12 lg:py-20 overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">

                    <div className="w-full lg:w-1/2 text-left space-y-6">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black text-[#3D2B1E] leading-tight tracking-tight">
                            Meminjam Buku Melalui Perpustakaan Digital.
                        </h1>

                        <p className="text-base sm:text-lg text-[#6F5B4C] font-sans leading-relaxed max-w-xl">
                            Baca dan jelajahi ratusan koleksi buku favoritmu kapan saja, di mana saja. Nikmati akses peminjaman yang mudah, cepat, dan 100% gratis!
                        </p>

                        <div className="pt-2 space-y-4">
                            <button
                                className="inline-flex items-center justify-center bg-[#3D2B1E] hover:bg-[#5C4033] text-[#FDFBF7] font-sans font-semibold text-base px-8 py-3.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg active:scale-95">
                                Mulai Jelajah
                            </button>

                            <p className="text-xs sm:text-sm text-[#8C7A6B]">
                                Sudah memiliki akun?{" "}
                                <a
                                    href="#"
                                    className="font-semibold text-[#4A3525] hover:underline transition"
                                >
                                    Masuk
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 relative flex justify-center items-center">

                        <div className="relative w-full max-w-lg aspect-square bg-[#E3D5CA]/50 rounded-[2.5rem] p-6 flex items-center justify-center border border-[#D6C0B3]/40 shadow-sm">

                            <img
                                src="/src/assets/perpus.png"
                                alt="Digital Library Illustration"
                                className="w-full h-full object-cover rounded-2xl shadow-md"
                            />
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}

export default Hero;