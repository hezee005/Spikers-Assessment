export default new SocialConnectPage();

class SocialConnectPage {
    visit() {
      cy.visit('https://demo.spikerz.com/social-connect', {
        auth: { username: 'me', password: 'SmipMe123456' }
      });
    }
  
    clickYouTubeIcon() {
      cy.get('img[src="/assets/platform-icons/circle/youtube.svg"]').click();
    }
  
    clickYouTubeBranding() {
      cy.get('img[src="assets/youtube-branding/yt_logo_rgb_light.png"]').click();
    }
  
    clickUseAnotherAccount() {
      cy.contains('Use another account').click();
    }
  
    handleManualLogin() {
      cy.log('User must manually log in to Google due to security restrictions.');
    }
  
    confirmSuccessfulConnection() {
      cy.contains('Continue').click();
      cy.contains('Select all permissions').click();
      cy.contains('Continue').click();
      cy.contains('Spikerz Automation Connected').should('be.visible');
    }
  }
  
  
  