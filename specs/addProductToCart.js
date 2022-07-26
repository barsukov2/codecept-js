const assert = require ('assert');
Feature('auth');
Before (({I}) => {
    I.amOnPage('/');
});

Scenario('Могу lобавить в корзину рекомендуемый продукт - лэптоп', async({ I, homePage }) => {
    await homePage.addFeaturedProductTocart(homePage.featuredProducts.laptop.selector);
    I.click(homePage.navLinks.cart);
    I.see(homePage.featuredProducts.laptop.title);
});

