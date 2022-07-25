const assert = require ('assert');
Feature('auth');
Before (({I}) => {
    I.amOnPage('/register');
});

Scenario('Могу зарегистрироваться, async({ I, registerPage }) => {
    await registerPage.register('TestName1', 'TestName2', '123@mail.com', 'male');
    const name = await currentPage.getProfileName();
    assert.deepStrictEqual(name, 'demo', 'Имя пользователя не демо');
});
