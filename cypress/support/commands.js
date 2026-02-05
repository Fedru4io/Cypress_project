Cypress.Commands.add('login', () => {
  // Получаем данные из переменных окружения
  const username = Cypress.env('username');
  const password = Cypress.env('password');

  cy.visit('https://by01-vm46.topsoft.local/login');

  cy.get('[placeholder="Имя пользователя"][class="dx-texteditor-input"]')
    .type(username)
    .should('be.visible');

  cy.get('[placeholder="Пароль"][class="dx-texteditor-input"]')
    .type(password, { log: false }); // Скрываем пароль в логах

  cy.get('form').submit();

  cy.get('body').then(($body) => {
    // Проверяем, есть ли элемент с aria-label="ОК" (в репозитории есть ресурс, но он не подключен)
    if ($body.find('[aria-label="ОК"]').length > 0) {
      cy.get('.overlay-form', { timeout: 20000 })
        .should('not.exist');

      // Если есть - кликаем на него
      cy.get('[aria-label="ОК"]', { timeout: 20000 })
        .click({ force: true });

      cy.get('.overlay-form', { timeout: 20000 })
        .should('not.exist');

      cy.get('[aria-label="На главную"]', { timeout: 10000 })
        .should('be.visible')
        .click();
    }

    // Если сессия на сервере уже существует
    if ($body.find('div[class="dx-button-content"]').length > 0) {
      cy.get('div[class="dx-button-content"]')
        .contains('Подключиться', { timeout: 10000 })
        .should('be.visible')
        .click();
    }
  });
});