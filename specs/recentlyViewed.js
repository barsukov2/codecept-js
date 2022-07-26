const assert = require ('assert');
Feature('auth');
Before (({I, homePage}) => {
    I.amOnPage('/');
    I.click(homePage.featuredProducts.laptop.imgSelector);
    I.amOnPage('/');
});

Scenario('После просмотра товара он появляется в блоке Recently viewed', async({ I, homePage }) => {
    I.see(homePage.featuredProducts.laptop.title, homePage.navLinks.recentlyViewedProductsBlock);
});

