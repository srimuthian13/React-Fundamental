import avatarBg from "../assets/avatar.png";
import insedeOut2Bg from "../assets/insideout.png";
import spiderManBg from "../assets/spiderman.png";
import oppenheimerBg from "../assets/openheimer.png";
import duneBg from "../assets/dune.png";
import spiritedAwayBg from "../assets/spiritedaway.png";
import theGodfatherBg from "../assets/thegodfather.png";
import avangersBg from "../assets/avengers.png";
import interstellarBg from "../assets/interstellar.png";
import inceptionBg from "../assets/inception.png";
import theDarkKnightBg from "../assets/thedarknight.png";

export const initialMovies = [
  { 
    id: 1, 
    title: "Interstellar", 
    genre: "Sci-Fi", 
    year: 2014, 
    duration: "169 Menit", 
    rating: 8.6, 
    showing: true, 
    favorite: false, 
    watchlist: false,
    posterUrl: interstellarBg 
  },
  { 
    id: 2, 
    title: "Inception", 
    genre: "Sci-Fi", 
    year: 2010, 
    duration: "148 Menit", 
    rating: 8.8, 
    showing: true, 
    favorite: true, 
    watchlist: false,
    posterUrl: inceptionBg 
  },
  { 
    id: 3, 
    title: "The Dark Knight", 
    genre: "Action", 
    year: 2008, 
    duration: "152 Menit", 
    rating: 9.0, 
    showing: false, 
    favorite: true, 
    watchlist: false,
    posterUrl: theDarkKnightBg 
  },
  { 
    id: 4, 
    title: "Avatar: The Way of Water", 
    genre: "Action", 
    year: 2022, 
    duration: "192 Menit", 
    rating: 7.6, 
    showing: true, 
    favorite: false, 
    watchlist: false,
    posterUrl: avatarBg
  },
  { 
    id: 5, 
    title: "Spider-Man: Across the Spider-Verse", 
    genre: "Animation", 
    year: 2023, 
    duration: "140 Menit", 
    rating: 8.7, 
    showing: true, 
    favorite: true, 
    watchlist: true,
    posterUrl: spiderManBg
  },
  { 
    id: 6, 
    title: "Oppenheimer", 
    genre: "Biography", 
    year: 2023, 
    duration: "180 Menit", 
    rating: 8.9, 
    showing: true, 
    favorite: false, 
    watchlist: false,
    posterUrl:  oppenheimerBg
  },
  { 
    id: 7, 
    title: "T", 
    genre: "Thriller", 
    year: 2019, 
    duration: "132 Menit", 
    rating: 8.5, 
    showing: false, 
    favorite: true, 
    watchlist: false,
    posterUrl:spiritedAwayBg 
  },
  { 
    id: 8, 
    title: "Dune: Part Two", 
    genre: "Sci-Fi", 
    year: 2024, 
    duration: "166 Menit", 
    rating: 8.6, 
    showing: true, 
    favorite: true, 
    watchlist: true,
    posterUrl: duneBg 
  },
  { 
    id: 9, 
    title: "Spirited Away", 
    genre: "Animation", 
    year: 2001, 
    duration: "125 Menit", 
    rating: 8.6, 
    showing: false, 
    favorite: false, 
    watchlist: false,
    posterUrl:spiritedAwayBg 
  },
  { 
    id: 10, 
    title: "The Godfather", 
    genre: "Crime", 
    year: 1972, 
    duration: "175 Menit", 
    rating: 9.2, 
    showing: false, 
    favorite: false, 
    watchlist: false,
    posterUrl: theGodfatherBg 
  },
  { 
    id: 11, 
    title: "Avengers: Endgame", 
    genre: "Action", 
    year: 2019, 
    duration: "181 Menit", 
    rating: 8.4, 
    showing: false, 
    favorite: true, 
    watchlist: false,
    posterUrl: avangersBg 
  },
  { 
    id: 12, 
    title: "Inside Out 2", 
    genre: "Animation", 
    year: 2024, 
    duration: "96 Menit", 
    rating: 7.7, 
    showing: true, 
    favorite: false, 
    watchlist: false,
    posterUrl: insedeOut2Bg 
  },
];
