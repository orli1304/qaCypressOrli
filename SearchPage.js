class SearchPage {
  titleSearchPage = ".help-content h1";
  trackYourPackageButton =
    "[href='https://www.amazon.com/gp/help/customer/display.html?ref_=hp_wms_typ_c&nodeId=GENAFPTNLHV7ZACW']";
  whereIsMyStuffButton = "p .same_window";
  // trackYourPackage page
  titleTrackYourPackage = ".help-content h1"; //כותרת

  texttitleSearchPage() {
    //get the title of the text
    return cy
      .get(this.titleSearchPage) // Get the element
      .invoke("text") // Get the text of the element
      .then((text) => {
        return text; // Return the text to the man test
      });
  }

  clickWhereIsMyStuffButton() {
    cy.get(this.whereIsMyStuffButton).click();
  }
  clickTrackYourPackageButton() {
    cy.get(this.trackYourPackageButton).click();
  }
  texttitleTrackYourPackage() {
    //get the title of the text
    return cy
      .get(this.titleTrackYourPackage) // Get the element
      .invoke("text") // Get the text of the element
      .then((text) => {
        return text; // Return the text to the man test
      });
  }
}

export default SearchPage;
