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
        const featuredProductLocators = locate('h2')
            .withAttr({ class: 'product-title' });
        const productLinks = await I.grabHTMLFromAll(featuredProductLocators.value);

        const randomProductLink = productLinks[Math.floor(Math.random()*productLinks.length)];
        const randomProductTitle = randomProductLink.replace(/<[^>]+>/g, '').trim();

        const productLink = randomProductLink.replace(/(<[^>]+=")|(">[^>]+.)|(\r\n|\n|\r)/g, '').trim();
        I.amOnPage(productLink);

        return randomProductTitle;
    },
}
