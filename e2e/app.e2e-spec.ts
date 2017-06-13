import { RAMPage } from './app.po';

describe('ram App', () => {
  let page: RAMPage;

  beforeEach(() => {
    page = new RAMPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
