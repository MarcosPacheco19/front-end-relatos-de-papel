import type { Book } from "../types/book";

export const MOCK_BOOKS: Book[] = [
  {
    id: "1",
    title: "Cien Años de Soledad",
    author: "Gabriel García Márquez",
    price: 24.99,
    originalPrice: 29.99,
    discount: 15,
    category: "Ficción",
    image:
      "https://images.unsplash.com/photo-1658827053969-a181495a33f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc2ljJTIwYm9va3N8ZW58MXx8fHwxNzY2NjA0MTMyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.8,
    reviews: 1243,
  },
  {
    id: "2",
    title: "El Principito",
    author: "Antoine de Saint-Exupéry",
    price: 15.99,
    category: "Clásicos",
    image:
      "https://images.unsplash.com/photo-1556566952-11eff3d06ed4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwYm9va3N8ZW58MXx8fHwxNzY2NTY1MjMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.9,
    reviews: 2156,
  },
  {
    id: "3",
    title: "Sapiens: De animales a dioses",
    author: "Yuval Noah Harari",
    price: 28.99,
    originalPrice: 34.99,
    discount: 20,
    category: "Historia",
    image:
      "https://images.unsplash.com/photo-1599185186578-0ba91c2a15c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWN0aW9uJTIwbm92ZWx8ZW58MXx8fHwxNzY2NTk3MDcxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.7,
    reviews: 987,
  },
  {
    id: "4",
    title: "El Señor de los Anillos",
    author: "J.R.R. Tolkien",
    price: 45.99,
    category: "Fantasía",
    image:
      "https://images.unsplash.com/photo-1660606422336-4dd7b6795838?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBib29rfGVufDF8fHx8MTc2NjU3OTA3OXww&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.9,
    reviews: 3421,
  },
  {
    id: "5",
    title: "1984",
    author: "George Orwell",
    price: 18.99,
    category: "Ficción",
    image:
      "https://images.unsplash.com/photo-1658827053969-a181495a33f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc2ljJTIwYm9va3N8ZW58MXx8fHwxNzY2NjA0MTMyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.6,
    reviews: 2890,
  },
  {
    id: "6",
    title: "Don Quijote de la Mancha",
    author: "Miguel de Cervantes",
    price: 22.99,
    category: "Clásicos",
    image:
      "https://images.unsplash.com/photo-1556566952-11eff3d06ed4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwYm9va3N8ZW58MXx8fHwxNzY2NTY1MjMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.5,
    reviews: 1654,
  },
  {
    id: "7",
    title: "El Código Da Vinci",
    author: "Dan Brown",
    price: 19.99,
    originalPrice: 24.99,
    discount: 20,
    category: "Misterio",
    image:
      "https://images.unsplash.com/photo-1599185186578-0ba91c2a15c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWN0aW9uJTIwbm92ZWx8ZW58MXx8fHwxNzY2NTk3MDcxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.4,
    reviews: 2341,
  },
  {
    id: "8",
    title: "Harry Potter y la Piedra Filosofal",
    author: "J.K. Rowling",
    price: 21.99,
    category: "Fantasía",
    image:
      "https://images.unsplash.com/photo-1660606422336-4dd7b6795838?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBib29rfGVufDF8fHx8MTc2NjU3OTA3OXww&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.9,
    reviews: 5672,
  },
  {
    id: "9",
    title: "Breve Historia del Tiempo",
    author: "Stephen Hawking",
    price: 26.99,
    category: "Ciencia",
    image:
      "https://images.unsplash.com/photo-1658827053969-a181495a33f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc2ljJTIwYm9va3N8ZW58MXx8fHwxNzY2NjA0MTMyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.6,
    reviews: 876,
  },
  {
    id: "10",
    title: "Orgullo y Prejuicio",
    author: "Jane Austen",
    price: 17.99,
    category: "Romance",
    image:
      "https://images.unsplash.com/photo-1556566952-11eff3d06ed4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwYm9va3N8ZW58MXx8fHwxNzY2NTY1MjMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.7,
    reviews: 1987,
  },
  {
    id: "11",
    title: "El Arte de la Guerra",
    author: "Sun Tzu",
    price: 14.99,
    category: "Filosofía",
    image:
      "https://images.unsplash.com/photo-1599185186578-0ba91c2a15c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWN0aW9uJTIwbm92ZWx8ZW58MXx8fHwxNzY2NTk3MDcxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.5,
    reviews: 1234,
  },
  {
    id: "12",
    title: "Crónica de una Muerte Anunciada",
    author: "Gabriel García Márquez",
    price: 16.99,
    originalPrice: 19.99,
    discount: 15,
    category: "Ficción",
    image:
      "https://images.unsplash.com/photo-1660606422336-4dd7b6795838?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBib29rfGVufDF8fHx8MTc2NjU3OTA3OXww&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.6,
    reviews: 1543,
  },
];

/**
 * Lista de categorías disponibles para filtrar libros
 * Extraídas automáticamente de los libros disponibles
 */
export const CATEGORIES = [
  "Ficción",
  "Clásicos",
  "Historia",
  "Fantasía",
  "Misterio",
  "Ciencia",
  "Romance",
  "Filosofía",
];
