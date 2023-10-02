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

  it('user can get the currency exchange', () => {
    cy.get('input[name=amount]').clear()
    cy.get('input[name=amount]').type('100')
    cy.get('select[name=baseCurrency]').select('EUR')
    cy.get('select[name=convertTo]').select('JPY')

    cy.contains('100 Euro =')
  })

  it('user can not get the currency exchange', () => {
    cy.get('input[name=amount]').clear()
    cy.get('input[name=amount]').type('100')
    cy.get('select[name=baseCurrency]').select('HRK')
    cy.get('select[name=convertTo]').select('EUR')

    cy.contains('No se pudo realizar la conversión')
  })

  it('user can swap the currency exchange usd to eur', () => {
    cy.get('input[name=amount]').clear()
    cy.get('input[name=amount]').type('100')
    cy.get('select[name=baseCurrency]').select('EUR')
    cy.get('select[name=convertTo]').select('JPY')
    cy.get('button').click()

    cy.get('select[name=baseCurrency]').should('have.value', 'JPY')
    cy.get('select[name=convertTo]').should('have.value', 'EUR')
  })
})
