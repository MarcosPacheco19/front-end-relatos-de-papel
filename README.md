# 📚 Relatos de Papel - Frontend

Aplicación web de comercio electrónico para la venta de libros desarrollada con React, TypeScript y Vite.

## 🚀 Características

- ⚡ Vite para desarrollo rápido y optimización de producción
- ⚛️ React 19 con TypeScript
- 🎨 Tailwind CSS v4 para estilos
- 🧩 Componentes UI reutilizables con Radix UI
- 🛣️ React Router v7 para navegación
- 📊 Recharts para visualización de datos
- 🎯 React Hook Form para manejo de formularios
- 🔍 ESLint para calidad de código

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** versión 18.x o superior ([Descargar Node.js](https://nodejs.org/))
- **pnpm** versión 8.x o superior (gestor de paquetes recomendado)

### Instalación de pnpm

Si no tienes pnpm instalado, puedes instalarlo globalmente con:

```bash
npm install -g pnpm
```

O usando Corepack (incluido con Node.js 16.13+):

```bash
corepack enable
corepack prepare pnpm@latest --activate
```

## 🔧 Instalación

### 1. Clonar el repositorio

```bash
git clone <URL_DEL_REPOSITORIO>
cd front-end-relatos-de-papel
```

### 2. Instalar dependencias

```bash
pnpm install
```

Este comando instalará todas las dependencias necesarias especificadas en el [package.json](package.json), incluyendo:

**Dependencias principales:**

- React & React DOM
- React Router DOM
- Radix UI Components (Accordion, Dialog, Dropdown, etc.)
- Tailwind CSS v4
- Lucide React (iconos)
- Recharts (gráficos)
- Y más...

**Dependencias de desarrollo:**

- TypeScript
- Vite
- ESLint
- Tailwind CSS

## 🎮 Scripts Disponibles

### Modo Desarrollo

Inicia el servidor de desarrollo con hot-reload:

```bash
pnpm dev
```

La aplicación estará disponible en [http://localhost:5173](http://localhost:5173)

### Compilar para Producción

Compila el proyecto TypeScript y construye la versión optimizada para producción:

```bash
pnpm build
```

Los archivos compilados se generarán en la carpeta `dist/`

### Previsualizar Build de Producción

Previsualiza la versión de producción localmente:

```bash
pnpm preview
```

### Linter

Ejecuta ESLint para verificar la calidad del código:

```bash
pnpm lint
```

## 📁 Estructura del Proyecto

```
front-end-relatos-de-papel/
├── public/              # Archivos estáticos
│   └── assets/         # Imágenes y recursos públicos
├── src/
│   ├── components/     # Componentes reutilizables UI
│   │   └── ui/        # Componentes base (Button, Input, etc.)
│   ├── features/      # Módulos por funcionalidad
│   │   ├── Auth/      # Autenticación
│   │   ├── BookDetails/  # Detalles de libros
│   │   ├── Cart/      # Carrito de compras
│   │   ├── Checkout/  # Proceso de pago
│   │   ├── Home/      # Página principal
│   │   └── Layout/    # Componentes de layout
│   ├── hooks/         # Custom hooks de React
│   ├── lib/           # Utilidades y helpers
│   ├── router/        # Configuración de rutas
│   ├── index.css      # Estilos globales
│   └── main.tsx       # Punto de entrada
├── eslint.config.js   # Configuración ESLint
├── vite.config.ts     # Configuración Vite
├── tsconfig.json      # Configuración TypeScript
└── package.json       # Dependencias y scripts
```

## 🛠️ Tecnologías Utilizadas

### Core

- **React** (v19.2.0) - Biblioteca UI
- **TypeScript** (v5.9.3) - Tipado estático
- **Vite** (v7.2.4) - Build tool y dev server

### Estilos

- **Tailwind CSS** (v4.1.18) - Framework CSS utility-first
- **Class Variance Authority** - Gestión de variantes de componentes
- **clsx & tailwind-merge** - Utilidades para clases CSS

### UI Components

- **Radix UI** - Componentes accesibles sin estilos
- **Lucide React** - Iconos
- **Vaul** - Drawer component
- **Sonner** - Toast notifications

### Formularios y Validación

- **React Hook Form** (v7.69.0) - Gestión de formularios

### Routing

- **React Router DOM** (v7.11.0) - Navegación SPA

### Gráficos y Visualización

- **Recharts** (v3.6.0) - Biblioteca de gráficos

## 🔑 Variables de Entorno

Si el proyecto requiere variables de entorno, crea un archivo `.env` en la raíz del proyecto:

```env
# Ejemplo
VITE_API_URL=http://localhost:3000/api
VITE_APP_NAME=Relatos de Papel
```

**Nota:** Las variables de entorno en Vite deben comenzar con `VITE_` para ser expuestas al cliente.

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Notas de Desarrollo

### Alias de Importación

El proyecto está configurado con un alias `@` que apunta a la carpeta `src/`:

```typescript
// En lugar de: import { Button } from '../../../components/ui/Button'
import { Button } from "@/components/ui/Button";
```

### Componentes UI

Los componentes UI en `src/components/ui/` están basados en Radix UI y son altamente personalizables. Cada componente incluye:

- Archivo TypeScript principal
- Estilos CSS (cuando sea necesario)
- Variantes (usando CVA)
- Barrel export (`index.ts`)

## 🐛 Solución de Problemas

### Error al instalar dependencias

Si encuentras errores durante la instalación:

```bash
# Limpia la caché de pnpm
pnpm store prune

# Elimina node_modules y lockfile
rm -rf node_modules pnpm-lock.yaml

# Reinstala
pnpm install
```

### Puerto en uso

Si el puerto 5173 está ocupado, Vite automáticamente usará el siguiente disponible, o puedes especificar uno:

```bash
pnpm dev -- --port 3000
```
