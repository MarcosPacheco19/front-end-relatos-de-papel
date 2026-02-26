export type UUID = string;

export type CategoryResponse = {
  id: UUID;
  name: string;
  description: string | null;
};

export type BookResponse = {
  id: UUID;
  title: string;
  author: string;
  publicationDate: string;
  categoryId: UUID;
  categoryName: string;
  isbn: string;
  rating: number | null;
  visible: boolean;
  stock: number;
};

export type BookAvailabilityResponse = {
  bookId: UUID;
  exists: boolean;
  visible: boolean;
  currentStock: number;
  available: boolean;
  reason: string;
};
