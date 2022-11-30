export class loginPage {

    landing() {
        cy
            .visit('https://automation-wappi.vercel.app/');
    }

    setUserCredentials(userName,passWord) {
        cy
            .get('#username').type(userName)
            .get('#password').type(passWord)
            .get('#button-login').click();
    }
}