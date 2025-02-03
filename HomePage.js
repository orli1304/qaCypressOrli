class HomePage {
  loginButton = "#nav-link-accountList-nav-line-1";
  customerServiceTab =
    "[href='/gp/help/customer/display.html?nodeId=508510&ref_=nav_cs_customerservice']";
  TodayDealsTab = "[href='/gp/goldbox?ref_=nav_cs_gb']";
  cardLayout = "div #gw-card-layout";
  adressPupup = "[data-action-type='DISMISS']";
  SearchOnAmazon = "input#twotabsearchtextbox"; //search field element
  searchButton = "#nav-search-submit-button"; // search button element

  clickLoginButton() {
    cy.get(this.loginButton).click();
  }

  clickCustomerServiceTab() {
    cy.get(this.customerServiceTab).should("be.visible").click({ force: true });
  }

  clickadressPupup() { //there ia a pup uo that sometimes shows up so i asking if it visible click dismiss
    cy.get(this.adressPupup).then(($popup) => {
      if ($popup.length) {
        // Check if the element exists
        cy.get(this.adressPupup).should("be.visible").click(); // Click the popup if it exists
      }
    });
  }

  TypeSearchOnAmazon(text) {
    //type om search field on homepage
    cy.get(this.SearchOnAmazon).type(text);
    cy.get(this.searchButton).click();
  }

  get getcustomerServiceTab() {
    return cy.get(this.customerServiceTab); //
  }
  get getTodayDealsTab() {
    return cy.get(this.TodayDealsTab); //
  }
  get getcardLayout() {
    return cy.get(this.cardLayout); //
  }
}
export default HomePage;
