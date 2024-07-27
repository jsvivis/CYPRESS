//Testes Práticos Aula 25/07/2024

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

//entrada:
cy.get('#data-table tbody tr').should('have.length',0)
cy.get('#transaction .button').click(); //id + class
//cy.get('#transaction > button')
cy.get('#description').type('Presente Dia dos Pais')
cy.get('[name=amount]').type('250') //atributo
cy.get('[type=date]').type('2024-07-17') //atributo
// cy.get('#date');
cy.get('button').contains('Salvar').click(); //tipo
cy.get('#data-table tbody tr').should('have.length',1)

it.only('Cadastrar Saídas', ()=>{

//saida:
cy.get('#transaction .button').click(); //id + class
cy.get('#description').type('Presente Dia dos Pais')
cy.get('[name=amount]').type('-200') //atributo
cy.get('[type=date]').type('2024-07-18') //atributo
cy.get('button').contains('Salvar').click(); //tipo
cy.get('#data-table tbody tr').should('have.length',1)
});
})


it('Remover entradas e saídas', () =>{
        //variáveis âncoras
    const entrada = 'Salário do Mês'
    const saida = 'Presente Dia dos Pais'

    cy.get('#transaction .button').click(); //id + class
    cy.get('#description').type(entrada)
    cy.get('[name=amount]').type('250') //atributo
    cy.get('[type=date]').type('2024-07-17') //atributo
    cy.get('button').contains('Salvar').click(); //tipo

    cy.get('#transaction .button').click(); //id + class
    cy.get('#description').type(saida)
    cy.get('[name=amount]').type('-50') //atributo
    cy.get('[type=date]').type('2024-07-18') //atributo
    cy.get('button').contains('Salvar').click(); //tipo
    
    //busca o elemento pai e avança para um td img atributo
    cy.get('td.description').contains(saida).parent().find('img[onclick*=remove]').click();

   
});


});