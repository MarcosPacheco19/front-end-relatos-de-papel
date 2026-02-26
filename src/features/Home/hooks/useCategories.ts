import { useQuery } from "@tanstack/react-query";
import { listCategories } from "../api/category.service";

export function useCategories() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: listCategories,
    staleTime: 5 * 60 * 1000,
  });
}
