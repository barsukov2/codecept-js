const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

exports.config = {
  tests: './specs/*.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://demowebshop.tricentis.com/',
      show: false,
      browser: 'chromium',
      video: true,
    },
    REST: {
    },
    JSONResponse: {}
  },
  include: {
    I: './steps_file.js',
    cartPage: './pages/cartPage.js',
    homePage: './pages/homePage.js',
    loginPage: './pages/loginPage.js',
    registerPage: './pages/registerPage.js',
  },
  "plugins": {
    "allure": {}
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptJS'
}
