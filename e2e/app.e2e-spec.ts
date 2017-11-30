import { NgxEventsPubsubPage } from './app.po';

describe('ngx-events-pubsub App', () => {
  let page: NgxEventsPubsubPage;

  beforeEach(() => {
    page = new NgxEventsPubsubPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
