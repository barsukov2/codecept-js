const assert = require ('assert');
Feature('auth');
Before (({I}) => {
    I.amOnPage('/login');
});

Scenario('Могу зайти зарегистрированным пользователем', async({ I, loginPage }) => {
    const email = 'QWEasd2@mail.com';
    const password = '123456';
    await loginPage.login(email , password);
    I.see(email);
});

Scenario('Не могу зайти без пароля', async({ I, loginPage }) => {
    const email = 'QWEasd2@mail.com';
    const password = '';
    await loginPage.login(email , password);
    const errorMessage = 'Login was unsuccessful. Please correct the errors and try again.\n' + 'The credentials provided are incorrect'
    I.see(errorMessage);
});
