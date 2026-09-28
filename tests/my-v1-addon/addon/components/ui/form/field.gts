import type { TOC } from '@ember/component/template-only';
import { hash, uniqueId } from '@ember/helper';
import { local } from 'embroider-css-modules';

const styles = {
  container: 'my-v1-addon__ui__form__field__container',
  feedback: 'my-v1-addon__ui__form__field__feedback',
  field: 'my-v1-addon__ui__form__field__field',
  'is-error': 'my-v1-addon__ui__form__field__is-error',
  'is-inline': 'my-v1-addon__ui__form__field__is-inline',
  'is-wide': 'my-v1-addon__ui__form__field__is-wide',
  label: 'my-v1-addon__ui__form__field__label',
  'no-feedback': 'my-v1-addon__ui__form__field__no-feedback',
} as const;

interface UiFormFieldSignature {
  Args: {
    errorMessage?: string;
    isInline?: boolean;
    isWide?: boolean;
  };
  Blocks: {
    field: [
      {
        inputId: string;
      },
    ];
    label: [
      {
        inputId: string;
      },
    ];
  };
}

const UiFormField: TOC<UiFormFieldSignature> = <template>
  {{#let (uniqueId) as |inputId|}}
    <div
      class={{local
        styles
        "container"
        (if @isInline "is-inline")
        (if @isWide "is-wide")
        (unless @errorMessage "no-feedback")
      }}
    >
      <div class={{styles.label}}>
        {{yield (hash inputId=inputId) to="label"}}
      </div>

      <div class={{styles.field}}>
        {{yield (hash inputId=inputId) to="field"}}
      </div>

      {{#if @errorMessage}}
        <div
          class={{local styles "feedback" "is-error"}}
          data-test-error-message
          role="alert"
        >
          {{@errorMessage}}
        </div>
      {{/if}}
    </div>
  {{/let}}
</template>;

export default UiFormField;
