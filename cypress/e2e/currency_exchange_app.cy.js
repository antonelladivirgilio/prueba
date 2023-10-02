describe('currency exchange app', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('frontpage can be opened', () => {
    cy.contains('Currency exchange')
  })

  it('user can see the default currency exchange usd to eur', () => {
    cy.contains('1 USD to EUR - Convert US Dollar to Euro')
    cy.get('input[name=amount]').should('have.value', '1')
    cy.get('select[name=baseCurrency]').should('have.value', 'USD')
    cy.get('select[name=convertTo]').should('have.value', 'EUR')

    cy.contains('1 USD = ')
  })
})
