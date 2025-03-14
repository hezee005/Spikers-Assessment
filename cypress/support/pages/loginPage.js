class LoginPage {
  visit() {
    cy.visit('https://demo.spikerz.com/', {
      auth: { username: 'me', password: 'SmipMe123456' }
    });
  }

  loginWithSession() {
    cy.session('loginSession', () => {
      this.visit();
    });
  }
}

export default LoginPage; 