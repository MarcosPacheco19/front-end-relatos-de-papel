# Organización de Datos Mock y Constantes

## 📁 Estructura Creada

```
src/features/Home/
├── data/
│   └── mockBooks.ts          # Datos de ejemplo de libros
├── constants/
│   └── index.ts              # Constantes de configuración
├── types/
│   └── book.ts               # Interfaces Book y CartItem
├── components/
│   ├── Hero.tsx
│   ├── CategoryFilter.tsx
│   └── BookCard.tsx
└── HomePage.tsx
```

## ✅ Mejores Prácticas Aplicadas

### 1. **Separación de Datos Mock** (`data/mockBooks.ts`)

**❌ ANTES (Malo):**

```tsx
// En HomePage.tsx directamente
const MOCK_BOOKS: Book[] = [
  { id: '1', title: '...', ... },
  // ... 150 líneas de datos
];
```

**✅ AHORA (Bueno):**

```tsx
// src/features/Home/data/mockBooks.ts
export const MOCK_BOOKS: Book[] = [...]
export const CATEGORIES = [...]

// src/features/Home/HomePage.tsx
import { MOCK_BOOKS, CATEGORIES } from './data/mockBooks';
```

**Ventajas:**

- ✅ HomePage.tsx más limpio y fácil de leer
- ✅ Datos reutilizables en otros componentes si es necesario
- ✅ Fácil de reemplazar con datos reales de API
- ✅ Separación de responsabilidades (UI vs Datos)
- ✅ Mejor para testing (puedes importar solo los datos)

### 2. **Constantes Compartidas** (`constants/index.ts`)

**❌ ANTES (Malo):**

```tsx
// Valores mágicos dispersos en el código
const shipping = subtotal >= 50 ? 0 : 5.99;
if (subtotal < 50) { ... }
```

**✅ AHORA (Bueno):**

```tsx
// src/features/Home/constants/index.ts
export const FREE_SHIPPING_THRESHOLD = 50;
export const SHIPPING_COST = 5.99;

// En Cart.tsx
const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
```

**Ventajas:**

- ✅ Un solo lugar para cambiar valores
- ✅ Nombres descriptivos en lugar de números
- ✅ Fácil mantenimiento
- ✅ Evita errores de inconsistencia

### 3. **Tipos TypeScript** (`types/book.ts`)

```tsx
export interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  // ...
}

export interface CartItem extends Book {
  quantity: number;
}
```

**Ventajas:**

- ✅ Type safety en toda la aplicación
- ✅ Autocompletado en el editor
- ✅ Documentación viva del código
- ✅ Detección temprana de errores

## 🔄 Flujo de Datos

```
mockBooks.ts
    ↓
    MOCK_BOOKS (datos)
    ↓
HomePage.tsx
    ↓
    filteredBooks (useMemo)
    ↓
BookCard (componente)
```

## 🎯 Cuándo Usar Cada Patrón

### Usar `data/` cuando:

- Tienes datos de ejemplo para desarrollo
- Quieres mockear respuestas de API
- Necesitas datos de prueba consistentes
- Los datos son grandes (>20 líneas)

### Usar `constants/` cuando:

- Tienes valores que se repiten
- Configuraciones que pueden cambiar
- Umbrales, límites, tarifas
- Textos que podrían traducirse

### Usar `types/` cuando:

- Defines la estructura de datos
- Necesitas interfaces compartidas
- Quieres type safety
- Los tipos se usan en múltiples archivos

## 📚 Próximos Pasos para Producción

Cuando conectes con una API real:

```tsx
// 1. Crear un servicio
// src/features/Home/services/bookService.ts
export async function getBooks(): Promise<Book[]> {
  const response = await fetch("/api/books");
  return response.json();
}

// 2. Usar en HomePage con React Query o SWR
import { useQuery } from "@tanstack/react-query";
import { getBooks } from "./services/bookService";

export function HomePage() {
  const { data: books, isLoading } = useQuery({
    queryKey: ["books"],
    queryFn: getBooks,
  });

  // Reemplazar MOCK_BOOKS con books
}

// 3. Mantener mockBooks.ts solo para tests
// tests/HomePage.test.tsx
import { MOCK_BOOKS } from "./data/mockBooks";
```

## 🎨 Convención de Nombres

- **Data files**: `mockBooks.ts`, `mockUsers.ts` (camelCase)
- **Constantes**: `UPPER_SNAKE_CASE` para exportaciones
- **Tipos**: `PascalCase` para interfaces
- **Carpetas**: `lowercase` (data, constants, types)

## 🛠️ Comandos Útiles

```bash
# Verificar estructura
tree src/features/Home

# Buscar uso de constantes
grep -r "FREE_SHIPPING_THRESHOLD" src/

# Encontrar todos los mock data
find src/ -name "mock*.ts"
```
