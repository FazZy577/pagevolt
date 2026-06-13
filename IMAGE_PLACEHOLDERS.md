# PageVolt - Documentación de Placeholders de Imágenes

Este documento detalla todas las imágenes necesarias para completar el diseño de la web PageVolt. Cada placeholder incluye especificaciones técnicas y prompts para generar las imágenes con IA.

## 🎨 Paleta de Colores de Referencia
- **Fondo principal:** #0a0a0a (negro profundo)
- **Superficie:** #141414 (gris oscuro)
- **Acento:** #6366f1 (azul eléctrico/púrpura)
- **Texto:** #ffffff (blanco)

---

## 1. Hero Background (Hero.jsx)

**Ubicación:** `/public/images/hero-bg.jpg`

**Alternativas:**
- Background con grid/mesh sutil en tonos azules
- Gradiente radial con noise texture
- Efecto de aurora boreal minimalista

---

## 2. Portfolio Demo Cards (Portfolio.jsx)

Necesitas **4 mockups de sitios web**, uno para cada tipo de negocio:

### 2.1 Cafetería Moderna
**Ubicación:** `/public/images/demo-cafe.jpg`

**Especificaciones:**
- Tamaño: 800x600px
- Formato: JPG o WebP
- Peso: <200KB

**Descripción:**
Mockup de sitio web para cafetería mostrado en navegador o dispositivo móvil. Diseño limpio y moderno con tonos cálidos (naranja #ff9f2f). Debe verse profesional, con imágenes de café, menú visible, y botón de reserva destacado.

**Prompt para IA:**
```
modern website mockup for coffee shop, clean design, warm orange accents, shown in browser window or mobile device, professional UI/UX, menu visible, reservation button, contemporary cafe aesthetic, high quality render, 3D mockup --ar 4:3
```

### 2.2 Barbería Premium
**Ubicación:** `/public/images/demo-barber.jpg`

**Especificaciones:**
- Tamaño: 800x600px
- Formato: JPG o WebP
- Peso: <200KB

**Descripción:**
Mockup de sitio web para barbería con estética masculina y elegante. Tonos rojos oscuros (#dc2626), diseño con contraste alto, galería de cortes visible, sistema de citas online destacado.

**Prompt para IA:**
```
premium barbershop website mockup, dark red accents, masculine elegant design, shown in browser, appointment booking system visible, gallery of haircuts, professional barber aesthetic, modern UI, 3D device mockup --ar 4:3
```

### 2.3 Restaurante Local
**Ubicación:** `/public/images/demo-restaurant.jpg`

**Especificaciones:**
- Tamaño: 800x600px
- Formato: JPG o WebP
- Peso: <200KB

**Descripción:**
Mockup de sitio web para restaurante mediterráneo con estética elegante y cálida. Tonos dorados/tierra (#b48c50), diseño limpio tipo editorial, menú digital visible, sección de reservas.

**Prompt para IA:**
```
mediterranean restaurant website mockup, elegant warm design, golden brown accents, editorial style layout, digital menu visible, reservation section, sophisticated aesthetic, shown in browser, professional photography style --ar 4:3
```

### 2.4 Centro de Estética
**Ubicación:** `/public/images/demo-spa.jpg`

**Especificaciones:**
- Tamaño: 800x600px
- Formato: JPG o WebP
- Peso: <200KB

**Descripción:**
Mockup de sitio web para centro de estética/spa con diseño relajante y premium. Tonos púrpuras (#c084fc), estética zen y minimalista, lista de tratamientos, sistema de citas online.

**Prompt para IA:**
```
spa wellness center website mockup, purple gradient accents, zen minimalist design, treatment list visible, online booking system, premium aesthetic, calming atmosphere, shown in device mockup, professional UI --ar 4:3
```

---

## 3. Favicon

**Ubicación:** `/public/favicon.svg`

**Especificaciones:**
- Formato: SVG (vectorial)
- Tamaño: 32x32px (escalable)
- Colores: #6366f1 (acento) y #0a0a0a (fondo)

**Descripción:**
Icono simple y memorable que represente "PageVolt". Puede ser un rayo estilizado, una "P" con efecto eléctrico, o símbolo abstracto relacionado con electricidad/velocidad.

**Prompt para diseño:**
```
minimalist icon logo for "PageVolt", lightning bolt merged with letter P, electric theme, simple geometric shapes, suitable for favicon, purple blue color #6366f1, vector style, clean lines --style flat
```

---

## 4. Imágenes Opcionales (Recomendadas)

### 4.1 Imagen de Confianza/Trust Badge
**Ubicación:** `/public/images/trust-badge.png`
- Badge o elemento visual que refuerce confianza
- Podría ser: "Diseño garantizado", "48h de entrega", etc.

### 4.2 Mockup de Dispositivos
**Ubicación:** `/public/images/devices-mockup.png`
- Laptop + móvil mostrando una web responsive
- Útil para sección "demo" o hero alternativo

---

## 📋 Checklist de Implementación

Una vez tengas las imágenes:

1. **Hero Background:**
   - [ ] Guardar en `/public/images/hero-bg.jpg`
   - [ ] Añadir en Hero.jsx: `<img src="/images/hero-bg.jpg" className="hero-image-placeholder" />`
   - [ ] Optimizar con CSS: `object-fit: cover; opacity: 0.3;`

2. **Portfolio Demos:**
   - [ ] Guardar las 4 imágenes en `/public/images/`
   - [ ] Reemplazar divs `.portfolio-placeholder` en Portfolio.jsx con: `<img src="/images/demo-cafe.jpg" alt="Demo Cafetería" />`
   - [ ] Añadir CSS: `width: 100%; height: 100%; object-fit: cover;`

3. **Favicon:**
   - [ ] Guardar en `/public/favicon.svg`
   - [ ] Verificar que `index.html` tiene: `<link rel="icon" type="image/svg+xml" href="/favicon.svg">`

---

## 🎨 Herramientas Recomendadas

**Para generar imágenes con IA:**
- Midjourney (mejor calidad, requiere suscripción)
- DALL-E 3 (vía ChatGPT Plus)
- Stable Diffusion (gratuito, local)
- Leonardo.ai (gratuito con límites)

**Para crear mockups de webs:**
- Screely.com (gratuito, mockups de browser)
- Mockuper.net (mockups de dispositivos)
- Figma + plugins de mockups

**Para optimizar imágenes:**
- TinyPNG.com (compresión sin pérdida)
- Squoosh.app (conversión a WebP)
- ImageOptim (Mac, app gratuita)

---

## ⚡ Optimización

**Todas las imágenes deben:**
1. Estar optimizadas con compresión moderna (WebP preferido)
2. Tener versiones @2x para pantallas retina (opcional pero recomendado)
3. Cargarse de forma lazy donde sea posible
4. Incluir atributos `alt` descriptivos para accesibilidad

**Ejemplo de implementación optimizada:**
```jsx
<img 
  src="/images/hero-bg.jpg" 
  srcSet="/images/hero-bg@2x.jpg 2x"
  alt="Fondo abstracto con efectos de luz"
  loading="lazy"
  decoding="async"
/>
```

---

**Última actualización:** 2026-06-02
