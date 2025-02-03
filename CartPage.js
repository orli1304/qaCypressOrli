class CartPage{
    itemsInCart="[data-itemtype='active']"; //list of item on the cart
    freeShipping="#gutterCartViewForm .a-alert-inline-success";// free shipping icon
    addQuantity=".a-icon-small-add";// plus for addQuantity
   deleteItem="input[value='Delete']";//list of delete item button

   checkItemsInCart (amount)//i enter the amount of items i want in the cart
   { //check the amount of items in cart
    cy.get(this.itemsInCart)  // Get all items in the cart
    .should('have.length', amount);
}

clickAddQuantity(itemNU, quantity)
{ //add Quantity to specific item
cy.get(this.itemsInCart)
.each(($item, index) => {
if(index== itemNU){ //the item I want to add Quantity
for (let i = 1 ; i < quantity; i++) { //run till the right amount of items
cy.wrap($item)
.find(this. addQuantity)
.click();//then click plus every time
}
}
}
)}

deleteItems()
{
    cy.get(this.itemsInCart) //get the element list
    .then(($els) => {
        Cypress._.reverse($els.get()).forEach(($el) => {
            cy.wrap($el).find(this.deleteItem).click();//click on delete for each one
    });
    });
}

get getfreeShipping()
 {
    return cy.get(this.freeShipping);  //
  }
}
export default CartPage;