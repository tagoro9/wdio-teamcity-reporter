'use strict';

const assert = require('assert');

suite('simple exception', () => {
  setup(() => {
    browser.url('https://www.google.ru/');
  });

  test.skip('pending test', () => {});

  test('artificial error', () => {
    assert.equal(browser.getAttribute('body', 'non-existing-attribute'), 'guess');
  });
});
