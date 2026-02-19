// Configuración global para las pruebas E2E
const fs = require('fs');
const path = require('path');

// Crear directorio para capturas de pantalla
const screenshotsDir = path.join(__dirname, 'screenshots');
if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir, { recursive: true });
}

// Configuración global para captura de pantallazos
global.takeScreenshot = async (driver, name) => {
  try {
    const screenshot = await driver.takeScreenshot();
    const filePath = path.join(screenshotsDir, `${name}.png`);
    fs.writeFileSync(filePath, screenshot, 'base64');
    console.log(`📸 Captura de pantalla guardada: ${filePath}`);
  } catch (error) {
    console.warn('⚠️  No se pudo tomar captura de pantalla:', error.message);
  }
};

// Configuración para reportes HTML
process.env.JEST_HTML_REPORTERS_NO_STDOUT = 'true';