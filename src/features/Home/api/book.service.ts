import { apiClient } from "@/lib/http";
import { toBookUI, type BookUI } from "./book.mapper";
import type {
  BookAvailabilityResponse,
  BookResponse,
  UUID,
} from "./home.api-types";

const BASE = "/catalogue/books";

export type BookSearchParams = {
  q?: string;
  publicationDate?: string;
  categoryId?: UUID;
  rating?: number;
  visible?: boolean;
};

export async function searchBooks(
  params?: BookSearchParams,
): Promise<BookUI[]> {
  const { data } = await apiClient.get<BookResponse[]>(BASE, { params });
  return data.map(toBookUI);
}

export async function getAvailability(
  id: UUID,
  quantity: number,
): Promise<BookAvailabilityResponse> {
  const { data } = await apiClient.get<BookAvailabilityResponse>(
    `${BASE}/${id}/availability`,
    { params: { quantity } },
  );
  return data;
}
