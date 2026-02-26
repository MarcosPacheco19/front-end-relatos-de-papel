import { apiClient } from "@/lib/http";
import type { CategoryResponse } from "./home.api-types";

const BASE = "/catalogue/categories";

export async function listCategories(): Promise<CategoryResponse[]> {
  const { data } = await apiClient.get<CategoryResponse[]>(BASE);
  return data;
}
