import { getOwner } from '@ember/owner';
import Component from '@glimmer/component';
import perform from 'ember-concurrency/helpers/perform';
import { t } from 'ember-intl';
import { pageTitle } from 'ember-page-title';
import { UiForm, UiPage } from 'my-v2-addon';
import type { Model } from 'my-v2-app-strict/routes/form';
import { ContactMe } from 'my-v2-app-strict/utils/routes/form';

import styles from './form.module.css';

interface FormSignature {
  Args: {
    controller: unknown;
    model: Model;
  };
}

export default class FormRoute extends Component<FormSignature> {
  contactMe = new ContactMe(getOwner(this)!);

  <template>
    {{pageTitle (t "routes.form.title")}}

    <UiPage @title={{t "routes.form.title"}}>
      <UiForm
        @data={{this.contactMe.initialData}}
        @instructions={{t "routes.form.contact-me-form.instructions"}}
        @onSubmit={{perform this.contactMe.submitData}}
        @title={{t "routes.form.contact-me-form.title"}}
        as |F|
      >
        <div class={{styles.field}}>
          <F.Input
            @isRequired={{true}}
            @key="name"
            @label={{t "routes.form.contact-me-form.fields.name.label"}}
            @placeholder={{t
              "routes.form.contact-me-form.fields.name.placeholder"
            }}
          />
        </div>

        <div class={{styles.field}}>
          <F.Input
            @isRequired={{true}}
            @key="email"
            @label={{t "routes.form.contact-me-form.fields.email.label"}}
            @placeholder={{t
              "routes.form.contact-me-form.fields.email.placeholder"
            }}
            @type="email"
          />
        </div>

        <div class={{styles.field}}>
          <F.Textarea
            @key="message"
            @label={{t "routes.form.contact-me-form.fields.message.label"}}
          />
        </div>

        {{#if this.contactMe.showSubscribe}}
          <div class={{styles.field}}>
            <F.Checkbox
              @key="subscribe"
              @label={{t "routes.form.contact-me-form.fields.subscribe.label"}}
            />
          </div>
        {{else}}
          <div class={{styles.field}}>
            <F.Number
              @key="donation"
              @label={{t "routes.form.contact-me-form.fields.donation.label"}}
              @minValue={{0}}
              @placeholder={{t
                "routes.form.contact-me-form.fields.donation.placeholder"
              }}
              @step={{10}}
            />
          </div>
        {{/if}}
      </UiForm>
    </UiPage>
  </template>
}
