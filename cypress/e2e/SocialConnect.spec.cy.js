import LoginPage from '../support/pages/loginPage';
import SocialConnectPage from '../support/pages/socialConnectPage';

const loginPage = new LoginPage();
const socialConnectPage = new SocialConnectPage()

describe('Social Connect Tests', () => {
  
  before(() => {
    loginPage.loginWithSession();
  });

  describe('Navigate to Social Connect', () => {
    it('Visits Social Connect page without 401', () => {
      socialConnectPage.visit();
      socialConnectPage.clickYouTubeIcon();
      socialConnectPage.clickYouTubeBranding();
      socialConnectPage.clickUseAnotherAccount();
    });

    it('Handles Gmail authentication (Manual Step)', () => {
      socialConnectPage.handleManualLogin();
    });

    it('Confirms successful YouTube connection', () => {
      socialConnectPage.confirmSuccessfulConnection();
    });
  });
});
