const assert = require ('assert');
Feature('auth');
Before (({I}) => {
    I.amOnPage('/register');
});

Scenario('Могу зарегистрироваться', async({ I, registerPage }) => {
    //faker не работает, пока разбираюсь
    const gender = 'male';
    const firstName = 'QWEasd3';
    const lastName = 'QWEasd3';
    const email = 'QWEasd3@mail.com';
    const password = '123456';
    await registerPage.register(firstName , lastName, email, password, gender);
    I.see('Your registration completed');
    I.see(email);
});
