//Testes Aula 24/07/2024
//Atividade Avaliativa - #03 - ATIVIDADE CYPRESS - 1

/// <reference types='cypress' />

context('Leitura Livraria', ()=>{
    //hooks
    //trechos que executam antes e depois do teste
    //before --> antes do todos os testes
    //beforeEach --> antes de cada teste
    //after --> depois de todos os testes
    //afterEach --> depois de cada teste

    beforeEach(()=>{
Cypress.on('uncaught:exception', (err, runnable) =>{
    return false
})
         cy.visit('https://leitura.com.br/'); //endereço da aplicação
    })


it('cadastrar entradas', ()=>{
// fluxo manual enter
// mapear os elementos que vamos interagir
// descrever as interações com cypress
// adicionar as asserções que vamos precisar
// cy.get --> mapear um elemento

//entrada:
cy.get('#data-table tbody tr').should('have.length',0)

cy.get('input[name="search"]').type('A Biblioteca da Meia Noite'); 
cy.get('#search > .form-control');
cy.get('.input-group-btn > .btn > .fa').click();
cy.get('[onclick^="cart.add"]').first().click({force:true});
cy.get('.alert > [href="https://leitura.com.br/a-biblioteca-da-meia-noite-L999-9786558380542"]')
cy.get('.right > .list-inline > :nth-child(3) > #cart > .btn-cart > .fa').click();
cy.get('.right > .list-inline > :nth-child(3) > #cart > .dropdown-menu > :nth-child(2) > div > p.text-right > a > strong').click();
cy.get('.pull-right > .btn').click();
cy.get('#button-account').click();
})
});