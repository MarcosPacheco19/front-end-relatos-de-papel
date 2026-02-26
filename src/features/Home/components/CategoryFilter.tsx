import { Button } from "../../../components/ui/Button";
import { cn } from "../../../lib/utils";
import "../styles/CategoryFilter.css";
import type { CategoryResponse } from "../api/home.api-types";

interface CategoryFilterProps {
  categories: readonly CategoryResponse[];
  selectedCategoryId: string | null; // null = Todos
  onSelectCategoryId: (categoryId: string | null) => void;
}

export function CategoryFilter({
  categories,
  selectedCategoryId,
  onSelectCategoryId,
}: CategoryFilterProps) {
  return (
    <div className="category-filter">
      <div className="category-filter__container">
        <div className="category-filter__list">
          <Button
            onClick={() => onSelectCategoryId(null)}
            className={cn(
              "category-filter__button",
              selectedCategoryId === null
                ? "category-filter__button--active"
                : "category-filter__button--inactive",
            )}
          >
            Todos
          </Button>

          {categories.map((c) => (
            <Button
              key={c.id}
              onClick={() => onSelectCategoryId(c.id)}
              className={cn(
                "category-filter__button",
                selectedCategoryId === c.id
                  ? "category-filter__button--active"
                  : "category-filter__button--inactive",
              )}
            >
              {c.name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
