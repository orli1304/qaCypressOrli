class ProductPage {
  addToCartButton = "#add-to-cart-button"; //add ro cart button
  selectedColor = "#color_name_6.image-swatch-button-with-slots"; //select specific color
  colorTitle = "#inline-twister-expanded-dimension-text-color_name"; //after you select color the title of color change


  clickSelectedColor(color) {
    //click selected color
    cy.get(this.selectedColor).click();
    cy.get(this.colorTitle)
    .should('have.text', color); // Assert that the title text matches the selected color
    
    
  }

  clickAddToCartButton() {
    //click add to cart button
    cy.get(this.addToCartButton).click();
  }
}
export default ProductPage;
