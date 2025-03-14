import LoginPage from '../support/pages/loginPage';
import SocialConnectPage from '../support/pages/socialConnectPage';

describe('Social Connect Tests', () => {
  before(() => {
    LoginPage.loginWithSession();
  });

  describe('Navigate to Social Connect', () => {
    it('Visits Social Connect page without 401', () => {
      SocialConnectPage.visit();
      SocialConnectPage.clickYouTubeIcon();
      SocialConnectPage.clickYouTubeBranding();
      SocialConnectPage.clickUseAnotherAccount();
    });

    it('Handles Gmail authentication (Manual Step)', () => {
      SocialConnectPage.handleManualLogin();
    });

    it('Confirms successful YouTube connection', () => {
      SocialConnectPage.confirmSuccessfulConnection();
    });
  });
});
