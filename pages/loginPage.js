const { I } = inject();

module.exports = {
    fields: {
        email: '#Email',
        password: '#Password',
    },
    buttons: {
        login: 'body > div.master-wrapper-page > div.master-wrapper-content > div.master-wrapper-main > div.center-2 > div > div.page-body > div.customer-blocks > div.returning-wrapper > div.form-fields > form > div.buttons > input'
    },
    async login (email, password) {
        I.click(this.fields.email);
        I.fillField(this.fields.email, email);

        I.click(this.fields.password);
        I.fillField(this.fields.password, password);

        I.click(this.buttons.login);
    }
}
