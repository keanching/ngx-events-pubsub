import { Ng2EventsPubsubPage } from './app.po';

describe('ng2-events-pubsub App', () => {
  let page: Ng2EventsPubsubPage;

  beforeEach(() => {
    page = new Ng2EventsPubsubPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
