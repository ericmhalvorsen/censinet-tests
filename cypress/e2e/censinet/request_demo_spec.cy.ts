describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://censinet.com")

    cy.contains("Demo Request").click({ force: true })

    cy.get("input[name='firstname']").type("John")
    cy.get("input[name='lastname']").type("Smith")
    cy.get("input[name='organization']").type("Censinet")
    cy.get("input[name='jobtitle']").type("Automated Testing Framework")

    cy.get("input[name='email']").type("integration-testing@censinet.com")
    cy.get("input[name='phone']").type("123-456-7890")
    cy.get("input[name='state']").type("MA")
    cy.get("input[name='source']").type("None")
    cy.get("textarea[name='comments']").type("None")

    cy.get('iframe')
    .then($iframe => {
      const $body = $iframe.contents().find('body');
      cy.wrap($body).find('.recaptcha-checkbox').should('exist').click()
    });

  })
})
