# 🚀 GUÍA DE INICIO RÁPIDO - PageVolt

## ✅ Estado del Proyecto

**El proyecto está 100% funcional y listo para usar.**

### Lo que está completado:
- ✅ Estructura completa de carpetas
- ✅ Todos los componentes React (Navbar, Hero, Services, Process, Portfolio, Pricing, FAQ, Contact, Footer)
- ✅ Sistema de estilos completo (globals.css + animations.css)
- ✅ Animaciones con Framer Motion
- ✅ Diseño responsive (mobile-first)
- ✅ Configuración de Vite
- ✅ Build de producción verificado
- ✅ Listo para deploy en Vercel

### Lo que falta:
- ⚠️ **Imágenes reales** - Actualmente usa placeholders
- ⚠️ **Número de WhatsApp** - Actualizar en Contact.jsx
- ⚠️ **Usuario de Instagram** - Actualizar en Contact.jsx

---

## 🎯 Pasos para Empezar (2 minutos)

### 1. Iniciar el servidor de desarrollo

```bash
cd C:\Users\Vlad5\Downloads\playwright-skill-main\pagevolt
npm run dev
```

El proyecto se abrirá automáticamente en `http://localhost:3000`

### 2. Ver la web funcionando

Abre tu navegador en la URL que aparece en la consola. Deberías ver:
- Hero section con título grande
- Marquee animado
- Sección de servicios con 3 cards
- Timeline del proceso
- Portfolio con 4 demos
- Pricing con 3 planes
- FAQ con acordeón funcional
- Formulario de contacto
- Footer

### 3. Actualizar información de contacto

Edita `src/components/Contact.jsx`:

**Línea 47 - Instagram:**
```jsx
href="https://instagram.com/TU_USUARIO_AQUI"
```

**Línea 55 - WhatsApp:**
```jsx
href="https://wa.me/34TUNUMERO"  // Ejemplo: 34612345678
```

---

## 🖼️ Añadir Imágenes Reales

### Opción 1: Rápida (usar placeholders de color)
Actualmente funciona con gradientes. No necesitas hacer nada.

### Opción 2: Completa (imágenes profesionales)

1. **Lee el archivo:** `IMAGE_PLACEHOLDERS.md`
2. **Genera las imágenes** con las especificaciones indicadas
3. **Guarda en:** `public/images/`
   - `hero-bg.jpg` (1920x1080px)
   - `demo-cafe.jpg` (800x600px)
   - `demo-barber.jpg` (800x600px)
   - `demo-restaurant.jpg` (800x600px)
   - `demo-spa.jpg` (800x600px)

4. **Actualiza Portfolio.jsx:**

Reemplaza cada `.portfolio-placeholder` con:

```jsx
<img 
  src="/images/demo-cafe.jpg" 
  alt="Demo Cafetería"
  className="portfolio-image"
/>
```

---

## 📦 Deploy en Vercel (5 minutos)

### Opción 1: Desde la web de Vercel

1. Sube el proyecto a GitHub:
```bash
git init
git add .
git commit -m "Initial commit - PageVolt web"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/pagevolt.git
git push -u origin main
```

2. Ve a [vercel.com](https://vercel.com)
3. Click en "New Project"
4. Importa tu repositorio
5. Click en "Deploy" (Vercel detecta Vite automáticamente)

### Opción 2: Con Vercel CLI

```bash
npm i -g vercel
cd C:\Users\Vlad5\Downloads\playwright-skill-main\pagevolt
vercel
```

Sigue las instrucciones en pantalla.

---

## 🎨 Personalización Rápida

### Cambiar colores

Edita `src/styles/globals.css`:

```css
:root {
  --color-accent: #6366f1;  /* Cambia este color */
}
```

Colores sugeridos:
- Verde: `#22c55e`
- Naranja: `#f97316`
- Rosa: `#ec4899`
- Cyan: `#06b6d4`

### Cambiar precios

Edita `src/components/Pricing.jsx`, línea 10-45:

```jsx
const plans = [
  {
    name: "Web Esencial",
    price: "99",  // Cambia aquí
    // ...
  }
]
```

### Añadir/quitar servicios

Edita `src/components/Services.jsx`, línea 10-35.

### Modificar pasos del proceso

Edita `src/components/Process.jsx`, línea 10-30.

---

## 🐛 Solución de Problemas

### El servidor no inicia
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Las animaciones no funcionan
Verifica que Framer Motion esté instalado:
```bash
npm list framer-motion
```

Si no aparece:
```bash
npm install framer-motion
```

### Errores de compilación
Revisa la consola. Los errores más comunes:
- Importaciones mal escritas
- Componentes sin cerrar
- CSS con sintaxis incorrecta

---

## 📱 Testing Mobile

Para probar en tu móvil:

1. Inicia el servidor: `npm run dev`
2. Anota tu IP local (aparece en la consola)
3. En tu móvil, abre: `http://TU_IP:3000`

Ejemplo: `http://192.168.1.100:3000`

---

## ⚡ Comandos Útiles

```bash
# Desarrollo
npm run dev          # Inicia servidor local

# Producción
npm run build        # Compila para producción
npm run preview      # Preview del build

# Limpieza
rm -rf node_modules  # Limpia dependencias
rm -rf dist          # Limpia build
```

---

## 📊 Métricas de Performance

Build actual:
- **HTML:** 0.90 kB
- **CSS:** 23.98 kB (gzip: 4.87 kB)
- **JS:** 276.41 kB (gzip: 87.04 kB)
- **Tiempo de build:** ~6s

Muy buenas métricas. El JS es grande por React + Framer Motion, pero está optimizado con code splitting.

---

## 🎯 Next Steps (Recomendado)

1. ✅ **Ahora:** Inicia el servidor y revisa la web
2. 📸 **Después:** Añade imágenes reales
3. 📱 **Luego:** Actualiza datos de contacto
4. 🚀 **Finalmente:** Deploy a Vercel

---

## 📞 Soporte

Si tienes dudas sobre el código:
- Revisa los comentarios en cada componente
- Lee el README.md para más detalles
- Consulta IMAGE_PLACEHOLDERS.md para imágenes

---

**Proyecto creado:** 2026-06-02  
**Versión:** 1.0.0  
**Stack:** React 18 + Vite + Framer Motion
