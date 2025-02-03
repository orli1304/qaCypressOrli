class addToCartPage {
  AddToCartCOnfirmation = "#NATC_SMART_WAGON_CONF_MSG_SUCCESS"; //add to cart massage
  CartButton = "#nav-cart"; //click on cart

  textAddToCartCOnfirmation(massage) {
    //get the title of the text
    return cy
      .get(this.AddToCartCOnfirmation) // Get the element
      .invoke("text") // Get the text of the element
      .then((text) => {
        if (text == massage) return true;
        return false;
      });
  }

  clickCartButton() {
    cy.get(this.CartButton).click();
  }
}
export default addToCartPage;
