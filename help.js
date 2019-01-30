/*describe('Input form', () => {
    it('focuses input on load', () => {
        cy.visit('http://localhost:3030')

        cy.focused()
            .should('have.class', 'new-todo')
    })*/
// odpala test raz
/*
    it.only('accepts input', () => {
        const typedText = 'Buy Milk'
        cy.visit('http://localhost:3030')

        cy.get('.new-todo')
            .type(typedText)
            .should('have.value', typedText)
    })
})*/

// context służy do organizacji np. typów testów
// przy takich wywołaniach dostajemy liste eventów z strony
//dzięki temu wiemy lepiej co się dzieje


//wywala 404 , bo nie mam api
// context('Form submission', () => {
//     it.only('Adds a new todo on submit', () => {
//
//         cy.get('.new-todo')
//             .type('Buy eggs')
//             .type('{enter}')
//     })
// })

//tworzymy server i endpoint

/*
context('Form submission', () => {
    it.only('Adds a new todo on submit', () => {
        cy.server()
        cy.route('POST', '/api/todos', {
            name: 'Buy eggs',
            id: 1,
            isComplete: false
        })
        cy.get('.new-todo')
            .type('Buy eggs')
            .type('{enter}')
    })
})*/

//sprawdzanie "UI"

//czy mam 1 li i czy ma daną wartość
/*    cy.get('.todo-list li')
    .should('have.length' , 1)
    .and('contain', itemText) */

//force
/*
cy.get('.todo-list li')
    .first()
    .find('.destroy')
    .click({force: true})*/
//można dać invoke zamiast force

// cy.get('@list')
//     .first()
//     .find('.destroy')
//     .invoke('show')
//     .click()

//cypress my debuger
// list-items.spece.js
// linia 42 ustaw it.only
// można robić poprawki w consoli i puszczać test
// w console:
// todos
// todos = [todos[0], ...todos.slice(2)]


//uzyty jest u react ruter, co powoduje że np. active renderuje komponenty