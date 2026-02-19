const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

// Configuración del navegador
const setupDriver = async () => {
  const options = new chrome.Options();
  options.addArguments('--headless'); // Ejecutar en modo headless para CI/CD
  options.addArguments('--no-sandbox');
  options.addArguments('--disable-dev-shm-usage');
  
  const driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();
  
  return driver;
};

describe('E-commerce Flow: Add to Cart and Checkout', () => {
  let driver;

  beforeAll(async () => {
    driver = await setupDriver();
    // Esperar a que el servidor esté listo
    await new Promise(resolve => setTimeout(resolve, 3000));
  }, 30000);

  afterAll(async () => {
    if (driver) {
      await driver.quit();
    }
  }, 30000);

  test('should add product to cart and proceed to checkout', async () => {
    // 1. Navegar a la página principal
    await driver.get('http://localhost:5173/');
    await driver.wait(until.elementLocated(By.css('.book-card')), 10000);
    await global.takeScreenshot(driver, 'pagina-principal');

    // 2. Verificar que hay productos en la página
    const productCards = await driver.findElements(By.css('.book-card'));
    expect(productCards.length).toBeGreaterThan(0);

    // 3. Hacer clic en el primer producto para ver los detalles
    await productCards[0].click();
    await driver.wait(until.elementLocated(By.css('.book-details__title')), 10000);
    await global.takeScreenshot(driver, 'pagina-detalles');

    // 4. Verificar que estamos en la página de detalles
    const title = await driver.findElement(By.css('.book-details__title'));
    const titleText = await title.getText();
    expect(titleText).toBeTruthy();

    // 5. Aumentar la cantidad a 2 unidades
    await driver.executeScript("window.scrollTo(0, 200);");
    const increaseButton = await driver.findElement(By.css('.book-details__qty-btn:last-child'));
    await increaseButton.click();
    
    // Verificar que la cantidad se actualizó
    const quantityDisplay = await driver.findElement(By.css('.book-details__qty-value'));
    const quantityText = await quantityDisplay.getText();
    expect(quantityText).toBe('2');

    // 6. Agregar al carrito
    const addToCartButton = await driver.findElement(By.css('.book-details__btn'));
    await addToCartButton.click();

    // 7. Verificar que el carrito se actualizó (icono de carrito)
    await driver.wait(until.elementLocated(By.css('.header__cart')), 5000);
    const cartIcon = await driver.findElement(By.css('.header__cart-badge'));
    const cartText = await cartIcon.getText();
    expect(cartText).toContain('2'); // Debería mostrar texto de carrito

    // 8. Abrir el carrito
    await cartIcon.click();
    await driver.wait(until.elementLocated(By.css('.cart__item')), 5000);

    // 9. Verificar que el producto está en el carrito
    const cartItems = await driver.findElements(By.css('.cart__item'));
    expect(cartItems.length).toBe(1);

    // 10. Verificar la cantidad en el carrito
    const cartItemQuantity = await driver.findElement(By.css('.cart__quantity-value'));
    const cartQuantityText = await cartItemQuantity.getText();
    expect(cartQuantityText).toBe('2');

    // 11. Proceder al checkout
    const checkoutButton = await driver.findElement(By.css('.checkout-btn'));
    await checkoutButton.click();

    // 12. Verificar que estamos en la página de checkout
    await driver.wait(until.elementLocated(By.css('.checkout-card')), 10000);
    await global.takeScreenshot(driver, 'pagina-checkout');

    // 13. Verificar que el producto está en el resumen
    const checkoutItems = await driver.findElements(By.css('.checkout-item'));
    expect(checkoutItems.length).toBe(1);

    const name = await driver.findElement(By.id('name'));

    // 3. Llenar el formulario de pago
    await driver.executeScript("arguments[0].scrollIntoView({block: 'center'});", name);
    await driver.sleep(800);
    await driver.findElement(By.id('name')).sendKeys('Juan Pérez');
    await driver.findElement(By.id('card')).sendKeys('4532015112830366'); // Tarjeta de prueba
    await driver.findElement(By.id('expiry')).sendKeys('12/30');
    await driver.findElement(By.id('cvv')).sendKeys('123');
    await driver.findElement(By.id('address')).sendKeys('Calle Principal 123, Ciudad, 12345');

    // 4. Hacer clic en confirmar pago
    const payButton = await driver.findElement(By.css('.checkout-submit'));
    await payButton.click();

    // 5. Verificar que el pago fue exitoso (alerta o redirección)
    await driver.wait(until.alertIsPresent(), 5000);
    const alert = await driver.switchTo().alert();
    const alertText = await alert.getText();
    expect(alertText).toContain('Pago realizado con éxito');
    await alert.accept();
    console.log('✅ Flujo de compra completado exitosamente');
  }, 60000);
});