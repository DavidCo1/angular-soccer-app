import { SoccerAppPage } from './app.po';

describe('soccer-app App', () => {
  let page: SoccerAppPage;

  beforeEach(() => {
    page = new SoccerAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
