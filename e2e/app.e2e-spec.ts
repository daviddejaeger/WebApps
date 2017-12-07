import { AppPage } from './app.po';
import { browser, element, by} from 'protractor';

describe('webshop App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    browser.get('/');
    const title = element(by.css('h3')).getText();
    expect(title).toEqual('WELKOM');
    // page.navigateTo();
    // expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
  
});
