# Guía de Pruebas E2E

Este proyecto incluye pruebas de extremo a extremo (E2E) utilizando Selenium WebDriver y Jest para validar el flujo completo de compra en la aplicación.

## Scripts de Pruebas Disponibles

### 1. Prueba Básica
```bash
npm test
```
Ejecuta las pruebas E2E en modo headless (sin interfaz gráfica).

### 2. Prueba con Visualización en Tiempo Real
```bash
npm run test:ui
```
Ejecuta las pruebas mostrando resultados detallados en consola.

### 3. Prueba en Modo Observación
```bash
npm run test:watch
```
Ejecuta las pruebas en modo observación, re-ejecutando automáticamente cuando se detecten cambios en los archivos de prueba.

### 4. Generar Reporte HTML
```bash
npm run test:report
```
Ejecuta las pruebas y genera un reporte HTML detallado en `./test-reports/e2e-report.html`.

## Flujo de Prueba

Las pruebas E2E validan los siguientes escenarios:

### Escenario 1: Agregar producto al carrito y proceder al checkout
1. **Navegación**: Accede a la página principal
2. **Selección de producto**: Hace clic en el primer producto disponible
3. **Personalización**: Aumenta la cantidad a 2 unidades
4. **Agregado al carrito**: Agrega el producto al carrito
5. **Verificación del carrito**: Confirma que el producto y la cantidad son correctos
6. **Proceso de checkout**: Procede al resumen de pago

### Escenario 2: Completar checkout con información de pago válida
1. **Acceso al checkout**: Navega directamente a la página de checkout
2. **Formulario de pago**: Llena todos los campos con datos de prueba válidos
3. **Proceso de pago**: Confirma el pago
4. **Validación de éxito**: Verifica la alerta de pago exitoso
5. **Redirección**: Confirma la redirección a la página principal

## Capturas de Pantalla

Durante la ejecución de las pruebas, se generan capturas de pantalla en el directorio `tests/screenshots/`:

- `pagina-principal.png`: Captura de la página principal con productos
- `pagina-detalles.png`: Captura de la página de detalles del producto
- `pagina-checkout.png`: Captura de la página de checkout

## Reportes Generados

### Reporte HTML
Ubicación: `./test-reports/e2e-report.html`
- Resultados detallados de las pruebas
- Capturas de pantalla asociadas a cada paso
- Información de errores y tiempos de ejecución

### Capturas de Pantalla
Ubicación: `tests/screenshots/`
- Imágenes PNG de cada paso crítico de la prueba
- Útiles para debugging y documentación

## Configuración del Navegador

Las pruebas se ejecutan con Chrome en modo headless por defecto para CI/CD. Para ejecutar con interfaz gráfica:

```javascript
// En tests/e2e/cart-checkout.test.js, modificar setupDriver():
const options = new chrome.Options();
// options.addArguments('--headless'); // Comentar esta línea para ver el navegador
```

## Personalización de Pruebas

### Cambiar URL del Servidor
```javascript
// En tests/e2e/cart-checkout.test.js
await driver.get('http://localhost:5173/'); // Cambiar según sea necesario
```

### Modificar Datos de Prueba
```javascript
// En el test de checkout
await driver.findElement(By.id('name')).sendKeys('Nombre Personalizado');
await driver.findElement(By.id('card')).sendKeys('Número de Tarjeta');
// ... etc
```

## Integración con CI/CD

Las pruebas están configuradas para ejecutarse en entornos de integración continua:

1. **Modo headless**: No requiere interfaz gráfica
2. **Reportes HTML**: Fáciles de integrar en pipelines
3. **Capturas de pantalla**: Útiles para debugging en CI
4. **Timeouts configurables**: Adecuados para entornos con diferentes velocidades

## Solución de Problemas

### Errores Comunes

1. **Timeouts**: Aumentar los tiempos de espera en las pruebas
2. **Elementos no encontrados**: Verificar selectores CSS y estructura del DOM
3. **Problemas de scroll**: Ajustar el scrolling para elementos ocultos por headers

### Depuración

1. **Ver capturas de pantalla**: Revisar el directorio `tests/screenshots/`
2. **Reporte HTML**: Consultar `./test-reports/e2e-report.html`
3. **Logs de consola**: Ejecutar con `npm run test:ui` para más detalles

## Mejores Prácticas

1. **Nombres descriptivos**: Usar nombres de tests que describan claramente el escenario
2. **Capturas estratégicas**: Tomar screenshots en pasos críticos
3. **Datos consistentes**: Usar datos de prueba consistentes y válidos
4. **Limpieza**: Asegurar que cada test sea independiente y no dependa de otros