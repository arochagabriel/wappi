
export class profilePage {


    uploadUserImage() {
        cy
            .get('.file-upload > #image')
            .selectFile('cypress/fixtures/cat.jpg');
    }

    setFullUserInfo(userName, lastName){
        cy  
            .get('#name').clear().type(userName)
            .get('#lastName').clear().type(lastName)
            .get('#bornDate').clear().type('15/08/1986')
            .get('#country').select('Estados Unidos')
            .get('#save-profile').click()
            .get('.confirmation-modal-info').should('have.text', 'Tu información se guardó correctamente');
    }
}
