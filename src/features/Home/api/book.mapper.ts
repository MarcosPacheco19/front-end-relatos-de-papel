import type { BookResponse } from "./home.api-types";

export type BookUI = BookResponse & {
  // UI essentials
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  images: string[]; // galería
  reviews: number;
  availability: "in_stock" | "out_of_stock";

  // extra UI
  description: string;
  tags: string[];
  badge?: "NUEVO" | "OFERTA" | "TOP" | "EDICIÓN LIMITADA";
  format: "Tapa dura" | "Tapa blanda" | "eBook" | "Audiolibro";
  language: "Español" | "Inglés" | "Francés" | "Portugués";
  pages: number;
  publisher: string;
  likes: number;
  shippingDays: number;
};

// ✅ 30+ imágenes (puedes agregar más)
const IMAGE_POOL = [
  "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=1080&q=80",
  "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1080&q=80",
  "https://images.unsplash.com/photo-1455885666463-4f5fcd70a593?auto=format&fit=crop&w=1080&q=80",
  "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1080&q=80",
  "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=1080&q=80",
  "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=1080&q=80",
  "https://images.unsplash.com/photo-1509266272358-7701da638078?auto=format&fit=crop&w=1080&q=80",
  "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=1080&q=80",
  "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1080&q=80",
  "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=1080&q=80",
  "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=1080&q=80",
  "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&w=1080&q=80",
  "https://images.unsplash.com/photo-1535398089889-dd807df1dfaa?auto=format&fit=crop&w=1080&q=80",
  "https://images.unsplash.com/photo-1524578271613-d550eacf6090?auto=format&fit=crop&w=1080&q=80",
  "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&w=1080&q=80",
  "https://images.unsplash.com/photo-1544717305-996b815c338c?auto=format&fit=crop&w=1080&q=80",
  "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=1080&q=80",
  "https://images.unsplash.com/photo-1529590003495-b2646e2718bf?auto=format&fit=crop&w=1080&q=80",
  "https://images.unsplash.com/photo-1511666090996-81f26024b528?auto=format&fit=crop&w=1080&q=80",
  "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1080&q=80",
  "https://images.unsplash.com/photo-1474932430478-3675c92e5c0f?auto=format&fit=crop&w=1080&q=80",
  "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?auto=format&fit=crop&w=1080&q=80",
  "https://images.unsplash.com/photo-1550399105-c4db5fb85c18?auto=format&fit=crop&w=1080&q=80",
  "https://images.unsplash.com/photo-1528460033278-a6ba57020470?auto=format&fit=crop&w=1080&q=80",
  "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1080&q=80",
  "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=1080&q=80",
  "https://images.unsplash.com/photo-1511108690759-009324a90311?auto=format&fit=crop&w=1080&q=80",
  "https://images.unsplash.com/photo-1531327431456-837da4b1d562?auto=format&fit=crop&w=1080&q=80",
  "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1080&q=80",
  "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1080&q=80",
];

const PUBLISHERS = [
  "Planeta",
  "Penguin Random House",
  "Alfaguara",
  "Anagrama",
  "Seix Barral",
  "Salamandra",
  "Debolsillo",
  "Paidós",
  "Espasa",
  "Minotauro",
];

const TAGS = [
  "Recomendado",
  "Bestseller",
  "Clásico",
  "Nuevo lanzamiento",
  "Edición especial",
  "Oferta limitada",
  "Lectura rápida",
  "Ideal para regalo",
  "Top valorado",
  "Favorito del mes",
];

const FORMATS: BookUI["format"][] = [
  "Tapa dura",
  "Tapa blanda",
  "eBook",
  "Audiolibro",
];
const LANGUAGES: BookUI["language"][] = [
  "Español",
  "Inglés",
  "Francés",
  "Portugués",
];
const BADGES: NonNullable<BookUI["badge"]>[] = [
  "NUEVO",
  "OFERTA",
  "TOP",
  "EDICIÓN LIMITADA",
];

function hashString(s: string) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function pick<T>(rnd: () => number, arr: readonly T[]) {
  return arr[Math.floor(rnd() * arr.length)];
}

function uniquePicks<T>(rnd: () => number, arr: readonly T[], count: number) {
  const copy = [...arr];
  const out: T[] = [];
  const n = Math.min(count, copy.length);
  for (let i = 0; i < n; i++) {
    const idx = Math.floor(rnd() * copy.length);
    out.push(copy[idx]);
    copy.splice(idx, 1);
  }
  return out;
}

function round2(n: number) {
  return Math.round(n * 100) / 100;
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function buildDescription(b: BookResponse, rnd: () => number) {
  const cat = (b.categoryName || "").toLowerCase();
  const tones = [
    "Una historia envolvente",
    "Una lectura imprescindible",
    "Un viaje narrativo",
    "Una obra cautivadora",
    "Una propuesta original",
  ];
  const hooks = [
    "con personajes memorables",
    "con un ritmo ágil y adictivo",
    "llena de emoción y giros",
    "ideal para leer en una tarde",
    "que deja huella desde la primera página",
  ];
  const endings = [
    "Perfecto para sumar a tu biblioteca.",
    "Ideal para regalar a alguien especial.",
    "Una recomendación segura para fans del género.",
    "No querrás soltarlo hasta el final.",
    "Te va a sorprender.",
  ];

  let genreLine = "";
  if (cat.includes("fantas"))
    genreLine = "Magia, aventura y mundos increíbles en cada capítulo.";
  else if (cat.includes("cienc"))
    genreLine = "Ideas fascinantes y divulgación clara para mentes curiosas.";
  else if (cat.includes("hist"))
    genreLine = "Contexto, análisis y relatos que conectan pasado y presente.";
  else if (cat.includes("mister"))
    genreLine =
      "Pistas, tensión y un misterio que se resuelve página a página.";
  else if (cat.includes("rom"))
    genreLine = "Romance, emociones y decisiones que marcan destinos.";
  else if (cat.includes("clás"))
    genreLine = "Un clásico que se mantiene vigente con el paso del tiempo.";
  else genreLine = "Una lectura equilibrada entre entretenimiento y reflexión.";

  return `${pick(rnd, tones)} ${pick(rnd, hooks)}. ${genreLine} ${pick(rnd, endings)}`;
}

export function toBookUI(b: BookResponse): BookUI {
  const seed = hashString(b.id + "|" + (b.isbn ?? ""));
  const rnd = mulberry32(seed);

  // Precio más realista según "stock/rating" como variación
  const base = 8 + rnd() * 45; // 8..53
  const ratingBoost = b.rating ? (b.rating - 3) * 1.5 : 0;
  const stockPenalty = b.stock <= 0 ? -2 : b.stock < 5 ? 1 : 0;

  const price = round2(clamp(base + ratingBoost + stockPenalty, 6, 79));

  // Descuento ~45%
  const hasDiscount = rnd() < 0.45;
  const discount = hasDiscount ? Math.round(10 + rnd() * 30) : undefined;
  const originalPrice =
    discount !== undefined ? round2(price / (1 - discount / 100)) : undefined;

  // Imágenes
  const mainImage = pick(rnd, IMAGE_POOL);
  const gallery = [mainImage, ...uniquePicks(rnd, IMAGE_POOL, 3)].slice(0, 4);

  // reviews/likes
  const reviews = Math.floor(10 + rnd() * 8000);
  const likes = Math.floor(50 + rnd() * 50000);

  // Badge ~30%
  const badge = rnd() < 0.3 ? pick(rnd, BADGES) : undefined;

  // Tags 2-4
  const tags = uniquePicks(rnd, TAGS, 2 + Math.floor(rnd() * 3));

  // formato / idioma / páginas / editorial
  const format = pick(rnd, FORMATS);
  const language = pick(rnd, LANGUAGES);
  const pages = Math.floor(120 + rnd() * 520); // 120..640
  const publisher = pick(rnd, PUBLISHERS);

  const availability: "in_stock" | "out_of_stock" =
    b.stock > 0 ? "in_stock" : "out_of_stock";

  const shippingDays =
    availability === "in_stock"
      ? 1 + Math.floor(rnd() * 4) // 1..4
      : 3 + Math.floor(rnd() * 7); // 3..9

  const description = buildDescription(b, rnd);

  // rating: si backend trae, lo respetamos; si no, generamos uno (3.5..5)
  const rating =
    b.rating !== null && b.rating !== undefined
      ? b.rating
      : Math.round((3.5 + rnd() * 1.5) * 10) / 10;

  return {
    ...b,
    rating,
    price,
    originalPrice,
    discount,
    image: mainImage,
    images: gallery,
    reviews,
    likes,
    badge,
    tags,
    format,
    language,
    pages,
    publisher,
    availability,
    shippingDays,
    description,
  };
}
