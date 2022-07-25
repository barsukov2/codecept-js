const { I } = inject();

module.exports = {
    navLinks :{
        register: '/register',
        logIn: '/login',
    },
    featuredProducts: {
        laptop: 'body > div.master-wrapper-page > div.master-wrapper-content > div.master-wrapper-main > div.center-3 > div > div > div.product-grid.home-page-product-grid > div:nth-child(3) > div > div.details > div.add-info > div.buttons > input,
    },
    async addFeaturedProductTocart (selector) {
        I.click(selector);
    }
    // insert your locators and methods here
}
