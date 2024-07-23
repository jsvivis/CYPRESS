//Testes Aula 22/07/2024
//Atividade Avaliativa - #02 - ATIVIDADE CYPRESS - 1

/// <reference types='cypress' />

context('RPVfinance Controls', ()=>{
    //hooks
    //trechos que executam antes e depois do teste
    //before --> antes do todos os testes
    //beforeEach --> antes de cada teste
    //after --> depois de todos os testes
    //afterEach --> depois de cada teste

    beforeEach(()=>{
         cy.visit('https://dev-finance.netlify.app/'); //endereço da aplicação
    })


it('cadastrar entradas', ()=>{
// fluxo manual enter
// mapear os elementos que vamos interagir
// descrever as interações com cypress
// adicionar as asserções que vamos precisar
// cy.get --> mapear um elemento

//primeira entrada:
cy.get('#data-table tbody tr').should('have.length',0)
cy.get('#transaction .button').click(); //id + class
//cy.get('#transaction > button')
cy.get('#description').type('Presente Dia dos Pais')
cy.get('[name=amount]').type('250') //atributo
cy.get('[type=date]').type('2024-07-17') //atributo
// cy.get('#date');
cy.get('button').contains('Salvar').click(); //tipo
cy.get('#data-table tbody tr').should('have.length',1)

//segunda entrada:
cy.get('#transaction .button').click(); //id + class
cy.get('#description').type('Minhas Compras')
cy.get('[name=amount]').type('500') //atributo
cy.get('[type=date]').type('2024-07-22') //atributo
cy.get('button').contains('Salvar').click(); //tipo
cy.get('#data-table tbody tr').should('have.length',2)

cy.get('[data-index="0"] > :nth-child(4) > img').click() // removendo lançamentos
})


it.only('Cadastrar Saídas', ()=>{

//primeira saida:
cy.get('#transaction .button').click(); //id + class
cy.get('#description').type('Presente Dia dos Pais')
cy.get('[name=amount]').type('-200') //atributo
cy.get('[type=date]').type('2024-07-18') //atributo
cy.get('button').contains('Salvar').click(); //tipo
cy.get('#data-table tbody tr').should('have.length',1)

//segunda saida:
cy.get('#transaction .button').click(); //id + class
cy.get('#description').type('Minhas Compras')
cy.get('[name=amount]').type('-250') //atributo
cy.get('[type=date]').type('2024-07-18') //atributo
cy.get('button').contains('Salvar').click(); //tipo
cy.get('#data-table tbody tr').should('have.length',2)

cy.get('[data-index="1"] > :nth-child(4) > img').click() // removendo lançamentos
})
});