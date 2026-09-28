import { concat, hash, uniqueId } from '@ember/helper';
import { on } from '@ember/modifier';
import { action } from '@ember/object';
import { trackedObject } from '@ember/reactive/collections';
import Component from '@glimmer/component';
import type { WithBoundArgs } from '@glint/template';
import { ContainerQuery, width } from 'ember-container-query';
import { t } from 'ember-intl';

import UiFormCheckbox from './form/checkbox';
import UiFormInformation from './form/information';
import UiFormInput from './form/input';
import UiFormNumber from './form/number';
import UiFormSelect from './form/select';
import UiFormTextarea from './form/textarea';

const styles = {
  actions: 'my-v1-addon__ui__form__actions',
  form: 'my-v1-addon__ui__form__form',
  'submit-button': 'my-v1-addon__ui__form__submit-button',
} as const;

interface UiFormSignature {
  Args: {
    data?: Record<string, unknown>;
    instructions?: string;
    onSubmit: (data: Record<string, unknown>) => Promise<void>;
    title?: string;
  };
  Blocks: {
    default: [
      {
        Checkbox: WithBoundArgs<
          typeof UiFormCheckbox,
          'data' | 'isInline' | 'isWide' | 'onUpdate'
        >;
        Input: WithBoundArgs<
          typeof UiFormInput,
          'data' | 'isWide' | 'onUpdate'
        >;
        Number: WithBoundArgs<
          typeof UiFormNumber,
          'data' | 'isWide' | 'onUpdate'
        >;
        Select: WithBoundArgs<
          typeof UiFormSelect,
          'data' | 'isWide' | 'onUpdate'
        >;
        Textarea: WithBoundArgs<
          typeof UiFormTextarea,
          'data' | 'isWide' | 'onUpdate'
        >;
      },
    ];
  };
}

export default class UiForm extends Component<UiFormSignature> {
  data = trackedObject<Record<string, unknown>>(this.args.data ?? {});

  @action async submitForm(event: SubmitEvent): Promise<void> {
    event.preventDefault();

    await this.args.onSubmit(this.data);
  }

  @action updateData({ key, value }: { key: string; value: unknown }): void {
    this.data[key] = value;
  }

  <template>
    {{#let (uniqueId) as |formId|}}
      <form
        aria-describedby={{if @instructions (concat formId "-instructions")}}
        aria-labelledby={{if @title (concat formId "-title")}}
        class={{styles.form}}
        data-test-form={{if @title @title ""}}
        {{on "submit" this.submitForm}}
      >
        <UiFormInformation
          @formId={{formId}}
          @instructions={{@instructions}}
          @title={{@title}}
        />

        <ContainerQuery @features={{hash wide=(width min=480)}} as |CQ|>
          {{yield
            (hash
              Checkbox=(component
                UiFormCheckbox
                data=this.data
                isInline=true
                isWide=CQ.features.wide
                onUpdate=this.updateData
              )
              Input=(component
                UiFormInput
                data=this.data
                isWide=CQ.features.wide
                onUpdate=this.updateData
              )
              Number=(component
                UiFormNumber
                data=this.data
                isWide=CQ.features.wide
                onUpdate=this.updateData
              )
              Select=(component
                UiFormSelect
                data=this.data
                isWide=CQ.features.wide
                onUpdate=this.updateData
              )
              Textarea=(component
                UiFormTextarea
                data=this.data
                isWide=CQ.features.wide
                onUpdate=this.updateData
              )
            )
          }}
        </ContainerQuery>

        <div class={{styles.actions}}>
          <button
            class={{styles.submit-button}}
            data-test-button="Submit"
            type="submit"
          >
            {{t "components.ui.form.submit"}}
          </button>
        </div>
      </form>
    {{/let}}
  </template>
}
