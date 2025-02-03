class CustomerServicePage {
  title = ".page-container h1";
  searchField = "input#hubHelpSearchInput";

  textTitle() {
    //get the title of the text
    return cy
      .get(this.title) // Get the element
      .invoke("text") // Get the text of the element
      .then((text) => {
        return text; // Return the text to the man test
      });
  }

  typeSearchField(text) {
    cy.get(this.searchField).scrollIntoView().type(text).type("{enter}");
  }
}
export default CustomerServicePage;
