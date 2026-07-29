import { FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa'; // Perbaikan: fa huruf kecil

function Footer() {
  return (
    <footer className="bg-[#3D2B1E] text-[#E3D5CA] py-6 mt-auto border-t border-[#4A3525]">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left text-sm font-sans">
          <p>&copy; 2026 <span className="font-serif font-semibold text-[#F5EBE0]">LibraryHub</span>. Tugas Pertemuan 5 & 6.</p>
          <p className="text-[#D6C0B3]/70 text-xs mt-0.5">Perpustakaan digital dibuat menggunakan React & Tailwind CSS</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 font-sans">
          <a
            href="https://github.com/srimuthian13/React-Fundamental"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-[#4A3525] hover:bg-[#5C4033] text-[#FDFBF7] text-xs font-medium px-3.5 py-2 rounded-xl transition-colors duration-200 shadow-sm border border-[#5C4033]"
          >
            <FaGithub className="w-4 h-4 text-[#D6C0B3]" />
            <span>GitHub</span>
          </a>

          <a
            href="#"
            className="inline-flex items-center gap-1.5 bg-[#4A3525] hover:bg-[#5C4033] text-[#FDFBF7] text-xs font-medium px-3.5 py-2 rounded-xl transition-colors duration-200 shadow-sm border border-[#5C4033]"
          >
            <FaInstagram className="w-4 h-4 text-[#D6C0B3]" />
            <span>Instagram</span>
          </a>

          <a
            href="#"
            className="inline-flex items-center gap-1.5 bg-[#4A3525] hover:bg-[#5C4033] text-[#FDFBF7] text-xs font-medium px-3.5 py-2 rounded-xl transition-colors duration-200 shadow-sm border border-[#5C4033]"
          >
            <FaEnvelope className="w-4 h-4 text-[#D6C0B3]" />
            <span>Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;