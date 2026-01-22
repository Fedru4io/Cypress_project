// it ('By ID', ()=>{
//     cy.visit("http://facebook.com/?locale=ru_RU")
//     cy.get('#email')
// })

// it ('By class', ()=>{
//     cy.visit("https://by01-vm46.topsoft.local/login")
//     cy.get('.dx-texteditor-input')
// })

// it ('By tag', ()=>{
//     cy.visit("https://by01-vm46.topsoft.local/login")
//     cy.get('span')
// })

// it ('By tag value', ()=>{
//     cy.visit("https://by01-vm46.topsoft.local/login")
//     cy.get('[placeholder="Пароль"]')
// })

// it ('By different tag value', ()=>{
//     cy.visit("https://by01-vm46.topsoft.local/login")
//     cy.get('[placeholder="Пароль"][class="dx-texteditor-input"]')
// })

// it ('By different types', ()=>{
//     cy.visit("https://by01-vm46.topsoft.local/login")
//     cy.get('span[class="dx-checkbox-icon"]')
// })

// it.only ('By contains name', ()=>{
//     cy.visit("https://by01-vm46.topsoft.local/login")
//     cy.get('[class^="dx-checkbox"]') //результат - 3 элемента
// })


// it ('Авторизация', ()=>{
//         cy.visit("https://by01-vm46.topsoft.local/login")
//         cy.get('[placeholder="Имя пользователя"][class="dx-texteditor-input"]')
//         .type('bychenok')
//         cy.get('[placeholder="Пароль"][class="dx-texteditor-input"]')
//         .type('11111')
//         //Отправляем форму
//         cy.get('form').submit()
//         cy.get('[aria-label="ОК"]', { timeout: 10000 }) // Ждать до 10 секунд
//         .should('be.visible')
//         .click()
//         //Ждем исчезновения оверлея
//         cy.get('.overlay-form', { timeout: 10000 })
//         .should('not.exist') // Ждем пока оверлей исчезнет
//         cy.get('[aria-label="На главную"]', { timeout: 10000 }) // Ждать до 10 секунд
//         .should('be.visible')
//         .click()
//     })


// it('Авторизация', () => {
//     // Получаем данные из переменных окружения
//     const username = Cypress.env('username')
//     const password = Cypress.env('password')
    
//     cy.visit("https://by01-vm46.topsoft.local/login")
    
//     cy.get('[placeholder="Имя пользователя"][class="dx-texteditor-input"]')
//       .type(username)
    
//     cy.get('[placeholder="Пароль"][class="dx-texteditor-input"]')
//       .type(password, { log: false }) // Скрываем пароль в логах
    
//     cy.get('form').submit()
    
//     cy.get('[aria-label="ОК"]', { timeout: 10000 })
//       .should('be.visible')
//       .click()
    
//     cy.get('.overlay-form', { timeout: 10000 })
//       .should('not.exist')
    
//     cy.get('[aria-label="На главную"]', { timeout: 10000 })
//       .should('be.visible')
//       .click()
//   })


//Comment 1

describe('Тесты приложения', () => {
    beforeEach(() => {
      // Авторизуемся перед каждым тестом
      cy.login()
    })
    
    it('Переход на главную', () => {
      cy.get('[aria-label="На главную"]', { timeout: 10000 })
        .should('be.visible')
        .click()
    })
  })