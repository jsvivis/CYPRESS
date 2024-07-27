//Testes Práticos Aula 25/07/2024
// #04 - ATIVIDADE CYPRESS - Atividade Prática

/// <reference types='cypress' />

context('Pesquisas', ()=>{
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
         cy.visit('https://www.amazon.com.br/'); //endereço da aplicação
    })


it('cadastrar entradas', ()=>{
// fluxo manual enter
// mapear os elementos que vamos interagir
// descrever as interações com cypress
// adicionar as asserções que vamos precisar
// cy.get --> mapear um elemento

//entrada:
cy.get('#data-table tbody tr').should('have.length',0)

//Primeira pesquisa: - Livros>> Pesquisa Avançada de Livros
cy.get('[href="/Livros/b/?ie=UTF8&node=6740748011&ref_=nav_cs_books"]').click();
cy.get(':nth-child(2) > .bxc-grid__column > .bxc-grid__content > .bxc-grid__text > p')
cy.get('[href="/Pesquisa-de-Livros/b/?ie=UTF8&node=8169627011&ref_=sv_b_1"] > .nav-a-content').click(); 

//Segundo pesquisa: - Ofertas do Dia (Dispositivos Amazon e Acessórios)
cy.get('[href="/deals?ref_=nav_cs_gb"]').click();
cy.get('[data-testid="filter-bubble-deals-collection-devices"]').click();

//Terceira pesquisa: - TODOS(Menu)-> Ajuda-> Suporte a serviços digitais e dispositivos
cy.get('#nav-hamburger-menu').click();
cy.get('.hmenu-visible > :nth-child(33) > .hmenu-item').click();
cy.get(':nth-child(1) > .a-span4.a-span-last > .a-color-base > .a-box > .a-box-inner > .a-row > .a-span9 > .a-spacing-none').click();

//Quarta pesquisa: - Caixa de pesquisa>> Computadores>> Adicionar ao Carrinho >>(Carrinho)
cy.get('#twotabsearchtextbox').click();
cy.get('input[name="field-keywords"]').type('Computadores').click(); 
cy.get('#nav-search-submit-button').click();
/*cy.get('[data-asin="B0CGC5NJW7"] > .sg-col-inner > .s-widget-container > [data-component-type="s-impression-logger"] > .s-featured-result-item > [data-action="puis-card-container-declarative"] > .puis-card-container > .a-spacing-base > .a-spacing-small > [data-cy="title-recipe"] > .a-size-mini > .a-link-normal > .a-size-base-plus')*/
cy.get('#a-autoid-4-announce').click();
cy.get('#nav-cart-count').click();

//Pesquisa de Login e Tentativa de Cadastro
cy.get('#nav-hamburger-menu').click();
cy.get('.hmenu-visible > :nth-child(34) > .hmenu-item').click();
cy.get('#createAccountSubmit').click();
cy.get('#ap_customer_name').type('Maria').click(); 
cy.get('#ap_email').type('123@gmail.com').click(); 
cy.get('#ap_password').type('123456').click(); 
cy.get('#ap_password_check').type('123456').click(); 
cy.get('#continue').click();

})
});