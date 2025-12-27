import { Button } from "../../../components/ui/Button";
import { cn } from "../../../lib/utils";
import "../styles/CategoryFilter.css";

interface CategoryFilterProps {
  categories: readonly string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  return (
    <div className="category-filter">
      <div className="category-filter__container">
        <div className="category-filter__list">
          <Button
            onClick={() => onSelectCategory("Todos")}
            className={cn(
              "category-filter__button",
              selectedCategory === "Todos"
                ? "category-filter__button--active"
                : "category-filter__button--inactive"
            )}
          >
            Todos
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => onSelectCategory(category)}
              className={cn(
                "category-filter__button",
                selectedCategory === category
                  ? "category-filter__button--active"
                  : "category-filter__button--inactive"
              )}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
