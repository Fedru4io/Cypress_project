describe('Тесты приложения', () => {
    beforeEach(() => {     
      // Авторизуемся перед каждым тестом
      cy.login()
    })
    
    it('Переход на главную', () => {
      cy.get('[aria-label="На главную"]', { timeout: 10000 })
        .should('be.visible')
        .click()
        //cy.viewport(1200, 800)
        //cy.get ('rui-tile-menu').find ('div').eq ('1')
      //  cy.contains('Финансово-расчетные операции');
    })
  
  })




