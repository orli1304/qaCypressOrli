class CartPage {
  itemsInCart = "[data-itemtype='active']"; //list of item on the cart
  addQuantity = ".a-icon-small-add"; // plus for addQuantity
  deleteItem = "input[value='Delete']"; //list of delete item button
  freeShipping = "#gutterCartViewForm .a-alert-inline-success"; // free shipping icon

  checkItemsInCart(
    amount //i enter the amount of items i want in the cart
  ) {
    //check the amount of items in cart
    cy.get(this.itemsInCart) // Get all items in the cart
      .should("have.length", amount);
  }

  clickAddQuantity(itemNU, quantity) {
    //add Quantity to specific item
    cy.get(this.itemsInCart)
      .eq(itemNU) // Target the item by index
      .find(this.addQuantity) // Find the "add quantity" button
      .as("addQuantityBtn");
    for (let i = 1; i < quantity; i++) {
      // For each click to add quantity
      cy.get("@addQuantityBtn") // Re-query the button using the alias
        .click() // Click the "add quantity" button
        // Break the chain by using .then() to ensure Cypress waits for each interaction
        .then(() => {
          // After clicking, we explicitly re-query the items and the button in case the page has re-rendered
          cy.get(this.itemsInCart).eq(itemNU); // Re-query the item in case of DOM update
          cy.get("@addQuantityBtn"); // Re-query the add quantity button
        });
    }
  }

  deleteItems() {
    cy.get(this.itemsInCart) // Get the list of items in the cart
      .then(($els) => {
        const initialLength = $els.length; // Save the length of the elements in a variable
        for (let i = 0; i < initialLength; i++) {
          cy.get(this.itemsInCart) // Get all items in the cart
            .first() // Select the first item
            .find(this.deleteItem) // Find the delete button within the first item
            .click();
          cy.reload();
        }
      });
  }

  get getfreeShipping() {
    return cy.get(this.freeShipping); //
  }
}
export default CartPage;
