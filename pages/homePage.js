const { I } = inject();

module.exports = {
    navLinks :{
        register: '/register',
        logIn: '/login',
        cart: '#topcartlink > a > span.cart-qty',
        recentlyViewedProductsBlock: 'body > div.master-wrapper-page > div.master-wrapper-content > div.master-wrapper-main > div.rightside-3 > div.block.block-recently-viewed-products'
    },
    featuredProducts: {
        laptop: {
            addToCartSelector: 'body > div.master-wrapper-page > div.master-wrapper-content > div.master-wrapper-main > div.center-3 > div > div > div.product-grid.home-page-product-grid > div:nth-child(3) > div > div.details > div.add-info > div.buttons > input',
            title: '14.1-inch Laptop',
            imgSelector: 'body > div.master-wrapper-page > div.master-wrapper-content > div.master-wrapper-main > div.center-3 > div > div > div.product-grid.home-page-product-grid > div:nth-child(3) > div > div.picture > a > img'
        }
    },
    async addFeaturedProductTocart (selector) {
        I.click(selector);
    },

    async goToRandomFeaturedProduct () {
        var featuredProductLocators = locate('h2')
            .withAttr({ class: 'product-title' });
        var productLinks = await I.grabHTMLFromAll(featuredProductLocators.value);

        var randomProductLink = productLinks[Math.floor(Math.random()*productLinks.length)];
        var randomProductTitle = randomProductLink.replace(/<[^>]+>/g, '').trim();

        var productLink = randomProductLink.replace(/(<[^>]+=")|(">[^>]+.)/g, '');
        productLink = productLink.replace(/(\r\n|\n|\r)/gm, "").trim();
        I.amOnPage(productLink);

        return randomProductTitle;
    },

    async seeProductInRecentlyViewed (productTitle) {
        var recentlyViewedProductsBlock = locate('div')
            .withAttr({ class: 'block block-recently-viewed-products' });
        I.see(productTitle, recentlyViewedProductsBlock.value);
    }
}
