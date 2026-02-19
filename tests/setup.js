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
    // Configurar el tamaño de la ventana para captura completa
    await driver.manage().window().setRect({ width: 1920, height: 1080 });
    
    // Tomar captura de pantalla completa
    const screenshot = await driver.takeScreenshot();
    const filePath = path.join(screenshotsDir, `${name}.png`);
    fs.writeFileSync(filePath, screenshot, 'base64');
    console.log(`📸 Captura de pantalla completa guardada: ${filePath}`);
  } catch (error) {
    console.warn('⚠️  No se pudo tomar captura de pantalla:', error.message);
  }
};

// Configuración global para captura de pantallazos full page
global.takeFullPageScreenshot = async (driver, name) => {
  try {
    // Configurar el tamaño de la ventana para captura completa
    await driver.manage().window().setRect({ width: 1920, height: 1080 });
    
    // Tomar captura de pantalla completa de la página
    const screenshot = await driver.takeScreenshot();
    const filePath = path.join(screenshotsDir, `${name}-fullpage.png`);
    fs.writeFileSync(filePath, screenshot, 'base64');
    console.log(`📸 Captura de pantalla full page guardada: ${filePath}`);
  } catch (error) {
    console.warn('⚠️  No se pudo tomar captura de pantalla full page:', error.message);
  }
};

// Configuración para reportes HTML
process.env.JEST_HTML_REPORTERS_NO_STDOUT = 'true';