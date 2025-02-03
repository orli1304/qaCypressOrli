import HomePage from "../PageObjects/HomePage";
import CustomerServicePage from "../PageObjects/CustomerServicePage";
import SearchPage from "../PageObjects/SearchPage";
describe("task1", function () {
  let homePage;
  beforeEach(function () {
    homePage = new HomePage();
    cy.visit("https://www.amazon.com/"); // Visit the page before each test
  });

  it("check home page", function () {
    //Variable definitions for PAGE OBJECTS
    homePage.clickadressPupup();
    homePage.getTodayDealsTab.should("be.visible");
    homePage.getcustomerServiceTab.should("be.visible");
    homePage.getcardLayout.should("be.visible");
  });
  it("check navigate customer service page", function () {
    const customerSevice = new CustomerServicePage();
    homePage.clickCustomerServiceTab();
    customerSevice
      .textTitle()
      .should("eq", "Welcome to Amazon Customer Service"); //checkin if im on the right page
  });

  it("search field and track your package", function () {
    const customerSevice = new CustomerServicePage();
    const searchPage = new SearchPage();

    homePage.clickCustomerServiceTab();
    homePage.clickadressPupup();
    cy.fixture("data.json").then((data) => {
      customerSevice.typeSearchField(data.searchFieldText);
      searchPage.texttitleSearchPage().should("contain", data.searchFieldText); //checkin if im on the right page
    });
    //According to the task, I am supposed to take the first result, but when I searched, there were no results. Therefore, I will click another button in this page and them it will show as first result
    searchPage.clickWhereIsMyStuffButton();
    searchPage.clickTrackYourPackageButton();
    searchPage
      .texttitleTrackYourPackage()
      .should("eq", " Tracking your package"); //checkin if im on the right page
  });
});
