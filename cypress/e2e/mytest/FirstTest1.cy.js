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

          // Ждем перехода на /home и полной загрузки страницы
    cy.url({ timeout: 40000 }).should('include', '/home')
    })
    
    it('Переход на главную', () => {
      cy.contains('h4',' Управление СНАБЖЕНИЕМ ',{matchCase:false}, { timeout: 10000 })
    })

  })




