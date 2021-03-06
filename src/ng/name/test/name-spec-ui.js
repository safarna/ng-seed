describe('Typing a name into the name input', function() {
  it('should display a greeting containing the input name', function() {
    browser.get('http://localhost:9999/');

    element(by.className('name-input')).sendKeys('ZELDA');

    var greeting = element(by.className('name'));

    expect(greeting.getText()).toEqual('Well Zelda,');
  });
});