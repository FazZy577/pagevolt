# TERRA Hero Section - Guía de Implementación

## 📁 Archivo creado
`terra-hero.html` - Hero section interactiva completa con animaciones GSAP

## 🎨 Estructura de Capas (Layer Sandwich)

El efecto visual se logra mediante 5 capas superpuestas con z-index específico:

1. **Capa 1 (z-index: 1)** - Fondo cielo → `bg-cielo.png`
2. **Capa 2 (z-index: 2)** - Texto gigante "TERRA" 
3. **Capa 3 (z-index: 3)** - Casa primer plano → `casa-oscura.png`
4. **Capa 4 (z-index: 4)** - Luces ventanas → `luces-ventanas.png`
5. **Capa 5 (z-index: 5)** - UI flotante (tooltips y textos)

## 🎬 Coreografía de Animación

### Fase 1 (0-2s): Aparición de Marca
- Fondo hace zoom out suave (scale 1.1 → 1)
- Texto "TERRA" aparece desde abajo con fade in
- Easing: `power3.out`

### Fase 2 (2-3.5s): Encendido de Luces
- Capa de luces aumenta opacidad (0 → 1)
- Simulación de ventanas encendiéndose
- Easing: `power2.inOut`

### Fase 3 (3-5s): Despliegue de UI
- Puntos blancos aparecen (scale 0 → 1)
- Líneas conectoras se dibujan
- Textos técnicos hacen fade in
- Header superior aparece al final

## 🖼️ Cómo exportar tus PNG desde Photoshop

### Para la Casa Oscura (`casa-oscura.png`):
1. Recorta SOLO la casa y la colina
2. Borra completamente el cielo (fondo transparente)
3. Exporta como PNG-24 con transparencia
4. Dimensiones recomendadas: 1920x1080px mínimo

### Para las Luces (`luces-ventanas.png`):
1. Crea una capa nueva con SOLO las ventanas iluminadas
2. Usa color cálido (naranja/amarillo: #ffb366)
3. Todo lo demás debe ser transparente
4. Exporta como PNG-24 con transparencia
5. Las dimensiones deben coincidir exactamente con `casa-oscura.png`

### Para el Cielo (`bg-cielo.png`):
1. Puede ser JPG o PNG (no necesita transparencia)
2. Dimensiones: 1920x1080px mínimo
3. Preferiblemente cielo nocturno/tormentoso oscuro

## ⚙️ Variables CSS Personalizables

En el archivo encontrarás estas variables que puedes ajustar:

```css
:root {
    --color-bg-dark: #0a0a0a;
    --color-text-primary: #ffffff;
    --color-text-secondary: rgba(255, 255, 255, 0.7);
    --color-accent: #f5f5f5;
    --color-warm-light: #ffb366;
    --font-display: 'Inter', sans-serif;
    --font-mono: 'Roboto Mono', monospace;
}
```

## 🚀 Cómo usar el archivo

1. Abre `terra-hero.html` en tu navegador
2. La animación se ejecuta automáticamente al cargar
3. Las rutas de las imágenes ya están configuradas para tu estructura:
   - `./public/images/bg-cielo.png`
   - `./public/images/casa-oscura.png`
   - `./public/images/luces-ventanas.png`

## 🔧 Ajustes opcionales

### Cambiar velocidad de animación:
Edita los valores `duration` en el script GSAP (líneas 422-469)

### Modificar tamaño del texto TERRA:
Cambia `font-size: 15vw` en `.brand-text-layer h1` (línea 81)

### Ajustar posición de tooltips:
Modifica los valores `left`, `right`, `top` de `.data-location`, `.data-architecture`, `.data-amenities` (líneas 192-237)

## ✅ Checklist de integración

- [ ] Colocar imágenes PNG en `./public/images/`
- [ ] Verificar que la transparencia de los PNG funcione
- [ ] Probar en diferentes navegadores (Chrome, Firefox, Safari)
- [ ] Verificar en mobile (responsive incluido)
- [ ] Ajustar timings de animación si es necesario

## 📱 Responsive

El diseño incluye breakpoint en 1024px que:
- Reorganiza los tooltips en vertical (mobile)
- Ajusta el tamaño del texto TERRA
- Optimiza espaciados para pantallas pequeñas