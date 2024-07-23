
/// <reference types='cypress' />

context('RPVfinance Controls', ()=>{
    //hooks
    //trechos que executam antes e depois do teste
    //before --> antes do todos os testes
    //beforeEach --> antes de cada teste
    //after --> depois de todos os testes
    //afterEach --> depois de cada teste

    beforeEach(()=>{
         cy.visit('https://dev-finance.netlify.app/');
    })


it('cadastrar entradas', ()=>{
// fluxo manual enter
// mapear os elementos que vamos interagir
// descrever as interações com cypress
// adicionar as asserções que vamos precisar
// cy.get --> mapear um elemento

//endereço da aplicação
cy.get('#data-table tbody tr').should('have.length',0)
cy.get('#transaction .button').click(); //id + class
//cy.get('#transaction > button')
cy.get('#description').type('Presente Dia dos Pais')
cy.get('[name=amount]').type('250') //atributo
cy.get('[type=date]').type('2024-07-17') //atributo
// cy.get('#date');
cy.get('button').contains('Salvar').click(); //tipo
cy.get('#data-table tbody tr').should('have.length',1)

})

it('Cadastrar Saídas', ()=>{

cy.get('#data-table tbody tr').should('have.length',0)
cy.get('#transaction .button').click(); //id + class
cy.get('#description').type('Presente Dia dos Pais')
cy.get('[name=amount]').type('-180') //atributo
cy.get('[type=date]').type('2024-07-18') //atributo
cy.get('button').contains('Salvar').click(); //tipo
cy.get('#data-table tbody tr').should('have.length',1)

})
});