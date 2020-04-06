describe('My First Test', function() {
    it('finds the content "type"', function() {
      cy.visit('');
  
      cy
        .get('#emailInput')
        .type('');
      cy
        .get('.submit')
        .click()
    })
  })