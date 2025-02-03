class ProductPage {
  addToCartButton = "#add-to-cart-button"; //add ro cart button
  selectedColor = "#color_name_6.image-swatch-button-with-slots"; //after you select color the title of color change

  clickSelectedColor() {
    //click selected color
    cy.get(this.selectedColor).click();
  }

  clickAddToCartButton() {
    //click add to cart button
    cy.get(this.addToCartButton).click();
  }
}
export default ProductPage;
