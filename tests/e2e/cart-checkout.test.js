const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

// Helper para hacer scroll a un elemento y esperar
const scrollToElement = async (driver, element) => {
  await driver.executeScript(
    "arguments[0].scrollIntoView({block: 'center', behavior: 'smooth'});",
    element
  );
  await driver.sleep(500);
};

// Configuración del navegador
const setupDriver = async () => {
  const options = new chrome.Options();
  options.addArguments('--headless');
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
    await global.takeFullPageScreenshot(driver, 'pagina-principal');

    // 2. Verificar que hay productos en la página
    const productCards = await driver.findElements(By.css('.book-card'));
    expect(productCards.length).toBeGreaterThan(0);

    // 3. Hacer clic en el primer producto para ver los detalles
    await scrollToElement(driver, productCards[0]);
    await productCards[0].click();
    await driver.wait(until.elementLocated(By.css('.book-details__title')), 10000);
    await global.takeFullPageScreenshot(driver, 'pagina-detalles');

    // 4. Verificar que estamos en la página de detalles
    const title = await driver.findElement(By.css('.book-details__title'));
    await scrollToElement(driver, title);
    const titleText = await title.getText();
    expect(titleText).toBeTruthy();

    // 5. Aumentar la cantidad a 2 unidades
    const increaseButton = await driver.findElement(
      By.css('.book-details__qty-btn:last-child')
    );
    await scrollToElement(driver, increaseButton);
    await increaseButton.click();

    // Verificar que la cantidad se actualizó
    const quantityDisplay = await driver.findElement(
      By.css('.book-details__qty-value')
    );
    await scrollToElement(driver, quantityDisplay);
    const quantityText = await quantityDisplay.getText();
    expect(quantityText).toBe('2');

    // 6. Agregar al carrito
    const addToCartButton = await driver.findElement(By.css('.book-details__btn'));
    await scrollToElement(driver, addToCartButton);
    await addToCartButton.click();

    // 7. Verificar que el carrito se actualizó
    await driver.wait(until.elementLocated(By.css('.header__cart')), 5000);
    const cartIcon = await driver.findElement(By.css('.header__cart-badge'));
    await scrollToElement(driver, cartIcon);
    const cartText = await cartIcon.getText();
    expect(cartText).toContain('2');

    // 8. Abrir el carrito
    await cartIcon.click();
    await driver.wait(until.elementLocated(By.css('.cart__item')), 5000);

    // 9. Verificar que el producto está en el carrito
    const cartItems = await driver.findElements(By.css('.cart__item'));
    await scrollToElement(driver, cartItems[0]);
    expect(cartItems.length).toBe(1);

    // 10. Verificar la cantidad en el carrito
    const cartItemQuantity = await driver.findElement(
      By.css('.cart__quantity-value')
    );
    await scrollToElement(driver, cartItemQuantity);
    const cartQuantityText = await cartItemQuantity.getText();
    expect(cartQuantityText).toBe('2');

    // 11. Proceder al checkout
    const checkoutButton = await driver.findElement(By.css('.checkout-btn'));
    await scrollToElement(driver, checkoutButton);
    await checkoutButton.click();

    // 12. Verificar que estamos en la página de checkout
    await driver.wait(until.elementLocated(By.css('.checkout-card')), 10000);
    await global.takeFullPageScreenshot(driver, 'pagina-checkout');

    // 13. Verificar que el producto está en el resumen
    const checkoutItems = await driver.findElements(By.css('.checkout-item'));
    await scrollToElement(driver, checkoutItems[0]);
    expect(checkoutItems.length).toBe(1);

    // 14. Llenar el formulario de pago
    const nameInput = await driver.findElement(By.id('name'));
    await scrollToElement(driver, nameInput);
    await nameInput.sendKeys('Juan Pérez');

    const cardInput = await driver.findElement(By.id('card'));
    await scrollToElement(driver, cardInput);
    await cardInput.sendKeys('4532015112830366');

    const expiryInput = await driver.findElement(By.id('expiry'));
    await scrollToElement(driver, expiryInput);
    await expiryInput.sendKeys('12/30');

    const cvvInput = await driver.findElement(By.id('cvv'));
    await scrollToElement(driver, cvvInput);
    await cvvInput.sendKeys('123');

    const addressInput = await driver.findElement(By.id('address'));
    await scrollToElement(driver, addressInput);
    await addressInput.sendKeys('Calle Principal 123, Ciudad, 12345');

    // 15. Hacer clic en confirmar pago
    const payButton = await driver.findElement(By.css('.checkout-submit'));
    await scrollToElement(driver, payButton);
    await payButton.click();
    await global.takeFullPageScreenshot(driver, 'checkout-lleno');

    // 16. Verificar que el pago fue exitoso
    await driver.wait(until.alertIsPresent(), 5000);
    const alert = await driver.switchTo().alert();
    const alertText = await alert.getText();
    expect(alertText).toContain('Pago realizado con éxito');
    await alert.accept();
    await global.takeFullPageScreenshot(driver, 'pago-exitoso');

    console.log('Flujo de compra completado exitosamente');
  }, 60000);
});