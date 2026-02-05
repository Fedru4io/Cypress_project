// Игнорировать ошибки ResizeObserver
Cypress.on('uncaught:exception', (err, runnable) => {
  // Возвращаем false, чтобы Cypress игнорировал эту ошибку
  if (err.message.includes('ResizeObserver')) {
    return false
  }
  // Для всех остальных ошибок - обычное поведение
  return true
})

describe('Тесты приложения', () => {
    beforeEach(() => {     
      // Авторизуемся перед каждым тестом
      cy.login()
    })
    
    it('SHOULD', () => {

    })
  

  
  })




