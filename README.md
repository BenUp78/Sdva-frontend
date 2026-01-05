This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Git Commands

### Ver cambios y hacer push

```bash
# Ver el estado de los archivos (qué está modificado, agregado, etc.)
git status

# Ver los cambios específicos en los archivos modificados
git diff

# Ver los cambios que están en staging (preparados para commit)
git diff --staged

# Agregar archivos al staging area
git add .                    # Agrega todos los archivos
git add <archivo>            # Agrega un archivo específico
git add <carpeta>/           # Agrega una carpeta específica

# Hacer commit de los cambios
git commit -m "Mensaje descriptivo del cambio"

# Ver el historial de commits
git log

# Hacer push al repositorio remoto
git push origin main         # Si estás en la rama main
git push origin <rama>       # Si estás en otra rama

# Ver las ramas disponibles
git branch

# Ver las ramas remotas
git branch -r
```

### Traer cambios del repositorio remoto

```bash
# Traer y fusionar cambios del repositorio remoto (recomendado)
git pull origin main              # Trae cambios y los fusiona automáticamente
git pull                          # Trae cambios de la rama actual

# Solo traer cambios sin fusionar (para revisar primero)
git fetch origin                  # Trae todos los cambios del remoto
git fetch origin main             # Trae cambios de una rama específica

# Ver qué cambios hay en el remoto sin aplicarlos
git fetch
git log HEAD..origin/main         # Ver commits que están en remoto pero no localmente
git diff HEAD..origin/main        # Ver diferencias entre local y remoto

# Actualizar todas las ramas remotas
git fetch --all

# Ver información sobre el remoto
git remote -v                     # Ver repositorios remotos configurados
```

### Flujo completo típico para hacer push

```bash
# 1. Ver qué cambió
git status

# 2. Ver los cambios específicos (opcional)
git diff

# 3. Agregar los cambios
git add .

# 4. Hacer commit
git commit -m "Descripción de los cambios realizados"

# 5. Hacer push
git push origin main
```

### Flujo completo típico para traer cambios

```bash
# 1. Ver el estado actual
git status

# 2. Traer cambios del remoto (opción 1: pull directo)
git pull origin main

# O bien (opción 2: fetch primero para revisar)
git fetch origin
git log HEAD..origin/main         # Ver qué cambios hay
git pull origin main              # Fusionar los cambios

# 3. Si hay conflictos, resolverlos y luego:
git add .
git commit -m "Resuelve conflictos"
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
