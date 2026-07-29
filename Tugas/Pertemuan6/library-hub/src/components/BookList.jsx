import BookCard from "./BookCard";
import LaskarPelangi from "../assets/laskarpelangi.png";
import BumiManusia from "../assets/bumimanusia.png";
import AtomicHabits from "../assets/atomichabits.png";
import FilosofiTeras from "../assets/filosofiteras.png";
import LautBercerita from "../assets/lautbercerita.png";
import SebuahSeniBodoAmat from "../assets/sebuahsenibodoamat.png";
import PsychologyOfMoney from "../assets/psychology.png";
import Janji from "../assets/janji.png";
import MatahariMinor from "../assets/matahariminor.png";
import Hujan from "../assets/hujan.png";
import DompetAyahSepatuIbu from "../assets/dompetayahsepatuibu.png";

function BookList() {
    const books = [
        {
            id: 1,
            title: "Laskar Pelangi",
            author: "Andrea Hirata",
            category: "Novel",
            year: 2005,
            status: true,
            coverImage: LaskarPelangi,
        },
        {
            id: 2,
            title: "Bumi Manusia",
            author: "Pramoedya Ananta Toer",
            category: "Fiksi Sejarah",
            year: 1980,
            status: false,
            coverImage: BumiManusia,
        },
        {
            id: 3,
            title: "Atomic Habits",
            author: "James Clear",
            category: "Self Development",
            year: 2018,
            status: true,
            coverImage: AtomicHabits,
        },
        {
            id: 4,
            title: "Filosofi Teras",
            author: "Henry Manampiring",
            category: "Filsafat",
            year: 2018,
            status: true,
            coverImage: FilosofiTeras,
        },
        {
            id: 5,
            title: "Laut Bercerita",
            author: "Leila S. Chudori",
            category: "Novel",
            year: 2017,
            status: false,
            coverImage: LautBercerita,
        },
        {
            id: 6,
            title: "Clean Code",
            author: "Robert C. Martin",
            category: "Teknologi",
            year: 2008,
            status: true,
            coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
        },
        {
            id: 7,
            title: "Sebuah Seni untuk Bersikap Bodo Amat",
            author: "Mark Manson",
            category: "Self Development",
            year: 2016,
            status: false,
            coverImage: SebuahSeniBodoAmat,
        },
        {
            id: 8,
            title: "Psychology of Money",
            author: "Morgan Housel",
            category: "Keuangan",
            year: 2020,
            status: true,
            coverImage: PsychologyOfMoney,
        },
        {
            id: 9,
            title: "Janji",
            author: "Tere Liye",
            category: "Novel",
            year: 2019,
            status: true,
            coverImage: Janji,
        },
        {
            id: 10,
            title: "Matahari Minor",
            author: "Tere Liye",
            category: "Novel",
            year: 2019,
            status: false,
            coverImage: MatahariMinor,
        },
        {
            id: 11,
            title: "Hujan",
            author: "Tere Liye",
            category: "Novel",
            year: 2019,
            status: true,
            coverImage: Hujan,
        },
        {
            id: 12,
            title: "Dompet Ayah Sepatu Ibu",
            author: "Js. Khairen",
            category: "Novel",
            year: 2020,
            status: true,
            coverImage: DompetAyahSepatuIbu,
        },
    ];

    return (
        <main className="container mx-auto px-4 py-10 grow">
            <div className="mb-8 text-center sm:text-left border-b border-[#D6C0B3]/40 pb-4">
                <h2 className="sm:text-4xl font-serif font-bold text-[#3D2B1E]">
                    Koleksi Buku
                </h2>
                <p className="text-[#6F5B4C] text-sm mt-1 font-sans">
                    Menampilkan <span className="font-semibold text-[#4A3525]">{books.length}</span> buku yang terdaftar. Temukan buku favoritmu di sini!
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {books.map((book) => (
                    <BookCard
                        key={book.id}
                        title={book.title}
                        author={book.author}
                        category={book.category}
                        year={book.year}
                        status={book.status}
                        coverImage={book.coverImage}
                    />
                ))}
            </div>
        </main>
    );
}

export default BookList;