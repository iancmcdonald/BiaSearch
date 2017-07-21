import { BiaSearchPage } from './app.po';

describe('bia-search App', () => {
  let page: BiaSearchPage;

  beforeEach(() => {
    page = new BiaSearchPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
