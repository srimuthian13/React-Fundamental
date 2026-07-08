const mahasiswa = {
    nama: "Budi Santoso",
    nim: "23110001",
    prodi: "Teknik Informatasi",
    semester: 4,
    nilai: [85, 90, 78, 88]
};

const { nama, nim, prodi, semester, nilai } = mahasiswa;

const hitungRataRata = (nilai) => {
    const total = nilai.reduce((acc, curr) => acc + curr, 0);
    return total / nilai.length;
}

const rataRata = hitungRataRata(nilai);

console.log(`Nama: ${nama}\nNIM: ${nim}\nProdi: ${prodi}\nSemester: ${semester}\nRata-rata Nilai: ${rataRata.toFixed(2)}`);

const mahasiswaAktif = {
    ...mahasiswa,
    status: "Aktif"
};

console.log("Data Mahasiswa Baru : ");
console.log(mahasiswaAktif);

const hitungTotalNilai = (...angka) =>{
    let total = 0;
    for (let nilai of angka) {
        total += nilai;
    }
    return total;
}

let totalNilai = hitungTotalNilai(...nilai);

console.log(`Total Nilai: ${totalNilai}`);