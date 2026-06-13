# PageVolt - Sistema de Pagos Integrado 💳

Web profesional para PageVolt con sistema completo de pagos. Tus clientes pagan de forma segura con tarjeta usando códigos únicos.

## 🚀 Stack Tecnológico

- **React 18** - Framework frontend
- **Vite** - Build tool ultrarrápido
- **Framer Motion** - Animaciones fluidas
- **Stripe** - Pasarela de pagos profesional
- **Netlify Functions** - Backend serverless
- **React Router** - Navegación
- **CSS Custom** - Diseño completamente personalizado

## 📦 Instalación y Setup

```bash
# Instalar dependencias
npm install

# Configurar Stripe (ver SETUP-PAGOS.md)
cp .env.example .env
# Edita .env con tus claves de Stripe

# Generar código de pago para cliente
npm run generate-code

# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

**IMPORTANTE:** Lee [SETUP-PAGOS.md](./SETUP-PAGOS.md) para configurar el sistema de pagos completo.

## 🎨 Características de Diseño

- **Diseño oscuro premium** - Paleta de colores moderna (#0a0a0a, #6366f1)
- **Animaciones suaves** - Scroll reveal, parallax, hover effects
- **100% responsive** - Mobile-first design
- **Performance optimizada** - Lazy loading, code splitting
- **Accesibilidad** - Semántica HTML5, ARIA labels

## 📁 Estructura del Proyecto

```
pagevolt/
├── public/
│   ├── images/          # Placeholders - ver IMAGE_PLACEHOLDERS.md
│   └── favicon.svg
├── src/
│   ├── components/      # Componentes React
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Problem.jsx
│   │   ├── Services.jsx
│   │   ├── Process.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Pricing.jsx
│   │   ├── FAQ.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Payment.jsx           # 💳 Sistema de pagos
│   │   └── PaymentSuccess.jsx    # ✅ Confirmación de pago
│   ├── pages/
│   │   └── Home.jsx
│   ├── styles/
│   │   ├── globals.css
│   │   └── animations.css
│   └── App.jsx
├── netlify/
│   └── functions/
│       ├── validate-code.js      # Valida códigos de pago
│       ├── stripe-webhook.js     # Webhook de Stripe
│       └── verify-payment.js     # Verifica estado del pago
├── data/
│   ├── payment-codes.json        # Base de datos de códigos
│   └── README.md                 # Instrucciones de códigos
├── scripts/
│   └── generate-code.js          # Generador de códigos
├── SETUP-PAGOS.md                # 📘 Guía completa de setup
├── index.html
├── package.json
└── vite.config.js
```

## 🖼️ Imágenes

Este proyecto usa placeholders temporales para las imágenes. Para completar el diseño:

1. Lee el archivo **`IMAGE_PLACEHOLDERS.md`** para especificaciones detalladas
2. Genera o encuentra las imágenes necesarias
3. Colócalas en `/public/images/`
4. Las imágenes se cargarán automáticamente

**Imágenes necesarias:**
- Hero background (1920x1080px)
- 4 mockups de portfolio (800x600px cada uno)
- Favicon SVG

## 🚢 Deploy en Netlify

1. Sube el proyecto a GitHub
2. Importa el repositorio en [Netlify](https://netlify.com)
3. Configura las variables de entorno (ver SETUP-PAGOS.md)
4. Netlify detectará automáticamente la configuración
5. Deploy automático

O usa Netlify CLI:

```bash
npm i -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

**IMPORTANTE:** No olvides configurar las 3 variables de entorno de Stripe en Netlify.

## ⚙️ Configuración

### Colores (globals.css)
```css
--color-bg: #0a0a0a;
--color-accent: #6366f1;
--color-text: #ffffff;
```

### Fuentes
- **Display:** Space Grotesk (headings)
- **Body:** Inter (texto)

### Breakpoints
- Mobile: <768px
- Tablet: 768px - 1024px
- Desktop: >1024px

## 📝 Personalización

### Cambiar información de contacto

Edita `src/components/Contact.jsx`:

```jsx
// Instagram
href="https://instagram.com/TU_USUARIO"

// WhatsApp
href="https://wa.me/34TUNUMERO"
```

### Modificar precios

Edita el array `plans` en `src/components/Pricing.jsx`

### Añadir/quitar servicios

Edita el array `services` en `src/components/Services.jsx`

## 🎯 SEO

El proyecto incluye meta tags básicos en `index.html`. Para mejorar SEO:

1. Añade meta description personalizada
2. Configura Open Graph tags
3. Añade schema.org structured data
4. Optimiza imágenes (WebP, lazy loading)

## 📱 Progressive Web App (Opcional)

Para convertir en PWA:

1. Instala `vite-plugin-pwa`
2. Crea `manifest.json`
3. Añade service worker
4. Configura iconos de app

## 🐛 Troubleshooting

### El servidor no inicia
```bash
rm -rf node_modules package-lock.json
npm install
```

### Las animaciones no funcionan
Verifica que Framer Motion esté instalado:
```bash
npm install framer-motion
```

### Build falla
Revisa la consola por errores de importación o sintaxis

## 📄 Licencia

Proyecto privado - © 2025 PageVolt

## 🤝 Contacto

Para soporte o consultas sobre el proyecto, contacta al desarrollador.

---

**Versión:** 1.0.0  
**Última actualización:** 2026-06-02
