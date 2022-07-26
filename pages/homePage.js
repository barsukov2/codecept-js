const { I } = inject();

module.exports = {
    navLinks :{
        register: '/register',
        logIn: '/login',
        cart: '#topcartlink > a > span.cart-qty'
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
    }
}
