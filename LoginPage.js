class LoginPage {
  loginButton = "#nav-link-accountList-nav-line-1";
  emailField = "#ap_email";
  continueButton = "input#continue";
  passwordField = "#ap_password";
  sumbitButton = "#signInSubmit";

  //mathod for login
  userLogin(email, password) {
    cy.get(this.loginButton).click();
    cy.get(this.emailField).type(email);
    cy.get(this.continueButton).click();
    cy.get(this.passwordField).type(password);
    cy.get(this.sumbitButton).click();
  }
}
export default LoginPage;
