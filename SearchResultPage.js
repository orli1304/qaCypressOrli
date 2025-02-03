class SearchResultPage {
  firstItem = '.s-result-list [data-cel-widget="search_result_1"] '; // first result on searchpage

  clickfirstItem() {
    cy.get(this.firstItem).click();
  }
}
export default SearchResultPage;
