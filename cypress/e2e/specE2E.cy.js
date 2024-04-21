/// <reference types="Cypress" />

describe('test E2E Realizando compra de produto com sucesso', function() {
  beforeEach(function() {
    cy.visit("https://buger-eats.vercel.app/deliver")
  })
  it('Deve poder cadastrar um novo entregador com sucesso', () => {
    //verfica se realmente está na pagina de cadastro
    cy.get('h1').should('be.visible').and('contain.text', 'Cadastre-se para  fazer entregas'); 

     //realiza todo preenchimento dos campos obrigatórios
    cy.filMandatoryFields()

    //Validação dos campos preenchidos automaticamente
    cy.validationofmandatoryfields()

    //Seleciona documento, valida se documento está sendo realmente selecionado
    cy.get('input[type="file"]').invoke('attr', 'style', 'display: block').selectFile('./cypress/fixtures/Mr_bean.png')
    .should(function($input) {
      expect($input[0].files[0].name).to.equal('Mr_bean.png')
    })
    //Submetendo formulário de cadastro e validadno mensagem de cadastro com sucesso
    cy.get('button[type=submit]').click();
    cy.get('.swal2-html-container').should('be.visible').and('contain.text', 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.');
    cy.screenshot('cadastro_entregador_sucesso');
    });
  })

