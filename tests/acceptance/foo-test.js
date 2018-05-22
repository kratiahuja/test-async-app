import { module, test } from 'qunit';
import { settled, visit, currentURL, click, pauseTest, find } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('basic acceptance test', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('can visit /foo', async function(assert) {
    await visit('/foo');
    assert.equal(currentURL(), '/foo');
  });

  test('clicking button', async function(assert) {
    this.server.createList('author', 1);
  
    await visit('/foo');
    assert.equal(currentURL(), '/foo');

    await click('button.bar-button');

    assert.equal(find('p.toggle-text-contents').innerHTML, 'Button was pressed');

    assert.equal(find('p.text-data').innerHTML, 'Krati AA');

    /* Alternatively instead of using settled() you can do: 
    const contentEl = await waitFor('p.toggle-text-contents');
    assert.equal(contentEl.innerHTML, 'Button was pressed');
    */
  });
});
