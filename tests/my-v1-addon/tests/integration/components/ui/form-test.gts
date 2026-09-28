import {
  click,
  fillIn,
  find,
  render,
  type TestContext as BaseTestContext,
} from '@ember/test-helpers';
import { setupRenderingTest } from 'dummy/tests/helpers';
import { a11yAudit } from 'ember-a11y-testing/test-support';
import { setupIntl } from 'ember-intl/test-support';
import { UiForm } from 'my-v1-addon';
import { module, test } from 'qunit';

interface TestContext extends BaseTestContext {
  data: Record<string, unknown>;
}

module('Integration | Component | ui/form', function (hooks) {
  setupRenderingTest(hooks);
  setupIntl(hooks, 'en-us');

  hooks.beforeEach(function (this: TestContext) {
    this.data = {
      donation: undefined,
      email: undefined,
      message: 'I 🧡 container queries!',
      name: undefined,
      subscribe: true,
    };
  });

  test('it renders', async function (this: TestContext, assert) {
    const { data } = this;

    const submitForm = (): void => {
      assert.step('submitForm');
    };

    await render(
      <template>
        <UiForm
          @data={{data}}
          @instructions="Still have questions about ember-container-query? Try sending me a message."
          {{! @glint-expect-error: Incorrect type }}
          @onSubmit={{submitForm}}
          @title="Contact me"
          as |F|
        >
          <div>
            <F.Input
              @isRequired={{true}}
              @key="name"
              @label="Name"
              @placeholder="Zoey"
            />
          </div>

          <div>
            <F.Input
              @isRequired={{true}}
              @key="email"
              @label="Email"
              @placeholder="zoey@emberjs.com"
              @type="email"
            />

            <div>
              <F.Textarea @key="message" @label="Message" />
            </div>

            <div>
              <F.Checkbox
                @key="subscribe"
                @label="Subscribe to The Ember Times?"
              />
            </div>

            <div>
              <F.Number
                @key="donation"
                @label="Donation amount ($)"
                @minValue={{0}}
                @placeholder="100"
                @step={{10}}
              />
            </div>
          </div>
        </UiForm>
      </template>,
    );

    const titleId = find('[data-test-title]')!.getAttribute('id')!;
    const instructionsId = find('[data-test-instructions]')!.getAttribute(
      'id',
    )!;

    assert
      .dom('[data-test-form="Contact me"]')
      .hasAria('describedby', instructionsId)
      .hasAria('labelledby', titleId);

    assert.dom('[data-test-field]').exists({ count: 5 });

    assert
      .dom('[data-test-button="Submit"]')
      .hasAttribute('type', 'submit')
      .hasTagName('button')
      .hasText('Submit');

    assert.verifySteps([]);

    await a11yAudit();
  });

  test('We can submit the form', async function (this: TestContext, assert) {
    const { data } = this;

    const submitForm = (data: Record<string, unknown>): void => {
      assert.deepEqual(data, {
        donation: 10000,
        email: 'zoey@emberjs.com',
        message: 'Gude!',
        name: 'Zoey',
        subscribe: false,
      });

      assert.step('submitForm');
    };

    await render(
      <template>
        {{! @glint-expect-error: Incorrect type }}
        <UiForm @data={{data}} @onSubmit={{submitForm}} as |F|>
          <div>
            <F.Input
              @isRequired={{true}}
              @key="name"
              @label="Name"
              @placeholder="Zoey"
            />
          </div>

          <div>
            <F.Input
              @isRequired={{true}}
              @key="email"
              @label="Email"
              @placeholder="zoey@emberjs.com"
              @type="email"
            />
          </div>

          <div>
            <F.Textarea @key="message" @label="Message" />
          </div>

          <div>
            <F.Checkbox
              @key="subscribe"
              @label="Subscribe to The Ember Times?"
            />
          </div>

          <div>
            <F.Number
              @key="donation"
              @label="Donation amount ($)"
              @minValue={{0}}
              @placeholder="100"
              @step={{10}}
            />
          </div>
        </UiForm>
      </template>,
    );

    await fillIn('[data-test-field="Name"]', 'Zoey');
    await fillIn('[data-test-field="Email"]', 'zoey@emberjs.com');
    await fillIn('[data-test-field="Message"]', 'Gude!');
    await click('[data-test-field="Subscribe to The Ember Times?"]');
    await fillIn('[data-test-field="Donation amount ($)"]', '10000');

    await click('[data-test-button="Submit"]');

    assert.verifySteps(['submitForm']);
  });
});
