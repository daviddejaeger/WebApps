import { AppPage } from './app.po';
import { browser, element, by} from 'protractor';

describe('webshop App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display ursius in the copyrights paragraph', () => {
    browser.get('/');
    const paragraph = element(by.css('p')).getText();
    expect(paragraph).toContain('Ursius');
    // page.navigateTo();
    // expect(page.getParagraphText()).toEqual('Welcome to app!');
  });

});
