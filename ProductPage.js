

class ProductPage
{

    addToCartButton="#add-to-cart-button";
    colorList=" div#inline-twister-expander-content-color_name li ";// list of coption for product color
    selectedColor=" #inline-twister-expanded-dimension-text-color_name";//after you select color the title of color change

    clickAddToCartButton ()
    {
        cy.get(this.addToCartButton).click();
     }  

    ClickColorListItem(color)//mathod for choosing the right
    {
         cy.get(this.colorList)
            .each(($li) => {//run each one of the options
            cy.wrap ($li).invoke('attr', 'alt') // Get the 'alt' attribute
            .then((altValue) => {
                if (altValue === color) { // Check if the alt value matches the desired color
                    cy.wrap($li).click(); // Click on the item if it matches
                }
            });
    });

        //     .click()//then click
        //     .then(() => {
        // cy.get(this.selectedColor)
        //     .invoke('text')
        //      .then((text) =>{ //then get the text from the title of color

        
        //if(text==color){//if the text eq to color
        //return false;//stop the each
        //}
        
    }
}
export default ProductPage;