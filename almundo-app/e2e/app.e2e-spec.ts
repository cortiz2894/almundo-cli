import { AlmundoAppPage } from './app.po';

describe('almundo-app App', function() {
  let page: AlmundoAppPage;

  beforeEach(() => {
    page = new AlmundoAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
