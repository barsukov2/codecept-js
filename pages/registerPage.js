const { I } = inject();

module.exports = {
    fields: {
        firstName: '#FirstName',
        lastName: '#FirstName',
        email: '#Email',
        password: '#Password',
        confirmPassword: '#ConfirmPassword',
        maleGender: '#gender-male',
        femaleGender: '#gender-female'
    },
    buttons: {
        register: '#register-button'
    },
    async register (firstName, lastName, email, password, gender) {
        I.click(this.fields.firstName);
        I.fillField(this.fields.firstName, firstName);

        I.click(this.fields.lastName);
        I.fillField(this.fields.lastName, lastName);

        I.click(this.fields.email);
        I.fillField(this.fields.email, email);

        I.click(this.fields.password);
        I.fillField(this.fields.password, password);

        I.click(this.fields.confirmPassword);
        I.fillField(this.fields.confirmPassword, password);

        if (gender == 'male')  {
            I.checkOption(this.fields.maleGender));
        } else {
            I.checkOption(this.fields.femaleGender));
        }

        I.click(this.buttons.register);
    }
}
