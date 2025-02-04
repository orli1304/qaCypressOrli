import HomePage from "../PageObjects/HomePage";
import CartPage from "../PageObjects/CartPage";
import addToCartPage from "../PageObjects/addToCartPage";
import SearchResultPage from "../PageObjects/SearchResultPage";
import LoginPage from "../PageObjects/LoginPage";
import ProductPage from "../PageObjects/ProductPage";
describe("task2", function () {
  let login, homePage, SearchResult, addTocart, cart, product;
  beforeEach(function () {
    cy.visit("https://www.amazon.com/");
    cy.reload();
    cy.clearCookies();
    homePage = new HomePage();
    SearchResult = new SearchResultPage();
    addTocart = new addToCartPage();
    cart = new CartPage();
    login = new LoginPage();
    product = new ProductPage();
    //get user and password from data and then login
    cy.fixture("data.json").then((data) => {
      const email = data.email;
      const password = data.password;
      const text = data.itemText;
      login.userLogin(email, password); //Taking a method from the login page
      //type on search field and then click
      homePage.TypeSearchOnAmazon(text);
      //click first item
      SearchResult.clickfirstItem();
      //add item to cart and then confirm
      product.clickAddToCartButton();
      addTocart.textAddToCartCOnfirmation(data.addToCartText); //there is a mathod for comper the texts
      //add another product
      cy.visit(
        "https://www.amazon.com/Scissors-iBayam-Crafting-Scrapbooking-Knitting/dp/B07H3QKN2Z"
      );
      product.clickSelectedColor(data.color);
      product.clickAddToCartButton();
      addTocart.textAddToCartCOnfirmation(data.addToCartText); //there is a mathod for comper the texts
      addTocart.clickCartButton();
    });
  });

  afterEach(function () {
    //delete items from cart
    cart = new CartPage();
    cart.deleteItems();
  });

  it("check product add to cart", function () {
    cart.checkItemsInCart(2); //Check that all the products are in the cart
  });

  it("add Quantity for product and check free shipping", function () {
    cart.getfreeShipping.should("not.exist"); // there is an icon that show up only on free shipping
    cart.clickAddQuantity(1, 2);
    cart.getfreeShipping.should("be.visible"); // there is an icon that show up only on free shipping
  });
});
