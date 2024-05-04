Cypress.Commands.add('filMandatoryFields', function(){
    cy.get('input[name=name]').type('edauardo');
    cy.get('input[name=cpf]').type('00000014141');
    cy.get('input[name=email]').type('EDU@GMAIL.COM');
    cy.get('input[name=whatsapp]').type('6198523654');
    cy.get('input[name=postalcode]').type('73357005');
    cy.get('input[value="Buscar CEP"]').click();
    cy.get('input[name=address-number]').type('15');
    cy.get('input[name=address-details]').type('apt 01');
})

Cypress.Commands.add('filMandatoryFields2', function(){
    cy.get('input[name=name]').type('edauardo');
    cy.get('input[name=cpf]').type('000000141ed');
    cy.get('input[name=email]').type('EDU@GMAIL.COM');
    cy.get('input[name=whatsapp]').type('6198523654');
    cy.get('input[name=postalcode]').type('73357005');
    cy.get('input[value="Buscar CEP"]').click();
    cy.get('input[name=address-number]').type('15');
    cy.get('input[name=address-details]').type('apt 01');
})


