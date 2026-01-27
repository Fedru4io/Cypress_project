Cypress.Commands.add('login', () => {
  // Получаем данные из переменных окружения
  const username = Cypress.env('username')
  const password = Cypress.env('password')

  cy.visit('https://by01-vm46.topsoft.local/login')

  cy.get('[placeholder="Имя пользователя"][class="dx-texteditor-input"]')
    .type(username)

  cy.get('[placeholder="Пароль"][class="dx-texteditor-input"]')
    .type(password, { log: false }) // Скрываем пароль в логах

  cy.get('form').submit()

  cy.get('.overlay-form', { timeout: 20000 })
    .should('not.exist')

  cy.get('body').then(($body) => {
    // Проверяем, есть ли элемент с aria-label="ОК"
    if ($body.find('[aria-label="ОК"]').length > 0) {
      // Если есть - кликаем на него
      cy.get('[aria-label="ОК"]', { timeout: 20000 })
        .should('be.visible')
        .click()

      cy.get('.overlay-form', { timeout: 10000 })

      cy.get('[aria-label="На главную"]', { timeout: 10000 })
        .should('be.visible')
        .click()
    } else {
      // Если нет - ищем кнопку "Подключиться"
      cy.get('div[class="dx-button-content"]')
        .contains('Подключиться', { timeout: 10000 })
        .should('be.visible')
        .click()
    }
  })

  cy.get('.overlay-form', { timeout: 20000 })
    .should('not.exist')
})