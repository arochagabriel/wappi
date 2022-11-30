export class homePage {

    clkProfile() {
        cy
            .get(':nth-child(4) > .nav-bar-link')
            .click();
    }

    clkHome() {
        cy
            .get(':nth-child(1) > .nav-bar-link')
            .click();
    }

    clkFirstItem() {
        cy
            .get('#offer-0 > .align-center > .button').click();
    }

    clkObtainAndApplyCoupon() {
        // Create the coupon
        cy.get('#welcome-coupon').click();
        cy.get('#coupon-modal > .modal-content > .close').click();

        // save the coupon code
        cy.get('#coupon-0 > :nth-child(1)').invoke('text').then(couponCode => {
           // Browse to home
            cy.get(':nth-child(1) > .nav-bar-link').click();

            //Add first item and type the coupon
            cy.get('#offer-0 > .align-center > .button').click();
            cy.get('#coupon').type(couponCode);

            // check if the values are displayed
            cy
                .get('.offer-description').should('be.visible').as('productName')
                .get('.offer-price').should('be.visible').as('productPrice')
                .get('.offer-info > :nth-child(2)').should('be.visible').as('deliveryPrice')
                .get('.offer-info > :nth-child(3)').should('be.visible').as('storeName')
                .get('.offer-info > :nth-child(4)').should('be.visible').as('storeLocation');

                // comfirm the first order
            cy
                .get('#order-confirm').click()
                .get('.confirmation-modal-info')
                .should('have.text', 'Tu pedido ha sido confirmado, te mantendremos informado ante nuevas novedades');
            cy.get('#coupon-modal > .modal-content > .close').click({ force: true });


            // Browse to home
            cy.get(':nth-child(1) > .nav-bar-link').click();
            
            //Add the second item and type the coupon
            cy.get('#offer-1 > .align-center > .button').click();
            cy.get('#coupon').type(couponCode);

            // check if the values are displayed
            cy
                .get('.offer-description').should('be.visible').as('productName')
                .get('.offer-price').should('be.visible').as('productPrice')
                .get('.offer-info > :nth-child(2)').should('be.visible').as('deliveryPrice')
                .get('.offer-info > :nth-child(3)').should('be.visible').as('storeName')
                .get('.offer-info > :nth-child(4)').should('be.visible').as('storeLocation');

            // comfirm the second order
            cy
                .get('#order-confirm').click()
                .get('.confirmation-modal-info')
                .should('have.text', 'Tu pedido ha sido confirmado, te mantendremos informado ante nuevas novedades')
                .get('#coupon-modal > .modal-content > .close').click({ force: true });
        })

    }

    clkConfirmASingleOrder() {
        cy
            .get('.offer-description').should('be.visible').as('productName')
            .get('.offer-price').should('be.visible').as('productPrice')
            .get('.offer-info > :nth-child(2)').should('be.visible').as('deliveryPrice')
            .get('.offer-info > :nth-child(3)').should('be.visible').as('storeName')
            .get('.offer-info > :nth-child(4)').should('be.visible').as('storeLocation');

        cy
            .get('#order-confirm').click()
            .get('.confirmation-modal-info')
            .should('have.text', 'Tu pedido ha sido confirmado, te mantendremos informado ante nuevas novedades');

        cy
            .get('#coupon-modal > .modal-content > .close').click({ force: true });

    }


    clkConfirmMyOrders() {
        cy
            .get(':nth-child(3) > .nav-bar-link').click();

        cy
            .get('[id^="order-"]').should('be.visible')
    }
}