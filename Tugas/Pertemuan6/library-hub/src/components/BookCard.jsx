function BookCard({ title, author, category, year, status, coverImage }) {

    return (
        <div className="bg-[#FFFDF9] rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between border border-[#E3D5CA] hover:-translate-y-1">
            <div>
                <div className="relative h-52 w-full bg-[#F5EBE0] overflow-hidden">
                    <img
                        src={coverImage}
                        alt={`Sampul buku ${title}`}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 bg-[#4A3525]/90 backdrop-blur-sm text-[#FDFBF7] text-xs font-medium px-2.5 py-1 rounded-full shadow-sm">
                        {category}
                    </span>
                </div>

                <div className="p-5">
                    <h3 className="text-lg font-serif font-bold text-[#3D2B1E] line-clamp-1 mb-1">
                        {title}
                    </h3>
                    <p className="text-[#6F5B4C] text-sm mb-3 font-sans">
                        Oleh: <span className="font-medium text-[#4A3525]">{author}</span>
                    </p>

                    <div className="flex items-center justify-between text-xs text-[#8C7A6B] mb-2 font-sans">
                        <span>Tahun: <strong className="text-[#3D2B1E]">{year}</strong></span>

                        {status? (
                            <span className="inline-flex items-center gap-1.5 bg-[#E8F5E9] text-[#2E7D32] text-xs font-medium px-2.5 py-1 rounded-full">
                                <span className="w-2 h-2 rounded-full bg-[#4CAF50] animate-pulse"></span>
                                Tersedia
                            </span>
                        ) : (
                            <span className="inline-flex items-center gap-1.5 bg-[#FFEBEE] text-[#C62828] text-xs font-medium px-2.5 py-1 rounded-full">
                                <span className="w-2 h-2 rounded-full bg-[#EF5350]"></span>
                                Dipinjam
                            </span>
                        )}
                    </div>
                </div>
            </div>

            <div className="px-5 pb-5 pt-0">
                {status ? (
                    <button
                        className="w-full bg-[#5C4033] hover:bg-[#4A3525] text-[#FDFBF7] text-sm font-sans font-medium py-2.5 px-4 rounded-xl transition-colors duration-200 shadow-sm active:scale-95"
                    >
                        Pinjam
                    </button>
                ) : (
                    <button
                        disabled
                        className="w-full bg-[#E3D5CA]/50 text-[#8C7A6B] text-sm font-sans font-medium py-2.5 px-4 rounded-xl cursor-not-allowed"
                    >
                        Tidak Tersedia
                    </button>
                )}
            </div>
        </div>
    );
}

export default BookCard;