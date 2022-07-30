Feature('auth');
var productTitle = '';
Before (({I, homePage}) => {
    I.amOnPage('/');
    productTitle = homePage.goToRandomFeaturedProduct();
    I.amOnPage('/');
});

Scenario('После просмотра товара он появляется в блоке Recently viewed', async({ I, homePage }) => {
    homePage.seeProductInRecentlyViewed(productTitle);
});
