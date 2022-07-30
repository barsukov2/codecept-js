Feature('auth');

Before (({I, homePage}) => {
    I.amOnPage('/');
});

Scenario('После просмотра товара он появляется в блоке Recently viewed', async({ I, homePage }) => {
    var productTitle = await homePage.goToRandomFeaturedProduct();
    I.amOnPage('/');
    await I.see(productTitle, homePage.navLinks.recentlyViewedProductsBlock);
});
