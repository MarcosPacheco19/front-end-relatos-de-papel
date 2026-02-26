# ---------- 1) Build con PNPM ----------
FROM node:20-alpine AS build
WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate

# instala dependencias usando el lock de pnpm
COPY pnpm-lock.yaml package.json ./
RUN pnpm install --no-frozen-lockfile

# copia el resto y construye (ahora build = vite build)
COPY . .
RUN pnpm build

# ---------- 2) Servir con NGINX ----------
FROM nginx:1.25-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]