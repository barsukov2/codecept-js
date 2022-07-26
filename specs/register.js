const assert = require ('assert');
Feature('auth');
Before (({I}) => {
    I.amOnPage('/register');
});

Scenario('Могу зарегистрироваться', async({ I, registerPage }) => {
    //faker не работает, пока разбираюсь
    const gender = 'male';
    const firstName = 'QWEasd2';
    const lastName = 'QWEasd2';
    const email = 'QWEasd2@mail.com';
    await registerPage.register(firstName , lastName, email, gender);
    I.see('Your registration completed');
    I.see(email);
});
