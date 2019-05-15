import { VimeoAppTemplatePage } from './app.po';

describe('VimeoApp App', function() {
  let page: VimeoAppTemplatePage;

  beforeEach(() => {
    page = new VimeoAppTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
