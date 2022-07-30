Feature('auth');
var productTitle = '';
Before (({I, homePage}) => {
    I.amOnPage('/');
    productTitle = homePage.goToRandomFeaturedProduct();
});

Scenario('После просмотра товара он появляется в блоке Recently viewed', async({ I, homePage }) => {
    I.amOnPage('/');
    homePage.seeProductInRecentlyViewed(productTitle);
});
